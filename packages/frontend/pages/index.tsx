import Head from "next/head";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const { isAuthenticated, authenticate, user } = useMoralis();

  return (
    <>
      <Head>
        <title>Peerview Homepage</title>
      </Head>
      <nav className={styles.nav}>
        <h1>Peer View</h1>

        <div className={styles.tabs}>
          <h2>Livestreams</h2>
          <h2>Followed Channels</h2>
          <h2>Bookmarks</h2>
          <h2>NFTs</h2>
        </div>

        <div>
          {isAuthenticated ? (
            <div className={styles.userName}>Welcome! {user.getUsername()}</div>
          ) : (
            <button
              className={styles.logInLink}
              onClick={() => {
                authenticate({
                  provider: "web3Auth",
                  clientId: process.env.NEXT_PUBLIC_WEB3_CLIENTID,
                });
              }}
            >
              Let's get you logged in
            </button>
          )}
        </div>
      </nav>
      <div>
        <div className={styles.topButtons}>
          <button>Livestreams</button>
          <button>Followed Channels</button>
          <button>Bookmarks</button>
          <button>NFTs</button>
        </div>
      </div>
    </>
  );
}
