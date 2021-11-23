import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  customerIdSelect:{
  fontFamily: "gothambook",
  appearance: "none",
  width: "100%",
  backgroundColor: "#f4f4f4",
  fontSize: "0.875rem",
  color: "#61677C",
  textShadow: "1px 1px 0 #FFF",
  padding: "0.5em !important",
  outline: "none",
  border: "none",
  borderRadius: "0.625rem",
  boxShadow: "inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF",
  transition: "all 0.2s ease-in-out",
  "&:focus":{
    borderRadius: "0.75rem",
    boxShadow: "inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF"

  }
  },
  endAdornment: {
    paddingRight: "1vh"
  }
}));

const AutoComplete = (props) => {
  const { customerIdSelect, endAdornment } = useStyles();
  const { options, value, onChange, inputValue, onInputChange } = props;

  return (
    <Autocomplete
      id="customer-id-select"
      classes={{ inputRoot: customerIdSelect, endAdornment: endAdornment }}
      freeSolo
      value={value}
      onChange={onChange}
      inputValue={inputValue}
      onInputChange={onInputChange}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
         // className="input"
          placeholder="Select Customer ID"
         variant="standard"
          autoFocus
          InputProps={{ ...params.InputProps, type: 'search', disableUnderline: true }}
          // style={{minHeight: "1.1876rem"}}
        />
      )}
    />
  )
}

export default AutoComplete;