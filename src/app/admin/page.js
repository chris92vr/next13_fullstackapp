'use client';
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  // if user is not logged in, redirect to login page
  if (!user) {
    router.push('/signin');
  }

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Admin</h1>
        <div className="form">
          <p>Admin page</p>
          <p>You are logged in as {user.email}</p>
          <button onClick={() => router.push('/')}>Go to home page</button>
        </div>
      </div>
    </div>
  );
}

export default Page;
