'use client';
import React from 'react';
import getAllDocuments from '@/firebase/firestore/getAllData';

function Page() {
  // display all documents in the collection 'posts'
  async function getAllPosts() {
    const { result, error } = await getAllDocuments('users');
    if (error) {
      return console.log(error);
    }
    console.log(result);
  }
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Get all data</h1>
        <button onClick={getAllPosts}>Get all data</button>
      </div>
    </div>
  );
}

export default Page;
