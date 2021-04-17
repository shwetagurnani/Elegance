import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
// import BackgroundHeader from "./public/Bg1.png";

const useStyles = makeStyles((theme) => ({
  BackgroundHead: {
    height: 400,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "10px",
    width: "auto",
    [theme.breakpoints.up("md")]: {
      height: 550,
      width: 600,
    },
  },

  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },

  BackgroundHead1: {
    
    height: 300,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "10px",
    width: 250,
    [theme.breakpoints.up("md")]: {},
  },
  Head: {
    
    flexGrow: 1,
    margin:"0px",
    padding: "0px",
    [theme.breakpoints.up("md")]: {
      margin:"0px 50px",
      padding: "10px"
    },
  },
  important: {
   
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    flexWrap: "wrap",
   
  },
  extra: {
    textAlign: "center",
    
  },
  extra1: {
    textAlign: "center",
    margin: "10px",
    padding: "20px",
    minHeight: "500px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px rgba(0,0,0,0.19)",
    
  },
  heading: {
    fontFamily: "Lobster, cursive",
    color: "#d3454c",
    fontSize: "20px",
    letterSpacing: ".05em",
    // textShadow: "2px 2px 8px #404040",
    textAlign: "center",
    margin: "10px",
    padding: "10px",
    
    [theme.breakpoints.up("md")]: {
      fontSize: "80px",
    },
  },
  heading1: {
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: "bolder",
    textTransform: "uppercase",
    color: "#d3454c",
    letterSpacing: ".25em",
    fontSize: "25px",
    marginTop: "10px",
    
  },

  subHeading: {
    fontFamily: 'Antic, sans-serif',
    color: "black",
    fontSize: "20px",
    letterSpacing: ".05em",
    marginTop: "10px",
    
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      marginTop: "20px",
    },
  },
  button: {
    backgroundColor: "#d3454c",
    padding: theme.spacing(1, 2),
    textTransform: "none",
    color: "white",
    fontWeight: "normal",
    boxShadow: "20px",
    marginTop: "10px",
    fontSize: "15px",
    [theme.breakpoints.up("md")]: {
      marginTop: "15px",
    },
  },

  feature: {
    padding: "10px",
    margin: "10px",
    // backgroundColor: "white",
    boxShadow: "20px",
    // height: 800,
    width: "400px",
    
  },
}));

const AiTools = () => {
  const classes = useStyles();

  return (
    <>
      {/* <div className={classes.image}> */}
        {/* <img
          src="./feature.png"
          alt="lady"
          className={classes.BackgroundHead}
        ></img> */}
      {/* </div> */}
      <div className={classes.heading}>AI Tools</div>
      <div className={classes.Head}>
        <div className={classes.important}>
          <div className={classes.feature}>
            <div className={classes.extra1}>
              {/* <img
                src="./feature1.png"
                alt="lady"
                className={classes.BackgroundHead1}
              ></img> */}
              <div className={classes.heading1}>Breasts Cancer Detection</div>
              <div className={classes.subHeading}>
              Benign tumors do not invade the surrounding tissues and are therefore non-cancerous while Malignant tissues are cancerous and can invade the surrounding tissues. Benign tumours can be treated with surgery and are easy to temove while malignant tumours are difficult to remove but can be treated with chemotherapy, radiation therapy or immunotherapy treatments.
              </div>
              <Link to="/breastcancer" style={{textDecoration: 'none'}}>
              <Button className={classes.button} variant="contained">
                
                Detect Now
              </Button>
              </Link>
           
              
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.extra1}>
              {/* <img
                src="./feature2.png"
                alt="lady"
                className={classes.BackgroundHead1}
              ></img> */}
              <div className={classes.heading1}>Cervical Cancer Detection</div>
              <div className={classes.subHeading}>
              Cervical cancer is a malignant tumour of the cervix, the lowermost part of the uterus.This cancer affects the deeper tissues of the cervix and can spread to other parts of the body including lung,liver,bladder,vagina and rectum.It is observed that people with other common diseases like Sexually Transmitted disease,HIV/AIDS etc. develop cervical cancer.
Please answer the following questions to know if you have cervical cancer using the Machine Learning model which was trained over the data with results of cervical cancer using tests like Hinselmann,Schiller,Cytology and Biopsy.
              </div>
              <Link to="/cervical" style={{textDecoration: 'none'}}>
              <Button className={classes.button} variant="contained">
                Detect Now
              </Button>
              </Link>
            
              
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.extra1}>
              {/* <img
                src="./feature3.png"
                alt="lady"
                className={classes.BackgroundHead1}
              ></img> */}
              <div className={classes.heading1}>PCOS Detection</div>
              <div className={classes.subHeading}>
              Polycystic ovary syndrome (PCOS) is a condition that affects a woman's hormone levels.1 out of every 5 women suffer from PCOS.The cause of polycystic ovary syndrome isn't well understood, but may involve a combination of genetic and environmental factors.Still there is lack of awareness among women about PCOS and it is not detected until they are taken to a doctor.
 Please answer the questionnaire below to know if u are at the risk of PCOS.
              </div>
              <Link to="/pcos" style={{textDecoration: 'none'}}>
              <Button className={classes.button} variant="contained">
                Detect Now
              </Button>
              </Link>
             
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default AiTools;
