/* eslint-disable react/jsx-filename-extension */
import { useContext } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { userContext } from '../Hooks/userContext';
// import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const ReportBoard = () => {
  const { osint } = useContext(userContext);

  const osintDATA = JSON.stringify(osint, null, 2);
  const osintArr = [osintDATA];

  return <SyntaxHighlighter language="json">{osintArr}</SyntaxHighlighter>;
};
