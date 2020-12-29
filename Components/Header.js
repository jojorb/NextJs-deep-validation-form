/* eslint-disable react/jsx-filename-extension */
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Text, Heading, Center } from '@chakra-ui/react';
import translation from '../tools/translation.json';

export const Header = country => {
  const translate =
    country.country === 'FR' ? [translation.FR][0] : [translation.US][0];
  return (
    <Box maxW="100%" p={25} pb={70}>
      <Center>
        <Heading color="tomato" mb={2}>
          {translate.title} 🕵
        </Heading>
      </Center>
      <Center>
        <Text fontSize="xl">{translate.subtitle}</Text>
      </Center>
      <Center>
        <Text fontSize="sm">
          {translate.mini_subtitle}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rmsrob/NextJs-deep-validation-form"
          >
            <ExternalLinkIcon h={4} w={4} />
          </a>
        </Text>
      </Center>
    </Box>
  );
};
