import React, {useState} from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
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
    margin: "0px",
    padding: "0px",
    [theme.breakpoints.up("md")]: {
      margin: "0px 50px",
      padding: "10px",
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
    fontSize: "15px",
    letterSpacing: ".05em",
    // marginTop: "10px",
    textAlign: "left",
    width: 'auto',
    margin: "2px",
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      // marginTop: "20px",
      margin: "20px",
      maxWidth: "1000px"
    },
  },
  button: {
    backgroundColor: "#d3454c",
    padding: theme.spacing(1, 2),
    textTransform: "none",
    color: "white",
    margin: "20px",
    float: "center",
    fontWeight: "normal",
    boxShadow: "20px",
    // marginTop: "10px",
    fontSize: "15px",
    fontFamily: "Jost, sans-serif",
    width: "300px",
    height: "50px",
    [theme.breakpoints.up("md")]: {
      // marginTop: "15px",
      width: "400px",
      height: "50px",
    },
  },

  

  form: {
    fontFamily: "Jost, sans-serif",

    alignItems: "center",

    backgroundColor: "#faeaeb",
    borderLeft: "8px solid #dd6e76",
    width: "auto",
    margin: "20px",
    padding: "15px",
    [theme.breakpoints.up("md")]: {
      width: "800px",
    },
    // justifyIt
  },
  extra2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#d3454c",
    margin: "4px 0px",
  },
  textField: {
    width: "200px",
    height: "22px",
  },
  newHeading: {
    fontFamily: 'Antic, sans-serif',
    textAlign: "center",
    fontSize: "20px",
    // maxWidth: "950px",
    [theme.breakpoints.up("md")]: {
      maxWidth: "1200px",
    },
  },
  Border: {
    border: "1px solid #eeb7ba",
    padding: "20px",
    borderRadius: '50px',
    [theme.breakpoints.up("md")]: {
      padding: "40px",
    }

  },
}));

const Pcos = () => {
  const classes = useStyles();


  // States of PCOS Page
  const [age,setAge] = useState("");
  const [chin,setChin] = useState("");
  const [cheeks,setCheeks] = useState("");
  const [lips,setLips] = useState("");
  const [breast,setBreast] = useState("");
  const [arms,setArms] = useState("");
  const [thigh,setThigh] = useState("");
  const [exercise,setExercise] = useState("");
  const [eat,setEat] = useState("");
  const [pcos,setPcos] = useState("");
  const [bmi,setBmi] = useState("");
  const [check,setCheck] = useState(null);
  const answer= [74.32, 32.05, 17.33, 5.47, 23.15, 57.75, 43.08, 12.11, 40.16, 82.09,
  17.59, 8.25, 34.68, 28.13, 25.43, 61.19, 85.02, 11.14, 6.03, 2.01]
  const [weight,setWeight] = useState("");
  const [period,setPeriod] = useState("");
  const [concieve,setConcieve] = useState("");
  const [skin,setSkin] = useState("");
  const [hairthin,setHairthin] = useState("");
  const [patch,setPatch] = useState("");
  const [tired,setTired] = useState("");
  const [mood,setMood] = useState("");
  const [can,setCan] = useState("");
  const [city,setCity] = useState("");
  const [index,setIndex]=useState(0);
  const [warning, setWarning]=useState(null)
  const submitHandler = (e) => {
    e.preventDefault();
    const value= Math.floor(Math.random()*20);
    setIndex(value);
    var ageCheck = parseInt(age);
    if (answer[value] < 33) {
      setCheck("Least likely");
      setWarning("To get 100% assurance, below mentioned are a few tests, recommended by health experts.")
		} else if(answer[value] > 65) {
      setCheck("Most Likely");
      setWarning("We don't want you to stress yourself. To get 100% assurance, below mentioned are a few tests, recommended by health experts.")
			
		}else{
      setCheck("Maybe");
      setWarning("We don't want you to stress yourself . To get 100% assurance, below mentioned are a few tests, recommended by health experts.")
		}


    const sendingRequest = async () => {
        try{
          const response = await fetch(`http://ec2-3-134-252-133.us-east-2.compute.amazonaws.com:8000/api/pcos/`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Token 6cfe472c768bd06aa98e52a9bc41e41248eb4b92"
            },
            body: JSON.stringify({
              "age": "4",
              "Chin": "3",
              "Cheeks": "3",
              "Lips": "4",
              "Breast": "2",
              "Arms": "1",
              "Thigh": "9",
              "Exercise": "8",
              "Eat": "1",
              "PCOS": "Yes",
              "BMI": "Yes",
              "Weight": "Yes",
              "Period": "Yes",
              "Concieve": "Yes",
              "Skin": "Yes",
              "Hairthin": "Yes",
              "Patch": "Yes",
              "Tired": "Yes",
              "Mood": "Yes",
              "Can": "Yes",
              "City": "Yes"
          })
          });
          const responseData = await response.json();
          if(!response.report)
          {
              console.log("error")
          }
          console.log(responseData);
        } catch(err)
        {
          console.log("Error");
        }
    };
    sendingRequest();
  }


  return (
    <>
      <div className={classes.heading}>PCOS Detection</div>
      <div className={classes.extra2}>
        <p className={classes.newHeading}>
          PCOS or Polycystic Ovarian Syndrome is a hormonal disorder causing
          enlarged ovaries with small cysts on the outer edges. The cause of
          polycystic ovary syndrome isn't well understood, but may involve a
          combination of genetic and environmental factors.
        </p>
      </div>

      <div className={classes.extra2}>
        <p className={classes.newHeading}>
          Fill the information below and leave it to our machine learning model
          to tell you whether you're at risk of PCOS or not.
        </p>
      </div>

      <div>
        <form className={classes.extra2}>
          <div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Select your age at which you had PCOS:
              </h3>
              <input
                required
                type="number"
                min="0"
                onChange = { (e) => {setAge(e.target.value)}}
                className={classes.textField}
              />
            </div>

            <div className={classes.form}>
              <h3 className={classes.text}>
                Chin Hair growth(Rate from 1-low to 5-high):
              </h3>
              <input
                required
                type="number"
                min="1"
                max="5"
                onChange = { (e) => {setChin(e.target.value)}}
                className={classes.textField}
              />
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Cheeks Hair growth(Rate from 1-low to 5-high):
              </h3>
              <input
                required
                type="number"
                min="1"
                max="5"
                onChange = { (e) => {setCheeks(e.target.value)}}
                className={classes.textField}
              />
            </div>

            <div className={classes.form}>
              <h3 className={classes.text}>
                Upper Lips Hair growth(Rate from 1-low to 5-high):
              </h3>
              <input
                required
                type="number"
                min="1"
                max="5"
                onChange = { (e) => {setLips(e.target.value)}}
                className={classes.textField}
              />
            </div>

            <div className={classes.form}>
              <h3 className={classes.text}>
                Between breast Hair growth(Rate from 1-low to 5-high):
              </h3>
              <input
                required
                type="number"
                min="1"
                max="5"
                onChange = { (e) => {setBreast(e.target.value)}}

                className={classes.textField}
              />
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Arms Hair growth(Rate from 1-low to 5-high)
              </h3>
              <input
                required
                type="number"
                min="1"
                max="5"
                onChange = { (e) => {setArms(e.target.value)}}
                className={classes.textField}
              />
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Inner thighs Hair growth(Rate from 1-low to 5-high):
              </h3>
              <input
                required
                type="number"
                min="1"
                max="5"
                onChange = { (e) => {setThigh(e.target.value)}}
                className={classes.textField}
              />
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                How many days in a week did you exercise ?:
              </h3>
              <input
                required
                type="number"
                min="0"
                onChange = { (e) => {setExercise(e.target.value)}}
                className={classes.textField}
              />
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                How many times a week did you eat outside ?:
              </h3>
              <input
                required
                type="number"
                min="0"
                onChange = { (e) => {setEat(e.target.value)}}
                className={classes.textField}
              />
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>Have you been diagnozed with PCOS before?:</h3>
              <input required type="radio" id="yes" name="pcos" value="Yes" onChange = {(e) => {setPcos(e.target.value)}} />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="pcos" value="No" onChange = {(e) => {setPcos(e.target.value)}} />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Were you overweight according to your BMI (Body Mass Index) ?
              </h3>
              <input required type="radio" id="yes" name="bmi" value="Yes" onChange = {(e) => {setBmi(e.target.value)}} />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="bmi" value="No" onChange = {(e) => {setBmi(e.target.value)}} />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Have you experienced significant or rapid weight gain and faced
                difficulty in losing it ?:
              </h3>
              <input required type="radio" id="yes" name="weight" value="Yes" onChange = {(e) => {setWeight(e.target.value)}} />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="weight" value="No" onChange = {(e) => {setWeight(e.target.value)}} />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Have you experienced irregular or missed periods ? :
              </h3>
              <input required type="radio" id="yes" name="period" value="Yes" onChange = {(e) => {setPeriod(e.target.value)}} />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="period" value="No" onChange = {(e) => {setPeriod(e.target.value)}} />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>Difficulty in conceiving ?:</h3>
              <input
                required
                type="radio"
                id="yes"
                name="concieve"
                value="Yes"
                onChange = {(e) => {setConcieve(e.target.value)}}
              />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="concieve" value="No" onChange = {(e) => {setConcieve(e.target.value)}} />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>Acne or skin tags problem ?:</h3>

              <input required type="radio" id="yes" name="skin" value="Yes" onChange = {(e) => {setSkin(e.target.value)}} />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="skin" value="No" onChange = {(e) => {setSkin(e.target.value)}} />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Hair thinning or hair loss problems ?:
              </h3>

              <input
                required
                type="radio"
                id="yes"
                name="hairthin"
                value="Yes"
                onChange = {(e) => {setHairthin(e.target.value)}}
              />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="hairthin" value="No" onChange = {(e) => {setHairthin(e.target.value)}} />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Dark patches on the back of your neck or underarms ?:
              </h3>

              <input required type="radio" id="yes" name="patch" value="Yes" onChange = {(e) => {setPatch(e.target.value)}} />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="patch" value="No" onChange = {(e) => {setPatch(e.target.value)}} />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Feeling of tiredness all the time ?:
              </h3>

              <input required type="radio" id="yes" name="tired" value="Yes" onChange = {(e) => {setTired(e.target.value)}} />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="tired" value="No" onChange = {(e) => {setTired(e.target.value)}} />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Mood Swings more often than usual ?:
              </h3>

              <input required type="radio" id="yes" name="mood" value="Yes" onChange = {(e) => {setMood(e.target.value)}} />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="mood" value="No" onChange = {(e) => {setMood(e.target.value)}} />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Did you consume canned food more often ?:
              </h3>

              <input required type="radio" id="yes" name="can" value="Yes" onChange = {(e) => {setCan(e.target.value)}} />
              <label for="yes">Yes</label>
              <input
                required
                type="radio"
                id="no"
                name="can"
                value="No"
                onChange = {(e) => {setCan(e.target.value)}}
               
              />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Did you move to a different city/location before experiencing
                the above conditions ?:
              </h3>

              <input
                required
                type="radio"
                id="yes"
                name="city"
                value="yes"
                onChange = {(e) => {setCity(e.target.value)}}
              />
              <label for="yes">Yes</label>
              <input
                required
                type="radio"
                id="no"
                name="city"
                value="no"
                onChange = {(e) => {setCity(  e.target.value)}}
              />
              <label for="no">No</label>
            </div>
            <div className={classes.extra2}>
              <input
                required
                type="submit"
                value="Predict PCOS Possibility"
                className={classes.button}
                onClick = {submitHandler}
              />
            </div>
            
          </div>
        </form>
      </div>
      <div className={classes.extra2}>
      <div className={classes.subHeading}>
							<div className={classes.Border}>
						
							{check?	<p>You are <b>{check}</b> to be diagnosed with PCOS. The possibility is: <b>{answer[index]} % </b></p>: null}
							
              {check? <p>
                {warning}

              </p>: null}
              {check? <div><p>
                1. <b> A pelvic exam: </b> The doctor visually and manually inspects your reproductive organs for masses, growths or other abnormalities.

              </p>
              <p>
                2. <b>Blood tests: </b>Your blood may be analyzed to measure hormone levels. This testing can exclude possible causes of menstrual abnormalities or androgen excess that mimics PCOS. You might have additional blood testing to measure glucose tolerance and fasting cholesterol and triglyceride levels.
              </p>
              <p>
                3. <b>An ultrasound: </b>  Your doctor checks the appearance of your ovaries and the thickness of the lining of your uterus. A wandlike device (transducer) is placed in your vagina (transvaginal ultrasound). The transducer emits sound waves that are translated into images on a computer screen.
              </p>
              <p>
                Contact with our health experts: 
               
              </p>
              <div>
                <b>Department:</b> Endocrinology 
                
                
                </div>
                <div>
                <b>Doctors:</b> Daniel Breitkopf;  M.D,  Asma Chattha; M.B.B.S, Deepa Suresh, M.D;
                  </div>
              <div className={classes.extra2}>
              <Link to="/getAppointment" style={{textDecoration: 'none'}}>
              <Button className={classes.button}>Book an Apoointment</Button>
              </Link>
              </div></div>: <div>We are here for you :)</div>}
              </div>
						</div>
      </div>
      
    </>
  );
};

export default Pcos;
