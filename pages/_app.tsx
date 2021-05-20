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
        <meta name="description" content="URL Shortener" />
        <meta
          name="keywords"
          content="Sagnik, Biswas, Sagnik Biswas, shortener, url shortener, bitly, tinyurl, url, smallen, smallen.xyz"
        />
        <meta name="author" content="Sagnik Biswas" />
        <meta property="og:url" content="https://smallen.xyz" />
        <meta property="og:title" content="Smallen" />
        <meta
          property="og:description"
          content="A smaller name for your humongous links"
        />
        <meta
          property="og:image"
          content="https://billboard.srmkzilla.net/api/blog?title=Smallen&subtitle=A%20smaller%20name%20for%20your%20humongous%20links&theme=dark"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
