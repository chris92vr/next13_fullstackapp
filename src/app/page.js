'use client';
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  // if user is not logged in, show home page with message
  if (!user) {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1 className="mt-60 mb-30">home</h1>
          <div className="form">
            <p>You are not logged in</p>
            <button onClick={() => router.push('/signin')}>Sign in</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="wrapper">
          <div className="form-wrapper">
            <h1 className="mt-60 mb-30">home</h1>
            <div className="form">
              <p>You are logged in as {user.email}</p>
              <button onClick={() => router.push('/admin')}>
                Go to admin page
              </button>
              <p> create post</p>
              <button onClick={() => router.push('/createPost')}>
                Go to create post page
              </button>
              <p> view posts</p>
              <button onClick={() => router.push('/viewPosts')}>
                Go to view posts page
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Page;
