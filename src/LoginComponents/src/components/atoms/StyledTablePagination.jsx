import { TablePagination, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  actionsTablePagination: {
    background: "linear-gradient(135deg, #DEDEDE 0%, #FFFFFF 100%)",
    boxShadow:
      "-4px 4px 8px rgba(212, 212, 212, 0.2), 4px -4px 8px rgba(212, 212, 212, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.9), 4px 4px 10px rgba(212, 212, 212, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(212, 212, 212, 0.5)",
    borderRadius: "20px",
    margin: "1vh",
  },
  captionTablePagination: {
    // fontFamily: "'Gotham', sans-serif",
    fontstyle: "normal",
    fontWeight: "normal",
    fontSize: "0.875rem",
    lineHeight: "20px",
    letterSpacing: "0.3px",
    color: "#6C6C6C",
    marginRight: "25px",
  },
}));

function StyledTablePagination(props) {
  const classes = useStyles();
  const { count, page, handleChangePage, limit } = props;
  return (
    <div>
      <TablePagination
        style={{ marginTop: "17px" }}
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={limit}
        rowsPerPageOptions={[]}
        classes={{
          actions: classes.actionsTablePagination,
          caption: classes.captionTablePagination,
        }}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default StyledTablePagination;
