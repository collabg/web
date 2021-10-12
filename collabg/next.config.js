/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    keycloak: { // keycloak config
      url: 'https://keycloak.collabg.net/auth',
      realm: 'collabg',
      // clientId: 'localhost',
      clientId: 'collabg',
    }
  },
  images: {
    loader: 'cloudinary'
  }
}
