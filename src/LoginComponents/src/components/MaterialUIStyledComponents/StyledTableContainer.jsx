import { TableContainer, withStyles } from "@material-ui/core";

export const StyledTableContainer = withStyles((theme) => ({
    root: {
      borderRadius: "0px 1rem",
    },
  }))(TableContainer);