/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';

export const useBrowser = () => {
  const [state, setState] = useState({
    dataBrowser: null,
    loadingBrowser: true,
  });

  useEffect(() => {
    setState(state => ({ dataMyGeo: state.data, loadingMyGeo: true }));

    const geo = new Promise(t => {
      navigator.geolocation.getCurrentPosition(
        n => {
          t(n);
        },
        e => t(e)
      );
    });

    setState({ dataMyGeo: geo, loadingMyGeo: false });
  }, [setState]);

  return state;
};
