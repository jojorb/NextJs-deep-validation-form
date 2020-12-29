/* eslint-disable react/jsx-filename-extension */
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { useState, useMemo } from 'react';
import { userContext } from '../Hooks/userContext';

function App({ Component, pageProps }) {
  const [osint, setOsint] = useState(
    'no data yet! click on the button ostin all of that'
  );
  const value = useMemo(() => ({ osint, setOsint }), [osint, setOsint]);

  return (
    <ChakraProvider>
      <userContext.Provider value={value}>
        <Component {...pageProps} />
      </userContext.Provider>
    </ChakraProvider>
  );
}

export default App;
