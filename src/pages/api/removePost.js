import removeData from '@/firebase/firestore/removeData';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const id = req.query.id;
    const result = await removeData('posts', id);
    console.log(result);
    res.status(200).json({ result });
  }
}
