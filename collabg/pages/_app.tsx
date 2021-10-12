import type { AppProps, AppContext } from 'next/app'
import getConfig from 'next/config'
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak/ssr'
import { IncomingMessage } from 'http'
import cookie from 'cookie'

interface AppPropsWithCookies extends AppProps {
  cookies: unknown
}

const App = ({ Component, pageProps, cookies }: AppPropsWithCookies) => {
  const { publicRuntimeConfig } = getConfig()

  const keycloakCfg = {
    url: publicRuntimeConfig.keycloak.url,
    realm: publicRuntimeConfig.keycloak.realm,
    clientId: publicRuntimeConfig.keycloak.clientId,
  }

  const keycloakInitOptions = {
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: '${publicRuntimeConfig.baseUrl}/silent-check-sso.html',
    pkceMethod: 'S256',
    checkLoginIframe: false,
  }
  
  return (
    <SSRKeycloakProvider
    keycloakConfig={keycloakCfg}
    persistor={SSRCookies(cookies)}
    initOptions={keycloakInitOptions}
    >
      <Component {...pageProps} />
    </SSRKeycloakProvider>
  )
}

const parseCookies = (req?: IncomingMessage) => {
  !req || !req.headers ? {} : cookie.parse(req.headers.cookie || '')
}

App.getInitialProps = async (context: AppContext) => {
  return {
    cookies: parseCookies(context?.ctx?.req),
  }
}

export default App
