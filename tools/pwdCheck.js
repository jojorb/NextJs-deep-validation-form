export default function pswdCheck(pwd, email) {
  const pwdlength = pwd.length;
  if (pwdlength < 8) return false;
  const isEqEmail = pwd === email;
  if (isEqEmail === true) return false;
  if (!!pwd.match('[\\s]') === true) return false;

  // Regex
  const gotLowercase = pwd.match(/[a-z]/g) || [];
  const gotUppercase = pwd.match(/[A-Z]/g) || [];
  const gotNumber = pwd.match(/[0-9]/g) || [];
  const gotDiac = pwd.match(/[À-ÿ]/g) || [];
  const gotSpChar = pwd.match(/[^0-9a-zA-ZÀ-ÿ]/g) || [];
  // const gotspace = !!pwd.match('[\\s]') || [];

  function string2Binary(string) {
    return string
      .split('')
      .map(char => '00'.concat(char.charCodeAt(0).toString(2)).slice(-8))
      .join('');
  }
  const gotBinary = string2Binary(pwd);
  // Check strength 64 128 192 256 word-bit

  const r = {
    wordBits: gotBinary.length,
    lowwercaseLetters: gotLowercase.length,
    uppercaseLetters: gotUppercase.length,
    numbersINpassword: gotNumber.length,
    latinAccent: gotDiac.length,
    specialsCharacters: gotSpChar.length,
  };
  return r;
}
