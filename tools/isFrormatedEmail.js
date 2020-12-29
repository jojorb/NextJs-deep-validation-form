export default function isFrormatedEmail(email) {
  const regexEmail = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  if (!email) return false;
  if (email.length > 256) return false;
  if (!regexEmail.test(email)) return false;

  const emailParts = email.split('@');
  const account = emailParts[0];
  const address = emailParts[1];
  if (account.length > 64) return false;
  const domainParts = address.split('.');
  if (
    domainParts.some(function(part) {
      return part.length > 63;
    })
  )
    return false;

  return true;
}
