import getDocById from '@/firebase/firestore/getData';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const id = req.query.id;
    const post = await getDocById('posts', id);
    res.status(200).json({ post });
  }
}
