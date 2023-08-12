import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Cairo:wght@200;400;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Meta data */}
          <title lang="ar">تطوير مواقع ألكترونية | تحسين محركات البحث</title>
          <title lang="en">Web Development, Web Design, and SEO Services</title>
          <meta
            id="site-meta"
            name="description"
            content="تصميم وتطوير المواقع الكترونية وخدمة تحسين محركات البحث (SEO), بناء مواقع, متاجر, ومدونات بتصميم جميل ومتجاوب تواصل معي لتبني موقعك او عملك الخاص."
          />
          <meta
            id="site-meta"
            name="description"
            content="I offer web development, stunning web design, and effective SEO services to help your business thrive online. Contact me now for a personalized strategy to boost your online presence and achieve your digital goals."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
