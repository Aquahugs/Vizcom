import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import Dropzone from "../../../common/components/Dropzone";
import { useForm } from "react-hook-form";
import sk2rService from "../../../common/services/sk2r-service";
import { Button } from "react-materialize";

export const Sk2R = ({ history, user, uid, getProfile }) => {
  const [files, setFiles] = useState([]);
  const [dookie, setDookie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [placeHold, setIsPlaceHold] = useState(true);
  const [renderedImage, setRenderedImage] = useState("");
  const [testImage, setTestImage] = useState("");

  useEffect(() => {}, []);

  const handleSubmitForm = () => {
    setIsLoading(true);
   
    const formData = new FormData();

    for (let i = 0; i < files.length; i += 1) {
      formData.append("file", files[i]);
    }

    const req = {
      uuid: uid,
      formData,
    };
    let img = {
      prerenderedImage: "",
      renderedImage: "",
      uuid: uid,
    };

    sk2rService.renderImage(req).then((resp) => { 
      console.log(resp)
     
      console.log(img)
      
      setRenderedImage(resp)
      setTestImage(resp)
      console.log(renderedImage)
      console.log(testImage)
      
  
     
    
      const renderedRequest = {
        renderedImage,
      };

     
     

   
      sk2rService.uploadRender(renderedRequest).then((resp) => {
        console.log(resp)
        
        img.renderedImage = resp.data;
      });
      sk2rService.uploadPrerender(req).then((resp) => {
        img.prerenderedImage = resp;
      });
      setIsLoading(false);
    });
    
  };
  const imageDrop = () => {
    console.log("pop")
  }
  const placeHoldStyle = {
   
      width: placeHold === false ? '25px' : '450px',
     

  }


  if (isLoading) {
    return <div><img src = "https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/Loader.gif?alt=media&token=82578f82-d720-4b61-9473-a3f4a68de2ec"/></div>;
  } else {
    return (
      <div className = "row">
        <h1 style = {{fontSize:'14px',textAlign:'center'}}>SK2R Beta v 0.0.1</h1>
        <div className = 'col s6 m6 l6'>
          <form>
            <h3 style = {{fontSize:'12px'}} >Your sketch</h3>
            <div style = {{maxWidth:'100%',height:'auto'}}>
              <Dropzone   dookie={ setDookie}  files={files} setFiles={setFiles} multiple={false} />
            </div>
            <Button
              flat
              modal="close"
              node="button"
              waves="green"
              onClick={() => handleSubmitForm()}
           
            >
              Submit
            </Button>
          </form>   
        </div>
        <div className = 'col s6 m6 l6'>
          <h3 style = {{fontSize:'12px'}} >Result</h3>
          <img  style = {{maxWidth:'100%',height:'auto'}}src={renderedImage}/>  
          <img src = "https://via.placeholder.com/450"/>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  uid: state.session.authUser.uid,
  user: state.profile.user,
});

export default compose(withRouter, connect(mapStateToProps))(Sk2R);
