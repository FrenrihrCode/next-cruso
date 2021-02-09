import Layout from "components/Layout";
import { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import CartProvider from "store/Cart";
import "../global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
};

export default MyApp;
