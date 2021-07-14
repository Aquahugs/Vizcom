import "./privacy-policy.scss";
import { Tooltip } from "antd";
import backarrow from "../../assets/back-arrow.svg";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <Tooltip placement="right" title={"Back to tools home"}>
        <Link to={"/home"}>
          <img alt="back arrow" className="sk2r-back-arrow" src={backarrow} />
        </Link>
      </Tooltip>
      <div className="row">
        <div className="col-md-12">
          <h1>Privacy Policy</h1>
          <p>
            We would like to be fully transparent with you. Vizcom is a
            completely free product. And even though we promise not to sell your
            data to third parties, we might use it to improve the service and
            the AI. Data is what helps us improve, and the only thing we ask
            from you. The images uploaded to our site might be used to improve
            our machine learning models. Thank you for using Vizcom and in
            helping us build awesome design tools.
          </p>
          <p>
            We will collect and use of your data solely for the purpose of
            improving our website. By using this site, you agree to the
            collection and use of information in accordance with this policy.
          </p>
          <p>
            We will not use or share your data with anyone except as described
            in this privacy policy.
          </p>
          <p>
            The names of any individuals created by or for the use of this site
            are not used in advertising or publicity pertaining to the web site.
          </p>
          <p>
            We will not use or share any information from this site with any
            other person or entity, except as described in this privacy policy.
          </p>
          <p>
            We will use reasonable efforts to remove or delete any information
            we believe has been collected in violation of this privacy policy,
            but in the event that we cannot do so, we will retain the
            information for at least 30 days.
          </p>
          <p>
            If you have any questions about this privacy policy, please contact
            us. You can contact us by email at{" "}
            <a href="mailto:contactvizcom@gmail.com">contactvizcom@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
