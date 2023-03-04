import { storage } from './Configuration';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  StorageReference,
  UploadTask
} from '@firebase/storage';

export function uploadFile(file: File[]) {
  const storageRef: StorageReference = ref(
    storage,
    `Movies(images)/${file[0].name}`
  );
  const uploadTask: UploadTask = uploadBytesResumable(storageRef, file[0]);
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
        reject(error);
      }
    );
  });
}
