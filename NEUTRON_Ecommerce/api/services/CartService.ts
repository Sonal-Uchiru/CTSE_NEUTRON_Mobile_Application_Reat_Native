import CardRepository from '../repositories/CardRepository';
import { DocumentData, QuerySnapshot } from 'firebase/firestore';
import { CreateCartItemData } from '../../types/cart_Items/CreateCartItemData';
import CartItemRepository from '../repositories/CartItemRepository';
import { UpdateCartItemData } from '../../types/cart_Items/UpdateCartItemData';
import { CartItemModel } from '../../types/cart_Items/CartItemModel';
import { ItemModel } from '../../types/items/ItemModel';
import ItemService from './ItemService';
import AuthenticationRepository from '../repositories/AuthenticationRepository';

export class CartItemService {
  async addCartItemAsync(cartItem: CreateCartItemData): Promise<void> {
    try {
      cartItem.uid = await AuthenticationRepository.getLoggedInUserUid();
      await CartItemRepository.addCartItemAsync(cartItem);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateCartItemAsync(cartItem: UpdateCartItemData): Promise<void> {
    try {
      await CartItemRepository.getCartItemByIdAsync(cartItem.docId);
      cartItem.uid = await AuthenticationRepository.getLoggedInUserUid();
      await CartItemRepository.updateCartItemAsync(cartItem);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteCartItemAsync(docId: string): Promise<void> {
    try {
      await CartItemRepository.getCartItemByIdAsync(docId);
      await CartItemRepository.deleteCartItemAsync(docId);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getCartItemListAsync(): Promise<CartItemModel[]> {
    try {
      const cartItems: CartItemModel[] = [];
      const uid = await AuthenticationRepository.getLoggedInUserUid();

      const querySnapshots: QuerySnapshot<DocumentData> =
        await CartItemRepository.getCartItemListAsync();

      if (querySnapshots.docs.length > 0) {
        querySnapshots.docs.map(async (doc) => {
          const cartItem: DocumentData = doc.data();
          if (uid == cartItem['uid']) {
            const item: ItemModel = await ItemService.getItemByIdAsync(
              cartItem['itemDocId']
            );
            cartItems.push(new CartItemModel(doc.id, item, cartItem['uid']));
          }
        });
      }

      return cartItems;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getCartItemByIdAsync(docId: string): Promise<CartItemModel> {
    try {
      const querySnapshot: DocumentData = await CardRepository.getCardByIdAsync(
        docId
      );
      const content = querySnapshot.data();
      const item: ItemModel = await ItemService.getItemByIdAsync(
        content['itemDocId']
      );

      return new CartItemModel(querySnapshot.id, item, content['uid']);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export default new CartItemService();
