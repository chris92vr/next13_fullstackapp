'use client';
import addData from '@/firebase/firestore/addData';

export default function Home() {
  const handleForm = async () => {
    const data = {
      name: 'John White',
      house: 'Snow',
    };
    // generate a random id
    const id = Math.random().toString(36).substring(2);
    const { result, error } = await addData('users', id, data);
    console.log('result', result);
    if (error) {
      return console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleForm}>Add data</button>
    </div>
  );
}
