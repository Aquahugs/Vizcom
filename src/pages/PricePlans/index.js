import React, { useEffect } from "react";
import "./about.scss";

import WhiteLogo from "../../assets/logo-white.png";
import { Link } from "react-router-dom";
import { Button, Card } from "antd";
import { Desktop, Tablet, Mobile, Phone } from "./responsive";
import TabletView from "./tablet";
import MobileView from "./mobile";
import Footer from "../../common/components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
const PricePlans = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      delay: 200,
    });
  }, []);
  return (
    <div>
      <Desktop>
        <div className="page-container">
          <div className="row landing-nav-bar">
            <Link to="/">
              <img src={WhiteLogo} />
            </Link>
            <Link to="/signin">
              <Button className="sign-up-btn hvr-shrink" type="primary">
                Sign up
              </Button>
            </Link>
            <Link to="/signin">
              <p className="hvr-shrink">Log in</p>
            </Link>
            <Link to="/about">
              <p className="hvr-shrink">About</p>
            </Link>
            <Link to="/prices-plans">
              <p className="hvr-shrink">Plans & Pricing</p>
            </Link>
          </div>
          <div data-aos="fade-in" className="row title">
            <h1>
              Accelerate your <br />
              creative process
            </h1>
            <p>
              Vizcom plans and prices flex to fit your digital experience needs
              and goals. Pricing is driven by factors like session volume and
              data storage.
            </p>
          </div>
          <div data-aos="fade-up" className="row plans-container">
            <div className="col s4 m4 l4 student ">
              <h1>Student</h1>
              <p>
                Limited feature access to vizcom products and services,
                renewable as long as you remain eligible
              </p>
              <ul>
                <li>Unlimited SD image exports</li>
                <li>Discord Access</li>
                <li>Limited tool access</li>
              </ul>
            </div>
            <div className="col s4 m4 l4 Pro">
              <h1>Pro+</h1>
              <p style={{ fontWeight: "500", color: "#989898" }}>
                Everything in Student +
              </p>
              <p>
                Limited feature access to vizcom products and services,
                renewable as long as you remain eligible
              </p>
              <ul>
                <li>Unlimited HD image exports</li>
                <li>Early access to beta features</li>
                <li>50GB of cloud storage</li>
                <li>Unlimited Tool Access</li>
                <li>Email priority support</li>
              </ul>
            </div>
            <div className="col s4 m4 l4 Enterprise">
              <h1>Enterprise</h1>
              <p style={{ fontWeight: "500", color: "#989898" }}>
                Everything in Pro+ +
              </p>
              <p>
                Intelligent features that keep your design work safe and secure.
              </p>
              <ul>
                <li>Complete Data Privacy</li>
                <li>SSO + advanced security</li>
                <li>Teams (soon)</li>
                <li>Custom Cloud Storage</li>
                <li>Custom ML Integration</li>
                <li>Shared Folders and Links</li>
              </ul>
            </div>
          </div>
          <div className="row buttons">
            <div className="col s4 m4 l4">
              <Button className="coming-soon" type="primary">
                Coming soon
              </Button>
            </div>
            <div className="col s4 m4 l4">
              <Button className="coming-soon" type="primary">
                Coming soon
              </Button>
            </div>
            <div className="col s4 m4 l4">
              <Button className="coming-soon" type="primary">
                Coming soon
              </Button>
            </div>
          </div>
          <div className="row faqs">
            <div className="col s6 m6 l6">
              <h2>FAQs</h2>
            </div>
            <div className="col s6 m6 l6">
              <h3>Learn more about our upcoming plans</h3>
            </div>
            <div className="row statements">
              <div className="col s12 m12 l12">
                <h4>Will licenses be fixed to my hardware?</h4>
                <p>
                  Vizcom is entirely cloud and web based. You can access it from
                  anywhere in the world. Your licence is not tied to any device
                </p>
                <h4>Will you have discounts for students and educators?</h4>
                <p>
                  Yep. Just write to us and we'll help you. You can reach out to
                  us at updates@vizcom.co
                </p>
                <h4>I need compliance safeguard for my content and data.</h4>
                <p>
                  Please reach out to us is you have special security compliance
                  requirements (TPN, SOC2 Type II, MPAA, etc). You can email us
                  at updates@vizcom.co
                </p>
                <h4>Will my subscription auto-renew</h4>
                <p>
                  Yes, your subscription will auto-renew, and your account will
                  be charged either once a month or once a year depending on
                  your billing period unless your account is disabled.
                </p>
              </div>
            </div>
            <div style={{ paddingTop: "15%" }}>
              <Footer />
            </div>
          </div>
        </div>
      </Desktop>
      <Tablet>
        <TabletView />
      </Tablet>
      <Mobile>
        <MobileView />
      </Mobile>
    </div>
  );
};

export default PricePlans;
