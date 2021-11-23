import {
    withStyles,
    Button
  } from "@material-ui/core";

export const StyledButton = withStyles((theme) => ({
    root: {
      background: theme.palette.buttonBackground,
      boxShadow: "-4px -4px 10px #FFFFFF, 4px 4px 10px rgba(220, 74, 56, 0.25)",
      borderRadius: "50px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "15px 0px",
      width: "100%",
      color: "black",
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "24px",
      "&:hover": {
        background: theme.palette.buttonBackground,
      },
      "&:disabled": {
        background: theme.palette.buttonBackgroundDisabled,
        color: "white",
      }
    },
  }))(Button);