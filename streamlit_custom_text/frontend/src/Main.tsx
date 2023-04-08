import React, { useEffect, useState } from "react";
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";
import { Slider } from "baseui/slider";
import { setTimeout } from "timers";
import axios from "axios";
import Aggrid from "./CustomText";
import CustomText from "./CustomText";

const Main = (props: ComponentProps) => {
  /**
   * Destructuring JSON objects is a good habit.
   * This will look for label, minValue and maxValue keys
   * to store them in separate variables.
   */
  const { label, minValue, maxValue } = props.args;
  const { api, text_size, size, height, hoverText } = props.args;

  const [value, setValue] = useState([10]);

  useEffect(() => Streamlit.setFrameHeight());
  // Add a label and pass min/max variables to the baseui Slider
  return (
    <>
      <h3>{label}</h3>
      <Aggrid
        api={api}
        text_size={text_size}
        size={size}
        height={height}
        hoverText={hoverText}
      />
      {/* <Slider
        value={value}
        onChange={({ value }) => value && setValue(value)}
        onFinalChange={({ value }) => console.log(value)}
        min={minValue}
        max={maxValue}
      /> */}
    </>
  );
};

export default withStreamlitConnection(Main);
