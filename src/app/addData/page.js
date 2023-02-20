'use client';
import React from 'react';
import addData from '@/firebase/firestore/addData';
import { useRouter } from 'next/navigation';

function Page() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const data = {
    name: username,
    password: password,
  };
  const id = Math.random().toString(36).substring(2);
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await addData('users', id, data);
    console.log('result', result);
    if (error) {
      return console.log(error);
    }

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push('/getData');
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="username">
            <p>Username</p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              required
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
