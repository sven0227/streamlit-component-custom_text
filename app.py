import streamlit as st
from streamlit_custom_text import st_custom_text

st.title("Testing Streamlit custom components")

# Add Streamlit widgets to define the parameters for the CustomSlider
label = st.sidebar.text_input('Label', 'Hello world')
min_value, max_value = st.sidebar.slider("Range slider", 0, 100, (0, 50))

# Pass the parameters inside the wrapper function
v1 = st_custom_text(api="http://localhost:8000/get-text/1")
st.write(v1)
v2 = st_custom_text(api="http://localhost:8000/get-text/2", text_size = 17, refresh_sec =5,refresh_cutoff_sec =300)
st.write(v2)
