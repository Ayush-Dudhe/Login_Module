import { TableCell, withStyles } from "@material-ui/core";

export const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#eff7f4",
      color: "#252733",
      fontFamily: "gothammedium",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "19px",
      lineSpacing: "0.2px",
      height: "3em",
    },
    body: {
      backgroundColor: theme.palette.white,
      color: "#252733",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "0.875rem",
      lineHeight: "19px",
      lineSpacing: "0.2px",
      height: "2.5em"
    },
  }))(TableCell);