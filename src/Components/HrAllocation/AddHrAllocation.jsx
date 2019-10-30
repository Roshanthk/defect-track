import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  }
}));

export default function AddHRAllocationForm() {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <div>
      <form className={classes.container} autoComplete="off">
        <Grid container justify="flex-start">
          <FormControl
            required
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel ref={inputLabel} htmlFor="defect-severity">
              Select Project
            </InputLabel>
            <Select labelWidth={labelWidth}></Select>
          </FormControl>
        </Grid>
      </form>
    </div>
  );
}
