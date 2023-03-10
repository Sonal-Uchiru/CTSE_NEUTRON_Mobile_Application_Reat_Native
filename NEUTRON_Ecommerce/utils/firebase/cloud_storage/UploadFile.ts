import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  StorageReference,
  UploadTask
} from '@firebase/storage';
import { Stroage } from '../Configuration';
import * as ImagePicker from 'expo-image-picker';
import { uploadBytes } from 'firebase/storage';

export const uploadFile = async (
  file: ImagePicker.ImagePickerAsset,
  folderName: string,
  fileName: string
): Promise<string | null> => {
  const storageRef: StorageReference = ref(
    Stroage,
    `${folderName}(images)/${fileName}`
  );

  const image: Blob | null = await uriToBlobConvert(file.uri);
  if (image == null) throw new Error('image not available');

  uploadBytes(storageRef, image).then((snapshot) => {
    getDownloadURL(ref(Stroage, snapshot.metadata.ref?.fullPath)).then(
      (imageUrl) => {
        return imageUrl;
      }
    );
  });

  return null;
};

const uriToBlobConvert = async (imageUri: string): Promise<Blob | null> => {
  const response: Response = await fetch(imageUri);
  const blobFile: Blob = await response.blob();

  if (!blobFile) {
    return null;
  }

  return blobFile;
};
