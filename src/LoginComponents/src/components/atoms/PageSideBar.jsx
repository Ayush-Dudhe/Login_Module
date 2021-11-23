import React, { useState, useEffect } from "react";
import {
  withStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import "./atoms.css";
import { connect } from "react-redux";
import { selectList } from "../../redux/PageSideBar/pageSideBar.actions";
import { useTheme } from "@material-ui/styles";
import arrow from "../../assets/arrowGreen.png";
import logo from "../../assets/Dociphi Logo.png";
const styles = (theme) => ({
  drawer: {
    background: "#FBFBFB",
    border: "none",
    width: "19.3%"
  },
  item: {
    padding: 0,
    borderBottom: "1px solid #EEEDF2",
  },
  itemSelected: {
    backgroundColor: "#EEEDF2 !important",
  },
  firstListItem: {
    height: "11vh"
  },
});

function PageSideBar(props) {
  const { classes, lists, selectList, selectListData } = props;
  const [state, setstate] = useState("");
  const theme = useTheme()

  const select = (event, value) => {
    selectList(value);
    setstate(value);
  };

  return (
          <Drawer
            variant="permanent"
            className="drawer"
            classes={{ paper: classes.drawer }}
            style={{ zIndex: 2 }}
          >
            <List
              style={{
                padding: "0px",
                marginTop: "0px"
              }}
            >
              <ListItem className={classes.firstListItem}>
                  <img className="logo" src={logo} alt="Dexter" height="100%"/>
              </ListItem>
              {lists.map((val, index) => {
                return (
                  <ListItem
                    button
                    key={val}
                    className="listItemBox"
                    onClick={(e) => select(e, val)}
                    selected={
                      selectListData === ""
                        ? index === 0
                        : val === selectListData
                    }
                    classes={{
                      root: classes.item,
                      selected: classes.itemSelected,
                    }}
                  >
                    {selectListData === "" && index === 0 ? (
                      <div
                        className="rectangle"
                        style={{
                          backgroundColor: theme.palette.blueQ,
                        }}
                      />
                    ) : (
                      <></>
                    )}
                   
                      <div
                        className="rectangle"
                        style={
                           val === selectListData ? {
                          backgroundColor: theme.palette.blueQ,
                        }: {}
                      }
                      />
                    
                    <ListItemText
                      primary={val}
                      disableTypography
                      className={
                        val === state
                          ? "selectedListTypography"
                          : "listTypography"
                      }
                    />
                    {selectListData === "" && index === 0 ? (
                      <img src={arrow} className="triangle" />
                    ) : (
                      <></>
                    )}
                    {val === selectListData ? (
                      <img src={arrow} className="triangle" />
                    ) : (
                      <></>
                    )}
                  </ListItem>
                );
              })}
            </List>
          </Drawer>
          
   
  );
}

const mapStateToProps = (state) => {
  return {
    selectListData: state.selectList.selectListValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectList: (payload) => dispatch(selectList(payload)),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(PageSideBar)
);
