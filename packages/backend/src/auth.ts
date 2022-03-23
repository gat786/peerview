import config from "./config";

export const get_auth_headers = () => {
  return {
    Authorization: `Bearer ${config.LivepeerKey}`,
  };
};
