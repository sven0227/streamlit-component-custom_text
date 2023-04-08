import streamlit.components.v1 as components

_component_func = components.declare_component(
    "custom_slider",
    url="http://localhost:3001",
)

# Add label, min and max as input arguments of the wrapped function
# Pass them to _component_func which will deliver them to the frontend part


def st_custom_text(api, text_size = 10, refresh_sec = 1, refresh_cutoff_sec = 10):
    component_value = _component_func(
        api=api,
        text_size= text_size,
        refresh_sec = refresh_sec,
        refresh_cutoff_sec = refresh_cutoff_sec,
    )
    return component_value
