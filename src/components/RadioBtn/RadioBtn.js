import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./RadioBtn.css";
import { useGlobalContext } from "../../context";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  radio: {
    color: "#fff",
    marginLeft: "1rem",
  },
  checked: {
    "&$checked": {
      color: "#fff",
    },
  },
});

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("female");
  const { setType } = useGlobalContext();
  const classes = useStyles();
  const handleChange = (event) => {
    setValue(event.target.value);
    setType(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel
        component="legend"
        style={{ color: "white", textAlign: "left", marginLeft: "1rem" }}
      >
        TYPE
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value=""
          control={
            <Radio
              color="primary"
              classes={{
                colorPrimary: classes.radio,
                checked: classes.checked,
              }}
            />
          }
          label="Any"
        />
        <FormControlLabel
          value="movie"
          control={
            <Radio
              color="primary"
              classes={{
                colorPrimary: classes.radio,
                checked: classes.checked,
              }}
            />
          }
          label="Movie"
        />
        <FormControlLabel
          value="series"
          control={
            <Radio
              color="primary"
              classes={{
                colorPrimary: classes.radio,
                checked: classes.checked,
              }}
            />
          }
          label="Series"
        />
        <FormControlLabel
          value="episode"
          control={
            <Radio
              color="primary"
              classes={{
                colorPrimary: classes.radio,
                checked: classes.checked,
              }}
            />
          }
          label="Episodes"
        />
      </RadioGroup>
    </FormControl>
  );
}
