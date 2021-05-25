import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
    color: "#fff",
  },
  colorPrimary: {
    color: "green",
  },

  fontAlign: {
    textAlign: "start",
    marginTop: -3,
    marginRight: "20px",
  },
  rail: {
    height: 8,
    color: "#fff",
    opacity: "100",
    borderRadius: 12,
  },
  track: {
    height: 8,
    color: "#bbb",
  },
  thumb: {
    color: "#fff",
    height: 20,
    width: 20,
  },
  valueLabel: {
    color: "#aaa",
    marginLeft: 7,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([1990, 2021]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography
        id="range-slider"
        // gutterBottom
        classes={{ root: classes.fontAlign }}
      >
        YEAR
      </Typography>
      <Slider
        classes={{
          colorPrimary: classes.colorPrimary,
          rail: classes.rail,
          track: classes.track,
          thumb: classes.thumb,
          valueLabel: classes.valueLabel,
        }}
        value={value}
        min={1970}
        max={2021}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
