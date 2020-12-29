/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

export const usePhoneNumber = phoneNumber => {
  const [state, setState] = useState({ dataPhone: null, loadingPhone: true });

  useEffect(() => {
    if (phoneNumber !== null) {
      setState(state => ({ dataPhone: state.data, loadingPhone: true }));
      fetch(
        `http://apilayer.net/api/validate?number=${phoneNumber}&access_key=${process.env.NUMVERIFY_KEY}`
      )
        .then(x => x.text())
        .then(y => {
          setState({ dataPhone: y, loadingPhone: false });
        });
    }
  }, [setState, phoneNumber]);

  return state;
};
