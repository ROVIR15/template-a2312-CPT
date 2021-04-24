import React from 'react';
import Head from 'next/head';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

export default function Layout({ children, ...props}) {
  return (
    <div>
      <Head>
        <title>Company Profile</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <AppBar/>
        {children}
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
