import { Skeleton } from "@material-ui/lab";
import { withStyles } from "@material-ui/styles";

export const StyledSkeleton = withStyles((theme) => ({
    root: {
      margin: "1vh 0",
    },
  }))(Skeleton);