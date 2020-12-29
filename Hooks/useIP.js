/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';

export const useIP = url => {
  const [state, setState] = useState({ dataIP: null, loadingIP: true });

  useEffect(() => {
    if (url !== null) {
      setState(state => ({ dataIP: state.data, loadingIP: true }));

      const esc = encodeURIComponent;
      const params = {
        api_key: process.env.ASTROIP_KEY,
        hostname: true,
        useragent: false,
      };
      const query = Object.keys(params)
        .map(k => `${esc(k)}=${esc(params[k])}`)
        .join('&');

      fetch(url + query)
        .then(x => x.json())
        .then(y => {
          setState({ dataIP: y, loadingIP: false });
        });
    }
  }, [url]);

  return state;
};
