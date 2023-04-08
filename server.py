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


@app.get("/data")
async def read_data():
    df = pd.read_pickle("data")
    print(df.to_json())
    data = df.to_dict(orient="records")
    return JSONResponse(content=data)
# uvicorn server:app --reload