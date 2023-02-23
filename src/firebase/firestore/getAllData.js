import firebase_app from '../config';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore(firebase_app);
const getAllDocuments = async (collectionName, user) => {
  const data = [];
  // get all documents in the collection by the user
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    if (doc.data().createdBy === user) {
      data.push(doc.data());
    } else {
      console.log('No such document!');
    }
  });
  console.log('user:', user);
  console.log('data:', data);
  return data;
};

export default getAllDocuments;
