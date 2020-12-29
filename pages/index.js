/* eslint-disable react/jsx-filename-extension */
import { Grid } from '@chakra-ui/react';
import { useEffect, useContext } from 'react';
import { Header } from '../Components/Header';
import { ReportBoard } from '../Components/ReportBoard';
import { FormGather } from '../Components/FormGather';
import { useBrowser } from '../Hooks/useBrowser';
import { useIP } from '../Hooks/useIP';
import { userContext } from '../Hooks/userContext';
import { Map } from '../Components/Map';
import { HomeLoading } from '../Components/HomeLoading';

const Home = () => {
  const { setOsint } = useContext(userContext);
  const { dataBrowser } = useBrowser();
  const { dataIP, loadingIP } = useIP('https://api.astroip.co/?');
  // const { dataIP, loadingIP } = { dataIP: { geo: { country_code: 'RU' } } }; // ?switch to emulate country code

  useEffect(() => {
    if (loadingIP === false) {
      setOsint({ osint: dataBrowser, dataIP });
    }
  }, [dataBrowser, dataIP, loadingIP, setOsint]);

  return dataIP ? (
    <>
      <Header country={(dataIP.geo && dataIP.geo.country_code) || 'US'} />
      <Grid templateColumns="repeat(2, 1fr)" gap={6} p={75} pt={0}>
        <ReportBoard />

        <Grid templateRows="repeat(2, 22%)" gap={1} p={0}>
          <FormGather
            broswer_infos={dataBrowser && dataBrowser}
            country_IP={(dataIP.geo && dataIP.geo.country_code) || 'US'}
            more_about_IP={dataIP && dataIP}
          />
          <Map
            country={(dataIP.geo && dataIP.geo.country_code) || 'US'}
            lat={(dataIP.geo && dataIP.geo.latitude) || 42}
            lng={(dataIP.geo && dataIP.geo.longitude) || 2}
          />
        </Grid>
      </Grid>
    </>
  ) : (
    <HomeLoading />
  );
};
export default Home;
