import { Link } from "react-router-dom";

// a react functional component describing the Terms of Use page
const TermsOfUse = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Terms of Use</h1>
          <p>
            Please read these terms of use carefully before using Vizcom
            operated by us.
          </p>
          <strong>Conditions of use</strong>
          <p>
            By using this website, you certify that you have read and reviewed
            this Agreement and that you agree to comply with its terms. If you
            do not want to be bound by the terms of this Agreement, you are
            advised to leave the website accordingly. Vizcom only grants use and
            access of this website, its products, and its services to those who
            have accepted its terms
          </p>
          <strong>Privacy policy</strong>
          <p>
            Before you continue using our website, we advise you to read our{" "}
            <Link to="/privacy-policy">privacy policy</Link> regarding our user
            data collection. It will help you better understand our practices.
          </p>
          <strong>Age restriction</strong>
          <p>
            You must be at least 18 (eighteen) years of age before you can use
            this website. By using this website, you warrant that you are at
            least 18 years of age and you may legally adhere to this Agreement.
            Vizcom assumes no responsibility for liabilities related to age
            misrepresentation.
          </p>
          <strong>Intellectual property</strong>
          <p>
            You agree that all materials, products, and services provided on
            this website are the property of Vizcom, its affiliates, directors,
            officers, employees, agents, suppliers, or licensors including all
            copyrights, trade secrets, trademarks, patents, and other
            intellectual property. You also agree that you will not reproduce or
            redistribute the Vizcom’s intellectual property in any way,
            including electronic, digital, or new trademark registrations. You
            grant Vizcom a royalty-free and non-exclusive license to display,
            use, copy, transmit, and broadcast the content you upload and
            publish. For issues regarding intellectual property claims, you
            should contact the company in order to come to an agreement.
          </p>
          <strong>User accounts</strong>
          <p>
            As a user of this website, you may be asked to register with us and
            provide private information. You are responsible for ensuring the
            accuracy of this information, and you are responsible for
            maintaining the safety and security of your identifying information.
            You are also responsible for all activities that occur under your
            account or password. If you think there are any possible issues
            regarding the security of your account on the website, inform us
            immediately so we may address it accordingly. We reserve all rights
            to terminate accounts, edit or remove content and cancel orders in
            their sole discretion.
          </p>
          <strong>Applicable law</strong>
          <p>
            By visiting this website, you agree that the laws of the United
            States, without regard to principles of conflict laws, will govern
            these terms and conditions, or any dispute of any sort that might
            come between Vizcom and you, or its business partners and
            associates.
          </p>
          <strong>Disputes</strong>
          <p>
            Any dispute related in any way to your visit to this website or to
            products you purchase from us shall be arbitrated by state or
            federal court [location] and you consent to exclusive jurisdiction
            and venue of such courts.
          </p>
          <strong>Indemnification</strong>
          <p>
            You agree to indemnify Vizcom and its affiliates and hold Vizcom
            harmless against legal claims and demands that may arise from your
            use or misuse of our services. We reserve the right to select our
            own legal counsel.
          </p>
          <strong>Limitation on liability</strong>
          <p>
            Vizcom is not liable for any damages that may occur to you as a
            result of your misuse of our website. Vizcom reserves the right to
            edit, modify, and change this Agreement any time. We shall let our
            users know of these changes through electronic mail. This Agreement
            is an understanding between Vizcom and the user, and this supersedes
            and replaces all prior agreements regarding the use of this website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
