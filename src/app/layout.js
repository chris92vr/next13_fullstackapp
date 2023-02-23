'use client';
import './globals.css';
import { AuthContextProvider } from '@/context/AuthContext';
import Navbar from '@/component/navbar';

export default function layout({ children }) {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
