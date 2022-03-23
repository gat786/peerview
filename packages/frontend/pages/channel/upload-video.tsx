import { Tabs } from "antd";
import Shell from "components/shell/Shell";
import Head from "next/head";
import React, { useRef, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";

import styles from "./channel.module.scss";

type UploadVideoForm = {
  title: string;
  content: string;
};

const { TabPane } = Tabs;
export default function UploadVideo() {
  const fileTypes = ["MP4", "MKV"];

  const [file, setFile] = useState(null);
  const { watch, register, setFocus } = useForm<UploadVideoForm>();
  const titleRef = useRef<HTMLInputElement>();

  const handleChange = (file) => {
    console.log({ file });

    setFile(file);
  };

  return (
    <Shell>
      <>
        <Head>
          {watch("title") === undefined ||
          watch("title") === null ||
          watch("title") === "" ? (
            <title>Create content page</title>
          ) : (
            <title>{watch("title")}</title>
          )}
        </Head>
        <div className={styles.content}>
          <section className={styles.centerItems}>
            <label htmlFor="title">Title</label>
            <input
              {...register("title")}
              type="text"
              id="title"
              className={styles.titleInput}
            />
            <div
              className={`full-width flex-col ma-center gap-1 relative ${styles.contentPart}`}
            >
              {watch("title") === undefined ||
              watch("title") === null ||
              watch("title") === "" ? (
                <div
                  className={styles.overlay}
                  onClick={() => {
                    setFocus("title");
                  }}
                ></div>
              ) : (
                <></>
              )}
              <div
                className={`${styles.fileUploader} flex-col ma-center gap-1`}
              >
                <label htmlFor="uploader">Select Video File</label>
                <div className="" id="uploader">
                  <FileUploader
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                  />
                </div>
              </div>
              <div className={styles.markdownPane}>
                <Tabs>
                  <TabPane tab="Text" key="1">
                    <textarea
                      {...register("content")}
                      className={styles.markdownTextArea}
                    />
                  </TabPane>
                  <TabPane tab="Preview" key="2">
                    <ReactMarkdown>{watch("content")}</ReactMarkdown>
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </section>
        </div>
      </>
    </Shell>
  );
}
