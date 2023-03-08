import { DocumentData, QuerySnapshot } from 'firebase/firestore';
import { CreateItemData } from '../../types/items/CreateItemData';
import { UpdateItemData } from '../../types/items/UpdateItemData';
import ItemRepository from '../repositories/ItemRepository';
import { ItemModel } from '../../types/items/ItemModel';

class ItemService {
  async addItemAsync(item: CreateItemData): Promise<void> {
    try {
      await ItemRepository.addItemAsync(item);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateItemAsync(item: UpdateItemData): Promise<void> {
    try {
      await ItemRepository.getItemByIdAsync(item.docId);
      await ItemRepository.updateItemAsync(item);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteItemAsync(docId: string): Promise<void> {
    try {
      await ItemRepository.getItemByIdAsync(docId);
      await ItemRepository.deleteItemAsync(docId);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getItemListAsync(): Promise<ItemModel[]> {
    try {
      const items: ItemModel[] = [];

      const querySnapshots: QuerySnapshot<DocumentData> =
        await ItemRepository.getItemListAsync();

      if (querySnapshots.docs.length > 0) {
        querySnapshots.docs.map((doc) => {
          const item = doc.data();
          items.push(
            new ItemModel(
              doc.id,
              item['itemName'],
              item['category'],
              item['qunaity'],
              item['unitPrice'],
              item['brand'],
              item['description'],
              item['availableAddresses'],
              item['latitude'],
              item['longitude'],
              item['stockKeepingUnits'],
              item['imageUrl']
            )
          );
        });
      }

      return items;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getItemByIdAsync(docId: string): Promise<ItemModel> {
    try {
      const querySnapshot: DocumentData = await ItemRepository.getItemByIdAsync(
        docId
      );
      const content = querySnapshot.data();
      return new ItemModel(
        querySnapshot.id,
        content['itemName'],
        content['category'],
        content['qunaity'],
        content['unitPrice'],
        content['brand'],
        content['description'],
        content['availableAddresses'],
        content['latitude'],
        content['longitude'],
        content['stockKeepingUnits'],
        content['imageUrl']
      );
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export default new ItemService();
