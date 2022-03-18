import Shell from "components/shell/Shell";
import Head from "next/head";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import styles from "./channel.module.scss";

export default function UploadVideo() {
  const fileTypes = ["MP4", "MKV"];

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <Shell>
      <>
        <Head>
          <title>Upload Video and create content</title>
        </Head>
        <div className={styles.content}>
          <section className={styles.centerItems}>
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          </section>
        </div>
      </>
    </Shell>
  );
}
