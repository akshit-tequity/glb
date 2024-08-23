// pages/index.js
import Head from "next/head";
import ThreeScene from "../componants/ThreeScene";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Three.js and Next.js integration example"
        />
      </Head>
      <main
        style={{
          width: "90%",
          height: "100vh",
          margin:"auto"
        }}
      >
        <ThreeScene
          modelUrl={"/sample3.glb"}
          
        />
        <ThreeScene
          modelUrl={"/sample11.glb"}
          
        />
      </main>
    </>
  );
}
