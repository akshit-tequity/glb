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
          width: "100%",
          height: "100vh",
          // margin:"auto"
        }}
      >
        <ThreeScene
          modelUrl={"/sample5.glb"}
          backgroundUrl = "/background.png"
          
        />
        {/* <ThreeScene
          modelUrl={"/sample7.glb"}
          backgroundUrl = "/background.png"
          
        /> */}
      </main>
    </>
  );
}
