import * as React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const useVideoJS = (videoJsOptions: any) => {
  const videoNode = React.useRef(null);
  let changedKey = 1;
  const player = React.useRef<any>(null);

  React.useEffect(() => {
    player.current = videojs(videoNode.current, videoJsOptions);

    return () => {
      player.current.dispose();
    };
  }, [changedKey]);

  const Video = React.useCallback(
    ({ children, ...props }) => {
      return (
        <div data-vjs-player key={changedKey}>
          <video ref={videoNode} className="video-js" {...props}>
            {children}
          </video>
        </div>
      );
    },
    [changedKey]
  );
  return { Video, player: player.current };
};
