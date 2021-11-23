import React, { useState } from "react";
import {
  withStyles,
  makeStyles,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
  Tooltip,
} from "@material-ui/core";
import actionButton from "../../assets/actionButton.svg";
import "./atoms.css";
import { CalenderView } from "./CalenderView";
import { StyledTableCell } from "../MaterialUIStyledComponents/StyledTableCell";
import { StyledTableContainer } from "../MaterialUIStyledComponents/StyledTableContainer";
import { StyledSkeleton } from "../MaterialUIStyledComponents/StyledSkeleton";
import { stringFormatting } from "../../utils/helper"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "#F7F6F8",
    "&:last-child > td": {
      borderBottom: "0px"
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 600
  },
});

export default function CustomizedTables(props) {
  const { data, name, loading, header, actions } = props;
  const classes = useStyles();
  const [rolesDialog, setRolesDialog] = useState(false);
  const [userDialog, setUserDialog] = useState(false);
  const newArray = new Array(header.length - 1).fill(" ");
  const actionButtonClicked = (event) => {
    if (name === "rolesRepo") {
      setRolesDialog(true);
    }
    if (name === "userRepo") {
      setUserDialog(true);
    }
  };

  const handleClose = () => {
    setRolesDialog(false);
    setUserDialog(false);
  };

  return (
    <>
      <StyledTableContainer
        style={{ borderRadius: "2vh", border: "1px solid rgba(224, 224, 224, 1)" }}
      >
        <Table
          className={classes.table}
          aria-label="customized table"
          size="small"
        >
          <TableHead>
            <TableRow>
              {header.map((val) => {
                return <StyledTableCell>{val}</StyledTableCell>;
              })}
              {actions ? (
                <StyledTableCell style={{ position: "sticky", right: 0 }}>
                  Actions
                </StyledTableCell>
              ) : (
                ""
              )}
            </TableRow>
          </TableHead>
          {loading ? (
            <TableBody>
              {[1, 2, 3].map((item, index) => (
                <TableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    <StyledSkeleton width={35} />
                  </StyledTableCell>
                  {newArray.map((item) => (
                    <StyledTableCell align="right">
                      <StyledSkeleton height={20} />
                    </StyledTableCell>
                  ))}
                  {actions ? (
                    <StyledTableCell>
                      <StyledSkeleton width={35} />
                    </StyledTableCell>
                  ) : (
                    ""
                  )}
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <></>
          )}

          <TableBody>
            {data.map((row, index) => {
              return (
                <StyledTableRow key={index}>
                  {Object.keys(row).map((val) => {
                    return (
                      <StyledTableCell align="left">
                        <Tooltip
                          arrow
                          title={row[val].length > 20 ? row[val] : ""}
                        >
                          <span>{stringFormatting(row[val], 20)}</span>
                        </Tooltip>
                      </StyledTableCell>
                    );
                  })}
                  {actions ? (
                    <StyledTableCell
                      align="left"
                      style={{
                        position: "sticky",
                        right: 0,
                      }}
                    >
                      <div className="container">
                        <button
                          className="btnIcon"
                          onClick={(e) => actionButtonClicked(e)}
                        >
                          <img src={actionButton} className="icon" />
                        </button>
                      </div>
                    </StyledTableCell>
                  ) : (
                    ""
                  )}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <Dialog
        open={rolesDialog || userDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {userDialog ? <CalenderView /> : <></>}
        {rolesDialog ? (
          <>
            <DialogTitle>{"Disable this role"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Are you sure you want to delete this role
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose}>Agree</Button>
            </DialogActions>
          </>
        ) : (
          <></>
        )}
      </Dialog>
    </>
  );
}
