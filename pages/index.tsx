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
    <div className="p-4 shadow rounded bg-white">
      <h1 className="text-purple-700 text-3xl ">Next.js</h1>
      <p className="text-gray-800">with Tailwind CSS and Typescript</p>
      <p className="text-gray-800">Made with ♥ by me at</p>
      <a
        className="text-purple-600 hover:text-purple-400"
        href="https://github.com/xDecus"
        target="blank"
      >
        https://github.com/xDecus
      </a>
    </div>
    <section className="px-4 py-2 flex align-middle">
      <Image
        src="/static/profile-photo.jpg"
        alt="Picture of the developer"
        height={200}
        width={200}
        className="rounded-full mr-6"
      />
      <h3 className="text-xl">Utkarsh Bhimte</h3>
    </section>
  </div>
);

export default Home;
