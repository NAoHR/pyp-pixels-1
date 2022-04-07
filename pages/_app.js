import TransitionContext from '../utils/Transition_Context';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TransitionContext>
        <Component {...pageProps} />
      </TransitionContext>
    </>
  )
}

export default MyApp
