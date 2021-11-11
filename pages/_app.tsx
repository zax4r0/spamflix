import { Provider } from 'next-auth/client'
import { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
// import 'styles/global.css'
import 'styles/tailwind.css'
import 'styles/xd.css'

import 'next-pagination/dist/index.css'
import Head from 'next/head'
import '@fortawesome/fontawesome-free/css/all.min.css'
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: '/api/graphql',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>spam hub</title>
      </Head>
      <Provider session={pageProps.session}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
    </>
  )
}
