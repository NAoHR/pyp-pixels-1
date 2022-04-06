import '../styles/globals.css';
import TransitionContext from '../utils/Transition_Context';

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
