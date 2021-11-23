import React from "react";
import {
  Snackbar,
  Slide,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import CancelIcon from '@material-ui/icons/Cancel';

//for snackbar transition
function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

const useStyles = makeStyles(() => ({
  snackBar: {
    zIndex: 3,
    top: "2.4em"
  },
  alertBox: {
    background: props => props.err ? "rgba(244, 36, 38, 0.08)": "rgba(39, 181, 133, 0.12)",
    //boxShadow: "-4px -4px 10px #ffffff, 4px 4px 10px rgba(39, 181, 133, 0.25)",
    border: props => props.err ? "1px solid #FF0000": "1px solid #23B082",
    borderRadius: "0.625rem",
    height: "2.5em",
    alignItems: "center"
  },
  alertIcon: {
    display: "none"
  },
  alertText: {
    fontFamily: "gothammedium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.75rem",
    color: props => props.err ? "#FF0000" : "#157A58"
  },
  actionClass: {
    position: "absolute",
    right: "-0.1em",
    top: "-0.6em"
   // background: "black"
  }
}));

const Alerts = (props) => {
  const { snackBar, alertBox, alertIcon, alertText,actionClass } = useStyles(props);
  const { open, msg, err, handleClose } = props;

  return (
    <div>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={6000}
        onClose={handleClose}
        classes={{ root: snackBar }}
        TransitionComponent={TransitionLeft}
      >
        <Alert
          action={
            <CancelIcon fontSize="small" style={{fill:"#000000"}}></CancelIcon>
          }
          onClose={handleClose}
          variant="filled"
          severity={err ? "error" : "success"}
          classes={{ root: alertBox, icon: alertIcon, message: alertText, action: actionClass }}
        >
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Alerts;
