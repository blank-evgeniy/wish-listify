import { ProfileDto } from "@/entities/profile";
import { db } from "@/shared/config/firebase";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  runTransaction,
  updateDoc,
} from "firebase/firestore";

export const friendRequestApi = {
  requestsFieldName: "friend-requests",
  friendsFieldName: "friends",

  getQueryKey: function () {
    return [this.requestsFieldName];
  },

  getFriendRequestList: async function (uid: string) {
    try {
      const userRef = doc(db, "users", uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) throw new Error("Пользователь не найден");

      const friendRequests = (userDoc.data()?.[this.requestsFieldName] ||
        []) as string[];

      if (friendRequests.length === 0) return [];

      const userRefs = friendRequests.map((friendId) =>
        doc(db, "users", friendId)
      );

      //TODO: заменить на решение из Firestore
      const userDocs = await Promise.all(userRefs.map((ref) => getDoc(ref)));

      const usersData: ProfileDto[] = userDocs
        .filter((friendDoc) => friendDoc.exists())
        .map((friendDoc) => friendDoc.data() as ProfileDto);

      return usersData;
    } catch (error) {
      console.error("Ошибка при получении списка заявок:", error);
    }
  },

  sendFriendRequest: async function (senderId: string, receiverId: string) {
    try {
      if (senderId === receiverId)
        throw new Error("Нельзя отправить заявку самому себе");

      const receiverRef = doc(db, "users", receiverId);
      const receiverDoc = await getDoc(receiverRef);

      if (!receiverDoc.exists()) throw new Error("Получатель не найден");

      await updateDoc(receiverRef, {
        [this.requestsFieldName]: arrayUnion(senderId),
      });
    } catch (error) {
      console.error("Ошибка при отправлении заявки:", error);
    }
  },

  acceptFriendRequest: async function (senderId: string, receiverId: string) {
    try {
      const senderRef = doc(db, "users", senderId);
      const receiverRef = doc(db, "users", receiverId);

      await runTransaction(db, async (transaction) => {
        transaction.update(senderRef, {
          [this.friendsFieldName]: arrayUnion(receiverId),
        });

        transaction.update(receiverRef, {
          [this.friendsFieldName]: arrayUnion(senderId),
        });

        transaction.update(receiverRef, {
          [this.requestsFieldName]: arrayRemove(senderId),
        });

        transaction.update(senderRef, {
          [this.requestsFieldName]: arrayRemove(receiverId),
        });
      });
    } catch (error) {
      console.error("Ошибка при принятии заявки", error);
    }
  },

  rejectFriendRequest: async function (senderId: string, receiverId: string) {
    try {
      const receiverRef = doc(db, "users", receiverId);

      await updateDoc(receiverRef, {
        [this.requestsFieldName]: arrayRemove(senderId),
      });
    } catch (error) {
      console.error("Ошибка при отклонении заявки", error);
    }
  },
};
