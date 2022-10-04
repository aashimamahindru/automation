import '../styles/globals.css'
import './signUp/signup.css'
import './login/login.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../components/feed.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
