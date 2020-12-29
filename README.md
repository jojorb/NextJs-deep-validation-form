[![name](https://raw.githubusercontent.com/rmsrob/NextJs-deep-validation-form/master/styles/app.png)]

# NextJs Form Validation Example

> This app can be an introduction to privacy awareness / OSINT or as an example of data validation.

## Highlights

- NextJs, ChakraUi and React Hooks
- Read your browser informations and display some of them
- Phone and email checking
- Simple strengh password check (to be improved)

## Prerequisite

> Need node or yarn installed on your machine

- API KEY for [Mapbox](https://www.mapbox.com/)
- API KEY for [astroip](https://astroip.co)
- API KEY for [numverify](https://numverify.com/)
- API KEY for [whoisxmlapi](https://emailverification.whoisxmlapi.com)

> Create a file `.next.config.js` at your root level with this content

```js
module.exports = {
  env: {
    MAPBOX_KEY: "your_api_key_here",
    ASTROIP_KEY: "your_api_key_here",
    NUMVERIFY_KEY: "your_api_key_here",
    MAILVERIFY_KEY: "your_api_key_here",
  },
};
```

## Install

```sh
npm install
npm run dev
# or
yarn install
yarn dev
```

## Usage

> While loading the first page

- Check your broswer parameters and connection informations.
- A map will display your ip geolocation.

Clicking on the submit button will refresh your informations.

> What's the Phone input is doing?

- retrieve an example of the phone format from your country IP location and put it in the placeholder.
- Checking and identify any national and international.

> what's the email input doing?

- Verify existence, validity and quality of any email address.
- Get the domain logo from their twitter profile picture.

> what's the password is doing?

- Check how many number, uppercase, lowercase and special characters
- It check how many bit there are inside the password

## Maintainers

- [rmsrob][me]

[me]: https://github.com/rmsrob

<!-- [me]: https://gitlab.com/rmsrob -->
