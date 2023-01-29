'use client';

import { Provider } from 'react-redux';
import Header from '@/components/signUp/Header';
import Footer from '@/components/signUp/Footer';
import './styles.css';
import store from '@/redux/store';
import { useAppSelector } from '@/redux/hooks';

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const step = useAppSelector((state) => state.auth.step);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider store={store}>
          <Header step={step} />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
