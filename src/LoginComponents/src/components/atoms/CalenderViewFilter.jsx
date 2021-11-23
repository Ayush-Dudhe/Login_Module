import React, { useState } from "react";
import { connect } from "react-redux";
import {
    DialogContent,
    IconButton,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    styled,
    Divider,
    TextField,
    makeStyles,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
//day picker imports
import DayPicker, { DateUtils } from "react-day-picker";
import './day-picker.css';
import { dateFormatting } from "../../utils/helper";

const useStyles = makeStyles((theme) => ({
    select: {
        borderRadius: "1vh",
    },
    selectRoot: {
        padding: "1vh",
        "&:focus": {
            backgroundColor: "white",
            borderRadius: "1vh",
        },
    },

}));

export const CssTextField = withStyles({
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
})(TextField);

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    border: '2px solid #E6E6E6',
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#1ECBF1',
    outline: '2px solid #E6E6E6',
    border: '2px solid white',
    '&:before': {
        display: 'block',
    },
});

function BpRadio(props) {
    return (
        <Radio
            disableRipple
            color="none"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
        />
    );
}

export const CalenderViewFilter = (props) => {
    const classes = useStyles();
    const { onClose } = props
    const [state, setState] = useState({
        from: undefined,
        to: undefined,
    });
    const { from, to } = state;
    const modifiers = { start: from, end: to };
    const [selectedDay, setSelectedDay] = useState(undefined)

    // event handler for date range
    const handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, state);
        setState(range);
    };

    // event handler for date on
    const handleSingleDayClick = (day) => {
        setSelectedDay(day)
    }

    const handleResetClick = () => {
        setState({
            ...state,
            from: undefined,
            to: undefined,
        });
    };

    const [value, setValue] = useState('date');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <DialogContent style={{ paddingTop: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group"
                            value={value}
                            onChange={handleChange}>
                            <FormControlLabel value="date" control={<BpRadio />} label="On Date" />
                            <FormControlLabel value="dateRange" control={<BpRadio />} label="Date Range" />
                        </RadioGroup>
                    </FormControl>
                    <IconButton size="small" onClick={() => onClose()}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 5L5 15" stroke="#DDDDDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5 5L15 15" stroke="#DDDDDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </IconButton>
                </div>
                <Divider />
                <div>
                    {value === 'date' ?
                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end" }}>
                            <h6>On</h6> <CssTextField
                                id="outlined-basic"
                                variant="outlined"
                                size="small"
                                inputProps={{ style: { padding: "1vh" } }}
                                placeholder="Search"
                                value={selectedDay ? dateFormatting(selectedDay).split(" ")[2] : ""}
                                name="customer_id"
                                // onChange={(e) => handleFilters(e)}
                                className={classes.select}
                                classes={{ root: classes.selectRoot }}
                                style={{ paddingLeft: "0" }}
                            />
                        </div>
                        :
                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", columnGap: "0.25em" }}>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", columnGap: "0.25em" }}>
                                <h6>From</h6>
                                <CssTextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    size="small"
                                    inputProps={{ style: { padding: "1vh" } }}
                                    placeholder="Search"
                                    value={state.from ? dateFormatting(state.from).split(" ")[2] : ""}
                                    name="customer_id"
                                    // onChange={(e) => handleFilters(e)}
                                    className={classes.select}
                                    classes={{ root: classes.selectRoot }}
                                    style={{ paddingLeft: "0" }}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", columnGap: "0.25em" }}>
                                <h6>To</h6>
                                <CssTextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    size="small"
                                    inputProps={{ style: { padding: "1vh" } }}
                                    placeholder="Search"
                                    value={state.to ? dateFormatting(state.to).split(" ")[2] : ""}
                                    name="customer_id"
                                    // onChange={(e) => handleFilters(e)}
                                    className={classes.select}
                                    classes={{ root: classes.selectRoot }}
                                    style={{ paddingLeft: "0" }}
                                />
                            </div>
                        </div>
                    }
                </div>
                <div style={{
                    background: "linear-gradient(135deg, #E3E3E3 0%, #FFFFFF 100%)",
                    boxShadow: "-10px 10px 20px rgba(224, 224, 224, 0.2), 10px -10px 20px rgba(224, 224, 224, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.9), 10px 10px 25px rgba(224, 224, 224, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(224, 224, 224, 0.5)",
                    borderRadius: "0.625em",
                    padding: "1em",
                    textAlign: "center"
                }}>
                    {value === 'date' ?
                        <DayPicker onDayClick={handleSingleDayClick} selectedDays={selectedDay} />
                        :
                        <DayPicker
                            numberOfMonths={1}
                            selectedDays={[from, { from, to }]}
                            modifiers={modifiers}
                            onDayClick={handleDayClick}
                        />
                    }

                </div>
            </DialogContent>
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CalenderViewFilter);
