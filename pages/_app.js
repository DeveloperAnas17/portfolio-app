import "../styles/globals.css";
import "../styles/App.scss";
import "../components/Navbar/Navbar.scss";
import "../container/Header/Header.scss";
import "../container/About/About.scss";
import "../container/Work/Work.scss";
import "../container/Footer/Footer.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
