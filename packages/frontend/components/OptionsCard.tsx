import React, { ReactElement } from "react";

import styles from "styles/Home.module.scss";

export default function OptionsCard(props: {
  cardIcon: ReactElement;
  cardTitle: string;
}) {
  return (
    <div className={`shadow-2 ${styles.optionsCard}`}>
      {props.cardIcon}
      <div className={`${styles.optionsCardTitle} font-lato`}>{props.cardTitle}</div>
    </div>
  );
}
