import React, { useState, useEffect } from 'react';
import axios from "axios"
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";

type Props = {
  api: string,
  text_size: number,
  size: number,
  height: number,
  hoverText: number,
}

const CustomText = (props: Props) => {
  const { api, text_size, size, height, hoverText } = props;
  const [rowData, setRowData] = useState([]);
  useEffect(() => Streamlit.setFrameHeight(5000));

  useEffect(() => {
    const fetchData = async () => {
      axios.get("http://localhost:8000/get-text").then((response) => {
        setRowData(response.data);
        console.log('response.data :>> ', response.data);
      });
    };

    fetchData();
    const interval = setInterval(fetchData, 1000);
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval); clearTimeout(timeout);
    }
  }, []);

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: '500px',
        width: '600px',
      }}
    >
      {rowData}
    </div>
  );
};

export default CustomText;
