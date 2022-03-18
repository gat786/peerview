import OptionsCard from "components/OptionsCard";
import Shell from "components/shell/Shell";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import styles from "styles/Home.module.scss";

export default function MyChannel() {
  const { pathname } = useRouter();

  return (
    <Shell>
      <>
        <Head>
          <title>My Channel</title>
        </Head>
        <div className={styles.optionCards}>
          <OptionsCard
            cardIcon={
              <i className={`material-icons ${styles.optionsCardIcon}`}>add</i>
            }
            linkTo=""
            cardTitle={"Create Livestream"}
          />

          <OptionsCard
            cardIcon={
              <i className={`material-icons ${styles.optionsCardIcon}`}>
                publish
              </i>
            }
            linkTo={`${pathname}/upload-video`}
            cardTitle={"Upload Video"}
          />
        </div>
      </>
    </Shell>
  );
}
