import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Zoom from "@material-ui/core/Zoom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles({
  root1: {
    minWidth: 275,
    minHeight: 150,
    marginBottom: 20,
    border: "1px solid #eeb7ba",
    transition: "1s",

    "&:hover": {
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px rgba(0,0,0,0.19)",
      transform: "scale(0.8)",
    },
  },
  root: {
    minWidth: 275,
    minHeight: 150,
    transition: "1s",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  CardContent: {
    marginTop: 20,
    marginLeft: 20,
  },
  typo: {
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: "bolder",
    textTransform: "uppercase",
    color: "#d3454c",
    letterSpacing: ".1em",
    // fontSize: "20px",
    marginTop: "10px",
    // backgroundColor: "#eeb7ba",
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const bull = <span className={classes.bullet}>•</span>;
  const [open, setOpen] = React.useState(false);
  const [appId, setAppId] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReject = () => {
    const SendingRequest = async () => {
      try {
        const response = await fetch("http://localhost:3000/doctor/changeStatus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            app_id: props.underApplication._id,
            status: "2",
          }),
        });
        const responseData = await response.json();
        history.go();
      } catch (err) {
        console.log(err);
      }
    };
    SendingRequest();
    setOpen(false);
  };

  useEffect(() => {
    if (props.underApplication._id) {
      setAppId(props.underApplication._id);
      console.log(appId);
    }
  }, [props.underApplication._id]);

  const handleAccept = () => {
    const SendingRequest = async () => {
      try {
        const response = await fetch("http://localhost:3000/doctor/changeStatus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            app_id: props.underApplication._id,
            status: "1",
          }),
        });
        const responseData = await response.json();
        console.log(responseData);
        history.go();
      } catch (err) {
        console.log(err);
      }
    };
    SendingRequest();
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Card
        className={classes.root1}
        variant="outlined"
        onClick={handleClickOpen}
      >
        <CardContent className={classes.CardContent}>
          <Typography variant="h5" component="h2" className={classes.typo}>
            {props.underApplication && props.underApplication.patient_name}
          </Typography>
          <Typography variant="body2" component="p">
            {props.underApplication && props.underApplication.ailment}
          </Typography>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Zoom}
        transitionDelay={open ? "3000ms" : "0ms"}
      >
        <DialogTitle id="alert-dialog-title"  className={classes.typo}>
          {"Patient Name -"}
          {props.underApplication && props.underApplication.patient_name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"  className={classes.typo}>
            Ailment - {props.underApplication && props.underApplication.ailment}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description"  className={classes.typo}>
            Day - {props.underApplication && props.underApplication.day}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description"  className={classes.typo}>
            Specialization -{" "}
            {props.underApplication && props.underApplication.specialization}
          </DialogContentText>
        </DialogContent>
        {props.option && (
          <DialogActions>
            <Button onClick={handleReject} color="primary">
              Reject
            </Button>
            <Button onClick={handleAccept} color="primary" autoFocus>
              Accept
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </React.Fragment>
  );
}
