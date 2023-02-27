// edit data in firestore

import firebase_app from '../config';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app);

export default async function editData(collection, id, data) {
  let result = null;
  let error = null;

  try {
    result = await updateDoc(doc(db, collection, id), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
