import React, { Children, ReactElement, useState } from "react";
import { useMoralis } from "react-moralis";
import Link from "next/link";

import styles from "../../styles/Home.module.scss";
import { useRouter } from "next/router";

export default function Shell(props: { children: ReactElement }) {
  const { isAuthenticated, authenticate, user, logout } = useMoralis();
  const { pathname } = useRouter();

  const [isOverflowVisible, setOverflowVisible] = useState<boolean>(false);

  return (
    <div>
      <nav className={styles.nav + " shadow-2"}>
        <Link href="/">
          <h1 className="pointer">Peer View</h1>
        </Link>

        <div className={styles.tabs}>
          <h2>Livestreams</h2>
          <h2>Followed Channels</h2>
          <h2>Bookmarks</h2>
          <h2>NFTs</h2>
        </div>

        <div>
          {isAuthenticated ? (
            <div className="flex-row">
              {pathname !== "/channel" && (
                <Link href="/channel">
                  <a className={styles.myChannelButton}>My Channel</a>
                </Link>
              )}

              <div
                className={styles.userName}
                onClick={() => {
                  setOverflowVisible((current) => !current);
                }}
              >
                Welcome! {user.getUsername()}
              </div>

              <div
                className={`${styles.overflowPanel + " shadow-2"} ${
                  isOverflowVisible && styles.overflowPanelVisible
                }`}
              >
                <button
                  onClick={() => {
                    logout();
                  }}
                  className={styles.logoutButton}
                >
                  Logout
                </button>
              </div>
            </div>
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

      {props.children}
    </div>
  );
}
