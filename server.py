from fastapi import FastAPI
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/get-text/1")
async def read_data():
    return JSONResponse(content="Text from fastAPI-1")

@app.get("/get-text/2")
async def read_data():
    return JSONResponse(content="Text from fastAPI-2")
# uvicorn server:app --reload