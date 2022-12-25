import Layout from '../components/Layout'
import '../styles/globals.css';
import '../styles/navbar.scss';
import '../styles/home.scss';
import '../styles/about.scss';
import '../styles/services.scss';
import '../styles/portfolio.scss';
import '../styles/contact.scss';


function MyApp({ Component, pageProps }) {
  return <Layout>
          <Component {...pageProps} />
        </Layout> 
}

export default MyApp
