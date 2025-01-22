import { ProfileDto } from "@/entities/profile";
import { WishDto } from "@/entities/wish";
import { db } from "@/shared/config/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const userApi = {
  baseCollection: "wishlist",

  getQueryKey: function (uid: string) {
    return [this.baseCollection, uid];
  },

  getUserProfile: async function (uid: string) {
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data() as ProfileDto;
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      console.error("Error retrieving user profile:", error);
    }
  },

  getUserWishList: async function (uid: string) {
    try {
      const querySnapshot = await getDocs(
        collection(db, "users", uid, this.baseCollection)
      );
      const documents: WishDto[] = [];

      if (querySnapshot.empty) return documents;

      querySnapshot.forEach((doc) => {
        documents.push(doc.data() as WishDto);
      });

      return documents;
    } catch (error) {
      console.error("Error retrieving user wish list:", error);
    }
  },
};
