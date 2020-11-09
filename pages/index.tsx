import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Next.js Starter</title>
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="theme-color" content="#72B340" />
      <meta
        name="description"
        content="A quick starter Template for Next.js with Tailwind CSS and Typescript"
      />
    </Head>
    <div className="min-h-screen">
      <div className="h-screen">
        <div className="container mx-auto px-2 md:px-0 relative h-full">
          <div style={{ bottom: "2rem", left: 0 }} className="absolute">
            <div className="text-2xl">Hey there 👋, My name is</div>
            <h2 className="text-6xl font-medium">Utkarsh Bhimte</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
