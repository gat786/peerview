import { useRouter } from "next/router";
import React from "react";

export default function VideoPlayPage() {
  const router = useRouter();
  const { video_id } = router.query;

  return <p>Video Id: {video_id}</p>;
}
