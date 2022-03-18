import React, { ReactElement } from "react";

export default function LivepeerProvider(props: {
  apiKey: string;
  children: ReactElement;
}) {
  const LivepeerContext = React.createContext("");
  if (props.apiKey !== null && props.apiKey !== undefined) {
    return (
      <LivepeerContext.Provider value={props.apiKey}>
        {props.children}
      </LivepeerContext.Provider>
    );
  } else {
    return props.children;
  }
}
