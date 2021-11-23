import {
  FormControl,
  MenuItem,
  Select,
  makeStyles,
  InputBase,
  withStyles,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
    width: "100%",
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    fontFamily: "gothambook",
    appearance: "none",
    width: "100%",
    backgroundColor: "#f4f4f4",
    fontSize: "0.875rem",
    color: "#61677C",
    textShadow: "1px 1px 0 #FFF",
    padding: "0.75em",
    outline: "none",
    border: "none",
    borderRadius: "0.625rem",
    boxShadow: "inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF",
    transition: "all 0.2s ease-in-out",
    "&:focus": {
      borderRadius: "0.75rem",
      boxShadow: "inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF"

    }
  }

}))(InputBase);

const BootstrapDisabledInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    fontFamily: "gothambook",
    appearance: "none",
    width: "100%",
    backgroundColor: "#f4f4f4",
    fontSize: "0.875rem",
    color: "#c0c0c0",
    textShadow: "1px 1px 0 #FFF",
    padding: "0.75rem",
    outline: "none",
    border: "none",
    borderRadius: "0.75rem",
    boxShadow: "inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF",
    transition: "all 0.2s ease-in-out",
    "&:focus": {
      borderRadius: "0.75rem",
      boxShadow: "inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF"

    }
  }

}))(InputBase);

export const StyledTextFieldDropDown = (props) => {
  const classes = useStyles();
  const { state, name, data, onChangeHandler, value } = props;
  const [option, setOption] = React.useState("");
  useEffect(() => {
    //if condition for already set data e.g. in change classification type, confirmation pop up
    if (value) {
      setOption(value);
    } else {
      if (data.length > 0) {
        setOption(0);
      }
    }
  }, [name, data, value]);
  const handleChange = (event) => {
    setOption(event.target.value);
    onChangeHandler(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.margin} disabled={state}>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={option}
          onChange={handleChange}
          input={state ? <BootstrapDisabledInput /> : <BootstrapInput />}
          fullWidth
          MenuProps={{ disableScrollLock: true }}
        >
          {/* (<MenuItem value="0">Select</MenuItem>){console.log(data)} */}
          {
            data.length > 0 &&
            data.map((val, index) => {
              return (
                <MenuItem key={index} value={val?.value}>
                  {val.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    createUserData: state.createUser,
    createWorkspaceData: state.createWorkspace,
  };
};

export default connect(mapStateToProps)(StyledTextFieldDropDown);
