import Head from "next/head";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import Shell from "../components/shell/Shell";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Peerview Homepage</title>
      </Head>

      <Shell>
        <div>
          <div className={styles.topButtons}>
            <button>Livestreams</button>
            <button>Followed Channels</button>
            <button>Bookmarks</button>
            <button>NFTs</button>
          </div>
        </div>
      </Shell>
    </>
  );
}
