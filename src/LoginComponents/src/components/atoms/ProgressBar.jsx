import { makeStyles } from '@material-ui/core';
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    height: "0.625rem",
  },
  colorPrimary: {
    /* icon grey */
    backgroundColor: "#c5c7cd",
    /* icon grey */
    border: "1px solid #c5c7cd",
    boxSizing: "border-box",
    borderRadius: "1rem",
  },
  bar: {
    /* failed ? red error : Green Q */
    background: props => props.failed ? "#ff0000" : "#27b585",
    /* icon grey */
    border: "1px solid #c5c7cd",
    boxSizing: "border-box",
    borderRadius: "1rem",
  },
});

const ProgressBar = ({ children, ...props }) => {
  const { root, colorPrimary, bar } = useStyles(props);
  const { className, value } = props;

  return (
    <div className={className}>
      <LinearProgress variant="determinate" value={value} classes={{ root, colorPrimary, bar }} />
    </div>
  )
};

export default ProgressBar;
