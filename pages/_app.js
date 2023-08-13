import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/flaticon.css";
import "../styles/font-awesome.min.css";
import "../styles/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../utils/i18n";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-HJ34WQZDVW"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
  
        gtag("config", "G-HJ34WQZDVW");
        `,
        }}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
