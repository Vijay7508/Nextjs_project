import "@/styles/globals.css";
import Navbar from "./Header/Navbar";
import Loading from "./Loading";
import Footer from "./Footer/Footer";


export default function App({ Component, pageProps }) {

  return (
  <>
  <Navbar/>
  <Loading>
  <Component {...pageProps} />;
  </Loading>
  <Footer/>
  </>
)}
