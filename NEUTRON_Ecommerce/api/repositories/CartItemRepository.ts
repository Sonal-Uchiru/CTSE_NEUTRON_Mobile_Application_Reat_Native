import { CreateCartItemData } from '../../types/cart_Items/CreateCartItemData';
import { UpdateCartItemData } from '../../types/cart_Items/UpdateCartItemData';
import { FireStoreDB } from '../../utils/firebase/Configuration';
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDoc,
  DocumentData,
  getDocs,
  QuerySnapshot,
  updateDoc
} from 'firebase/firestore';

class CartItemRepository {
  async addCartItemAsync(cartItem: CreateCartItemData): Promise<void> {
    try {
      await addDoc(collection(FireStoreDB, 'cartItems'), { ...cartItem });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateCartItemAsync(cartItem: UpdateCartItemData): Promise<void> {
    try {
      await updateDoc(doc(FireStoreDB, 'cartItems', cartItem.docId), {
        quantity: cartItem.quantity
      });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteCartItemAsync(docId: string): Promise<void> {
    try {
      await deleteDoc(doc(FireStoreDB, 'cartItems', docId));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getCartItemListAsync(): Promise<QuerySnapshot<DocumentData>> {
    try {
      return await getDocs(collection(FireStoreDB, 'cartItems'));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getCartItemByIdAsync(docId: string): Promise<DocumentData> {
    try {
      const docRef = doc(FireStoreDB, 'cartItems', docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap;
      } else {
        // doc.data() will be undefined in this case
        throw new Error('Cart item not found');
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export default new CartItemRepository();
