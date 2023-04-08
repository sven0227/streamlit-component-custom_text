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


@app.get("/get-text")
async def read_data():
    return JSONResponse(content="Text form fastAPI")
# uvicorn server:app --reload