import firebase_app from '@/firebase/config';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app);

const getPost = async (collectionName, id) => {
  //For avoid the following: FirebaseError: Invalid collection reference. Collection references must have an odd number of segments
  // I have to add a slash at the end of the collection name in the following line:
  const docRef = doc(db, `${collectionName}/`, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
};

export default getPost;
