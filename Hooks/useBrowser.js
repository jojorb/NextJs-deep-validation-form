/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';

export const useBrowser = () => {
  const [state, setState] = useState({
    dataBrowser: null,
    loadingBrowser: true,
  });

  useEffect(() => {
    setState(state => ({ dataBrowser: state.data, loadingBrowser: true }));

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const userBroswer = {
      online: navigator.onLine,
      timezone: tz,
      platform: navigator.platform,
      appVersion: navigator.appVersion,
      version: window.platform.description,
      userAgent: navigator.userAgent,
      engine: navigator.vendor || navigator.ppCodeName,
      isTrackable: navigator.doNotTrack,
      cookieEnable: navigator.cookieEnabled,
      globalPrivacyControl: navigator.globalPrivacyControl,
      javaEnable: navigator.javaEnabled(),
      keyboard: navigator.keyboard,
      usb: navigator.usb,
      language: navigator.language || navigator.userLanguage,
      language_os: navigator.systemLanguage || null,
      screenW: window.screen.width,
      screenWmax: window.screen.availWidth,
      screenH: window.screen.height,
      screenHmax: window.screen.availHeight,
      screenMode: window.screen.orientation.type,
    };

    setState({ dataBrowser: userBroswer, loadingBrowser: false });
  }, [setState]);

  return state;
};
