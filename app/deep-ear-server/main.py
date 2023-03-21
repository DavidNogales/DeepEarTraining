import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel

class User(BaseModel):
    first_name: str
    last_name: str = None
    age: int

app = FastAPI()

@app.get("/data/")
async def get_data():
 return {"data":"This is important data!"}


@app.get("/greeting/")
async def root():
 return {"greeting":"Hello world"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

