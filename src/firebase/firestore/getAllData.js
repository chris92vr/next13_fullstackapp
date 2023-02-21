import firebase_app from '../config';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore(firebase_app);
const getAllDocuments = async (collectionName) => {
  let result = null;
  let error = null;

  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    result = querySnapshot.docs.map((doc) => doc.data());
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export default getAllDocuments;
