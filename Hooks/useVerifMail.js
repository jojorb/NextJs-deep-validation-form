/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

export const useVerifMail = email => {
  const [state, setState] = useState({
    dataVeriMail: null,
    loadingVeriMail: true,
  });

  useEffect(() => {
    if (email !== null) {
      setState(state => ({ dataVeriMail: state.data, loadingVeriMail: true }));
      fetch(
        `https://emailverification.whoisxmlapi.com/api/v1?apiKey=${process.env.MAILVERIFY_KEY}&_hardRefresh=true&emailAddress=${email}`
      )
        .then(x => x.json())
        .then(y => {
          setState({ dataVeriMail: y, loadingVeriMail: false });
        });
    }
  }, [setState, email]);

  return state;
};
