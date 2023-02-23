'use client';
import React from 'react';
import signUp from '@/firebase/auth/signup';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/AuthContext';

function Page() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();
  const { user } = useAuthContext();

  // if user is logged in, render message
  if (user) {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1 className="mt-60 mb-30">You are already logged in</h1>
          <button onClick={() => router.push('/')}>Go to home page</button>
        </div>
      </div>
    );
  }

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      // show error message to user using DOM manipulation
      const errorElement = document.querySelector('.error');
      errorElement.textContent = error.message;
      return;
    }

    // else successful
    console.log(result);
    return router.push('/');
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="login-title">Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
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
          <p>
            {' '}
            Already have an account? <a href="/signin"> Sign in </a>
          </p>
          <h2 className="error"></h2>
        </form>
      </div>
    </div>
  );
}

export default Page;
