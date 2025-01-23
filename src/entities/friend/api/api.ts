import { ProfileDto } from "@/entities/profile";
import { db } from "@/shared/config/firebase";
import { arrayRemove, doc, getDoc, updateDoc } from "firebase/firestore";

export const friendApi = {
  friendsFieldName: "friends",

  getQueryKey: function () {
    return [this.friendsFieldName];
  },

  getFriendList: async function (uid: string) {
    try {
      const userRef = doc(db, "users", uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) throw new Error("Пользователь не найден");

      const friendsId = (userDoc.data()?.[this.friendsFieldName] ||
        []) as string[];

      if (friendsId.length === 0) return [];

      const friendsRefs = friendsId.map((friendId) =>
        doc(db, "users", friendId)
      );

      //TODO: заменить на решение из Firestore
      const friendsDocs = await Promise.all(
        friendsRefs.map((ref) => getDoc(ref))
      );

      const friendsData: ProfileDto[] = friendsDocs
        .filter((friendDoc) => friendDoc.exists())
        .map((friendDoc) => friendDoc.data() as ProfileDto);

      return friendsData;
    } catch (error) {
      console.error("Error getting friend list:", error);
    }
  },

  deleteFriend: async function (uid: string, friendId: string) {
    try {
      const friendRef = doc(db, "users", uid);
      await updateDoc(friendRef, {
        [this.friendsFieldName]: arrayRemove(friendId),
      });
    } catch (error) {
      console.error("Error deleting friend:", error);
    }
  },
};
