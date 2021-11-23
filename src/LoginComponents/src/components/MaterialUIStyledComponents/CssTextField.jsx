import {
  withStyles,
  TextField
} from "@material-ui/core";

export const CssTextField = withStyles(() => ({
  root: {
    "& label.Mui-focused": {
      color: "#C5C7CD",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#C5C7CD",
    },
    "&:hover .MuiInput-underline": {
      borderBottomColor: "#C5C7CD",
    },
    "&:hover .MuiInput-underline:before": {
      borderBottomColor: "#C5C7CD",
    },
    "& .MuiOutlinedInput-root": {
      background: "white",
      borderRadius: "1vh",
      "& fieldset": {
        borderColor: "#C5C7CD",
      },
      "&:hover fieldset": {
        borderColor: "#C5C7CD",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#C5C7CD",
      },
    },
  },
}))(TextField);
