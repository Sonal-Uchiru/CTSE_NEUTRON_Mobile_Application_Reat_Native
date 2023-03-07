import { getBlobFroUriAsync } from './UriToBlobConverter';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  StorageReference,
  UploadTask
} from '@firebase/storage';
import { Stroage } from '../Configuration';
import * as ImagePicker from 'expo-image-picker';

export const uploadFile = async (
  file: ImagePicker.ImagePickerAsset,
  folderName: String
): Promise<String> => {
  const image: any = getBlobFroUriAsync(file.uri);

  const storageRef: StorageReference = ref(
    Stroage,
    `${folderName}(images)/${file.fileName}`
  );
  const uploadTask: UploadTask = uploadBytesResumable(storageRef, image);
  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress: number = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (progress >= 100) {
          getDownloadURL(storageRef).then((url) => {
            resolve(url);
          });
        }
      },
      (error) => {
        console.log(error);
        reject(error);
      }
    );
  });
};
