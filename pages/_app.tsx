import Head from "next/head";
import Footer from "../components/Footer";
import "../styles/globals.css";
import React from "react";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
        <div>
          <Head>
            <title>Smallen</title>
          </Head>
          <Navbar/>
          <Component {...pageProps} />
          <Footer />
        </div>
  );
}

export default MyApp;
