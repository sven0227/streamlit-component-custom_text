import React, { useEffect, useState } from "react";
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";
import CustomText from "./CustomText";

const Main = (props: ComponentProps) => {
  const { api, text_size, refresh_sec, refresh_cutoff_sec } = props.args;

  useEffect(() => Streamlit.setFrameHeight());

  return (
    <>
      <h3>Vorol's Custom Text Component</h3>
      <CustomText
        api={api}
        text_size={text_size}
        refresh_sec={refresh_sec}
        refresh_cutoff_sec={refresh_cutoff_sec}
      />
    </>
  );
};

export default withStreamlitConnection(Main);
