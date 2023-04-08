import React, { useState, useEffect, FC } from 'react';
import axios from "axios"
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";

type Props = {
  api: string,
  text_size?: number,
  refresh_sec?: number,
  refresh_cutoff_sec?: number,
}

const defaultProps: Props = {
  api: "",
  text_size: 10,
  refresh_sec: 1,
  refresh_cutoff_sec: 10
}

const CustomText: FC<Props> = (props: Props = defaultProps) => {
  const { api, text_size = 10, refresh_sec = 1, refresh_cutoff_sec = 10 } = props;
  const [rowData, setRowData] = useState([]);
  useEffect(() => Streamlit.setFrameHeight());

  useEffect(() => {
    console.log(props);
    const fetchData = async () => {
      axios.get(api).then((response) => {
        setRowData(response.data);
        Streamlit.setComponentValue(response.data)
        console.log(response.data);
      });
    };

    fetchData();
    const interval = setInterval(fetchData, refresh_sec * 1000);
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, refresh_cutoff_sec * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    }
  }, []);

  return (
    <div
      style={{
        fontSize: text_size
      }}
    >
      {rowData}
    </div>
  );
};

export default CustomText;
