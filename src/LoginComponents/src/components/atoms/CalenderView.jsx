import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  DialogContent,
  DialogActions,
  withStyles,
  IconButton
} from "@material-ui/core";
//day picker imports
import DayPicker, { DateUtils } from "react-day-picker";
import './day-picker.css';
import { StyledCheckbox } from "../MaterialUIStyledComponents/StyledCheckbox";

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '0.875em',
    margin: '0.375em 0.75em',
    lineHeight: '0.81em',
    letterSpacing: '0.025em',
    backgroundColor: 'none',
    borderColor: 'none',
    fontFamily: 'gothammedium',
    fontStyle: 'normal',
    fontWeight: 500,
    color: '#DDDDDD',
  },
})(Button);

export const CalenderView = (props) => {
  const { onClose } = props
  const [state, setState] = useState({
    from: undefined,
    to: undefined,
  });
  const { from, to } = state;
  const modifiers = { start: from, end: to };


  const handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, state);
    setState(range);
  };

  const handleResetClick = () => {
    setState({
      ...state,
      from: undefined,
      to: undefined,
    });
  };

  return (
    <div>
      <DialogContent >
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <div style={{display: "flex", alignItems: "flex-end"}}>
            <IconButton size="small">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 17.1818C0 17.6337 0.366327 18 0.818182 18H17.1818C17.6337 18 18 17.6337 18 17.1818V6.54544H0V17.1818Z" fill="#252733" />
                <path d="M17.1818 1.63636H12.5455V0.818182C12.5455 0.366327 12.1792 0 11.7273 0C11.2755 0 10.9091 0.366327 10.9091 0.818182V1.63636H7.09091V0.818182C7.09091 0.366327 6.72458 0 6.27273 0C5.82087 0 5.45454 0.366327 5.45454 0.818182V1.63636H0.818182C0.366327 1.63636 0 2.00269 0 2.45455V4.90909H18V2.45455C18 2.00269 17.6337 1.63636 17.1818 1.63636Z" fill="#252733" />
              </svg>
            </IconButton>
            <h7 style={{ color: "#252733" }}>Choose start date and end date</h7>
          </div>
          <div>
            <StyledCheckbox /> <h7 style={{ color: "#252733" }}>Forever</h7>
          </div>
        </div>
        <div style={{
          background: "linear-gradient(135deg, #E3E3E3 0%, #FFFFFF 100%)",
          boxShadow: "-10px 10px 20px rgba(224, 224, 224, 0.2), 10px -10px 20px rgba(224, 224, 224, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.9), 10px 10px 25px rgba(224, 224, 224, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(224, 224, 224, 0.5)",
          borderRadius: "0.625em",
          padding: "1em"
        }}>
          <DayPicker
            numberOfMonths={1}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={handleDayClick}
          />
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <BootstrapButton onClick={() => onClose()}>Cancel</BootstrapButton>
        </div>
      </DialogContent>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CalenderView);
