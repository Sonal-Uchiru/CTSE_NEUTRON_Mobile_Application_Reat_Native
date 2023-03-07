import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  StorageReference,
  UploadTask
} from '@firebase/storage';
import { Stroage } from '../Configuration';
import * as ImagePicker from 'expo-image-picker';

export function uploadFile(file: ImagePicker.ImagePickerAsset, folderName: String) : Promise<String>{
  const storageRef: StorageReference = ref(
    Stroage,
    `${folderName}(images)/${file.fileName}`
  );
  const uploadTask: UploadTask = uploadBytesResumable(storageRef, file.uri);
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

async function uploadImageAsync(imageAsse) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const ref = firebase
    .storage()
    .ref()
    .child(uuid.v4());
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
}
