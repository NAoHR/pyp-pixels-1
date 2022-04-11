import TransitionContext from '../utils/Transition_Context';
import Head from "next/head"

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>pyp-pixels</title>
      </Head>
      <TransitionContext>
        <Component {...pageProps} />
      </TransitionContext>
    </>
  )
}

export default MyApp
