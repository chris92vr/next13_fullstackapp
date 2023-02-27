// edit Post api using firebase

import editData from '@/firebase/firestore/editData';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const id = req.query.id;
    const data = req.body;
    const result = await editData('posts', id, data);
    console.log(result);
    res.status(200).json({ result });
  }
}
