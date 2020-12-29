/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-filename-extension */
import {
  Box,
  Stack,
  Button,
  Wrap,
  WrapItem,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputLeftAddon,
  Image,
  InputRightElement,
} from '@chakra-ui/react';
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';
import {
  CheckCircleIcon,
  AtSignIcon,
  PhoneIcon,
  EmailIcon,
  UnlockIcon,
  LockIcon,
  ViewOffIcon,
  ViewIcon,
} from '@chakra-ui/icons';
import { AsYouType, getExampleNumber } from 'libphonenumber-js';
import examples from 'libphonenumber-js/examples.mobile.json';
import { useContext, useState } from 'react';
import emojiFlags from 'emoji-flags';
import { useForm } from '../Hooks/UseForm';
import { userContext } from '../Hooks/userContext';
import { usePhoneNumber } from '../Hooks/usePhoneNumber';
import isFrormatedEmail from '../tools/isFrormatedEmail';
import { useVerifMail } from '../Hooks/useVerifMail';
import translation from '../tools/translation.json';
import { useVerifUrl } from '../Hooks/useVerifUrl';
import pswdCheck from '../tools/pwdCheck';

export const FormGather = userData => {
  const translate =
    userData && userData.country_IP === 'FR'
      ? [translation.FR][0]
      : [translation.US][0];

  const { setOsint } = useContext(userContext);
  const [ph, setPh] = useState();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [values, handleChange] = useForm({
    Phone: '',
    Email: '',
    Password: '',
  });

  // !verification for the phone
  const { dataPhone } = usePhoneNumber(
    isValidPhoneNumber(ph) === true ? ph : null
  );
  const asYouType = new AsYouType();
  const getPhoneFlag =
    ph !== undefined && (asYouType.input(ph), asYouType.getNumber().country);

  // !verification for the email
  const { dataVeriMail, loadingVeriMail } = useVerifMail(
    isFrormatedEmail(values.Email) === true ? values.Email : null
  );

  const isReachableEmail =
    loadingVeriMail === false && JSON.parse(dataVeriMail.dnsCheck); // ? dns or smtp?

  // !verification for the domain twitter profile picture
  const { dataImgUrl } = useVerifUrl(
    loadingVeriMail === false && JSON.parse(dataVeriMail.dnsCheck)
      ? values.Email.split('@')[1]
      : null
  );

  // !verification for password
  const pc = pswdCheck(values.Password, values.Email);

  return (
    <Box w="100%" maxH="100%">
      <Stack spacing={2}>
        {userData.country_IP && (
          <FormControl isRequired>
            <FormLabel>
              <CheckCircleIcon
                w={4}
                h={4}
                color={isPossiblePhoneNumber(ph) ? 'green.500' : 'red.400'}
              />{' '}
              <PhoneIcon
                w={4}
                h={4}
                color={ph && isValidPhoneNumber(ph) ? 'green.500' : 'red.400'}
              />{' '}
              {translate.phone}
            </FormLabel>
            <InputGroup>
              <InputLeftAddon
                pointerEvents="none"
                children={
                  ph !== undefined
                    ? emojiFlags.countryCode(getPhoneFlag).emoji
                    : emojiFlags.countryCode(userData.country_IP).emoji
                }
              />
              <PhoneInput
                inputComponent={Input}
                borderLeftRadius="0"
                id="Phone"
                name="Phone"
                type="text"
                defaultCountry={userData.country_IP}
                countrySelectProps={{ unicodeFlags: true }}
                placeholder={
                  getExampleNumber(userData.country_IP, examples).number
                }
                value={ph}
                focusBorderColor="red.400"
                onChange={setPh}
              />
            </InputGroup>

            <FormHelperText color="cyan.400">
              {translate.help_phone
                ? translate.help_phone
                : translate.help_default}
            </FormHelperText>
          </FormControl>
        )}

        <FormControl isRequired>
          <FormLabel>
            <CheckCircleIcon
              w={4}
              h={4}
              color={isFrormatedEmail(values.Email) ? 'green.400' : 'red.400'}
            />{' '}
            <AtSignIcon
              w={4}
              h={4}
              color={isReachableEmail ? 'green.400' : 'red.400'}
            />{' '}
            {translate.email}
          </FormLabel>
          <InputGroup>
            <InputLeftAddon
              pointerEvents="none"
              children={
                isFrormatedEmail(values.Email) ? (
                  <Image
                    boxSize="1rem"
                    objectFit="cover"
                    src={
                      dataImgUrl === 200
                        ? `https://logo.clearbit.com/${
                            values.Email.split('@')[1]
                          }`
                        : 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/263/woman-shrugging_1f937-200d-2640-fe0f.png'
                    }
                    alt={`${values.Email.split('@')[1]}`}
                  />
                ) : (
                  <EmailIcon w={5} h={5} />
                )
              }
            />
            <Input
              id="Email"
              type="email"
              errorBorderColor="crimson"
              placeholder={translate.hold_email}
              name="Email"
              value={values.Email}
              focusBorderColor="red.400"
              onChange={handleChange}
            />
          </InputGroup>
          <FormHelperText color="cyan.400">
            {translate.help_email
              ? translate.help_email
              : translate.help_default}
          </FormHelperText>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>{translate.password}</FormLabel>
          <InputGroup>
            <InputLeftAddon
              pointerEvents="none"
              children={
                pc !== false ? (
                  <LockIcon
                    w={5}
                    h={5}
                    color={pc.wordBits >= 128 ? 'green.400' : 'yellow.400'}
                  />
                ) : (
                  <UnlockIcon
                    w={5}
                    h={5}
                    color={
                      values.Password.length <= 8 ? 'white.400' : 'red.400'
                    }
                  />
                )
              }
            />
            <Input
              id="Password"
              borderLeftRadius="0"
              type={show ? 'text' : 'password'}
              placeholder={translate.password}
              name="Password"
              value={values.Password}
              focusBorderColor="red.400"
              onChange={handleChange}
              minlength="8"
              maxlength="127"
            />
            <InputRightElement>
              <Button variant="link" onClick={handleClick}>
                {show ? <ViewIcon w={5} h={5} /> : <ViewOffIcon w={5} h={5} />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText color="cyan.400">
            {translate.help_password
              ? translate.help_password
              : translate.help_default}
          </FormHelperText>
        </FormControl>
      </Stack>

      <Wrap justify="center" mt={25}>
        <WrapItem>
          <Button
            colorScheme="red"
            variant="outline"
            onClick={async () => {
              const userPhone = JSON.parse(dataPhone);
              const userMail = dataVeriMail;
              const userPassword = pc;
              await setOsint({
                osint: userData,
                userPhone,
                userMail,
                userPassword,
              });
            }}
          >
            {translate.btn_from_osnint}
          </Button>
        </WrapItem>
      </Wrap>
    </Box>
  );
};
