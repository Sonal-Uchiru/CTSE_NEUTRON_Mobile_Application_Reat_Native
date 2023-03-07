import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { ICreateItem } from "../../types/items/ICreateItemData";
import { IUpdateItemData } from "../../types/items/IUpdateItemData";
import ItemRepository from "../repositories/ItemRepository";

class ItemService {
    async addItemAsync(item: ICreateItem): Promise<void> {
        try {
          await ItemRepository.addItemAsync(item);
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
    
      async updateItemAsync(item: IUpdateItemData): Promise<void> {
        try {
          await ItemRepository.updateItemAsync(item);
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
    
      async deleteItemAsync(docId: string): Promise<void> {
        try {
          await ItemRepository.deleteItemAsync(docId);
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
    
      async getItemListAsync(): Promise<any> {
        try {
          const docSnapshots:QueryDocumentSnapshot<DocumentData> = await ItemRepository.getItemListAsync();
          docSnapshots.data
          
          
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
}

export default new ItemService();

