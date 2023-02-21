'use client';
import React from 'react';
import addData from '@/firebase/firestore/addData';
import { useRouter } from 'next/navigation';

function Page() {
  const [namePost, setNamePost] = React.useState('');
  const [contentPost, setContentPost] = React.useState('');

  const data = {
    name: namePost,
    content: contentPost,
  };

  const id =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await addData('posts', id, data);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Add data</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="namePost">
            <p>Name post</p>
            <input
              onChange={(e) => setNamePost(e.target.value)}
              required
              type="text"
              name="namePost"
              id="namePost"
              placeholder="name post"
            />
          </label>
          <label htmlFor="contentPost">
            <p>Content post</p>
            <input
              onChange={(e) => setContentPost(e.target.value)}
              required
              type="text"
              name="contentPost"
              id="contentPost"
              placeholder="content post"
            />
          </label>
          <button type="submit">Add data</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
