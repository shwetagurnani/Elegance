import React from "react";
// import {Link} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
// import BackgroundHeader from "./public/Bg1.png";

const useStyles = makeStyles((theme) => ({
  BackgroundHead: {
    // backgroundImage: 'url('+ BackgroundHeader+')',
    height: 400,

    // position: 'absolute',
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
    // backgroundImage: 'url('+ BackgroundHeader+')',
    height: 300,

    // position: 'absolute',
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundColor: "#eeb7ba",

    margin: "10px",
    width: 250,
    [theme.breakpoints.up("md")]: {},
  },
  Head: {
    // backgroundColor: "#eeb7ba",
    flexGrow: 1,
  },
  important: {
    // position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    flexWrap: "wrap",
    // backgroundColor: "#eeb7ba",
  },
  extra: {
    textAlign: "center",
    // backgroundColor: "#eeb7ba",
  },
  extra1: {
    textAlign: "center",
    margin: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px rgba(0,0,0,0.19)",
    minHeight: "400px",
    // backgroundColor: "#eeb7ba",
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
    // backgroundColor: "#eeb7ba",
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
    // backgroundColor: "#eeb7ba",
  },

  subHeading: {
    fontFamily: "Antic, sans-serif",
    color: "black",
    fontSize: "15px",
    letterSpacing: ".05em",
    marginTop: "10px",
    // backgroundColor: "#eeb7ba",
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
    height: 400,
    width: "400px",
    // backgroundColor: "#eeb7ba",
  },
}));

const Features = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.image}>
        {/* <img
          src="./feature.png"
          alt="lady"
          className={classes.BackgroundHead}
        ></img> */}
      </div>
      <div className={classes.heading}>Features</div>
      <div className={classes.Head}>
        <div className={classes.important}>
          <div className={classes.feature}>
            <div className={classes.extra1}>
              {/* <img
                src="./feature1.png"
                alt="lady"
                className={classes.BackgroundHead1}
              ></img> */}
              <div className={classes.heading1}>Manage medical history</div>
              <div className={classes.subHeading}>
                We reduce your burden of collecting medical prescriptions and
                reports by storing and maintaining your medical records and
                share them with your practitioners on your accord. Now it
                becomes easy to manage your medical history with a click.
              </div>
              {/* <Link href="/prescription">
              <Button className={classes.button} variant="contained">
                Manage Now
              </Button>
              </Link> */}
              <Link to="/prescription" style={{textDecoration: 'none'}}>
                <Button className={classes.button} variant="contained">
                  Manage Now
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
              <div className={classes.heading1} >
                Know about our Health Experts
              </div>
              <div className={classes.subHeading}>
                We put together an array of dedicated,verified and skilled
                experts to assist you over every hurdle you come across in a
                diligent manner.We provide chats and video call options with
                recognised practitioners and medical experts.
              </div>
              <Link to="/doctorlist" style={{textDecoration: 'none'}}>
                <Button className={classes.button} variant="contained">
                  Consult Now
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
              <div className={classes.heading1}>Book Labs and Appointments</div>
              <div className={classes.subHeading}>
                We reduce the hassle on searching for a doctor and booking a
                slot for an appointment by providing the facility of booking an
                appointment with a doctor according to your location and other
                requirements specified and notify you when the appointment is
                confirmed.
              </div>
              <Link to="/getAppointment" style={{textDecoration: 'none'}}>
                <Button className={classes.button} variant="contained">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
