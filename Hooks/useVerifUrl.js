/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

export const useVerifUrl = url => {
  const [state, setState] = useState({
    dataImgUrl: null,
    loadingImgUrl: true,
  });

  useEffect(() => {
    if (url !== null) {
      setState(state => ({ dataImgUrl: state.data, loadingImgUrl: true }));
      fetch(`https://logo.clearbit.com/${url}`)
        .then(x => x.status)
        .then(y => {
          setState({ dataImgUrl: y, loadingImgUrl: false });
        });
    }
  }, [setState, url]);

  return state;
};
