'use client';
import './globals.css';
import { AuthContextProvider } from '@/context/AuthContext';

export default function layout({ children }) {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
