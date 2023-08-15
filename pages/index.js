import React, { Fragment } from "react";
import Hero from "../components/Hero/index";
import About from "../components/about/index";
import Service from "../components/Service/index";
import PricingPlan from "../components/Pricing/index";
import BlogSection from "../components/BlogSection/index";
import ContactSection from "../components/ContactSection/index";
import Footer from "../components/Footer/index";
import Testimonial from "../components/Testimonials/index";
import Portfolio from "../components/portfolio/index";
import Scrollbar from "../components/Scroolbar/index";
import Navbar from "../components/Navbar/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Element } from "react-scroll";
import Head from "next/head";

const HomePage = () => {
  return (
    <Fragment>
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
        <title>تطوير مواقع ألكترونية | تصميم مواقع</title>
        {/* <title>Web Development, Web Design, and SEO Services</title> */}
        <meta
          id="site-meta"
          name="description"
          content="تصميم وتطوير المواقع الكترونية وخدمة تحسين محركات البحث (SEO), .بناء مواقع, متاجر, ومدونات بتصميم جميل ومتجاوب تواصل معي لتبني موقعك لعملك الخاص."
        />
        {/* <meta
          id="site-meta"
          name="description"
          content="I offer web development, stunning web design, and effective SEO services to help your business thrive online. Contact me now for a personalized strategy to boost your online presence and achieve your digital goals."
        /> */}
      </Head>
      <div className="br-app">
        <Navbar />
        <Element name="home">
          <Hero />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="service">
          <Service />
        </Element>
        <Element name="portfolio">
          <Portfolio />
        </Element>
        {/* <Testimonial/> */}
        <PricingPlan />
        {/* <Element name="blog">
          <BlogSection />
        </Element> */}
        <Element name="contact">
          <ContactSection />
        </Element>
        <Footer />
        <Scrollbar />
      </div>
    </Fragment>
  );
};
export default HomePage;
