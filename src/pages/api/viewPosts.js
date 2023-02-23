// this api returns a json object with a all the posts in the database of a determined user
import getAllDocuments from '@/firebase/firestore/getAllData';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const user = req.query.user;
    const posts = await getAllDocuments('posts', user);
    res.status(200).json({ posts });
  }
}
