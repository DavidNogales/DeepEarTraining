import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from songGenerator import SongGenerator
abc_song = """X:1
T:Speed the Plough
M:4/4
C:Trad.
K:G
|:GABc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|
  GABc dedB|dedB dedB|c2ec B2dB|A2F2 G4:|
|:g2gf gdBd|g2f2 e2d2|c2ec B2dB|c2A2 A2df|
  g2gf g2Bd|g2f2 e2d2|c2ec B2dB|A2F2 G4:|
    """

my_song_generator = SongGenerator() 

class Exercise(BaseModel):
    header: str
    body: str = None
    meter: str = None
    mode: str = None
    key: str = None
    #age: int

example_exercises = {
   0: Exercise(header="Exercise",body=abc_song)
}
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/exercises/")
async def create_exercise(exercise: Exercise):
    mode = exercise.mode
    meter = exercise.meter
    key = exercise.key
    key = key if mode=='Major' else key+'m'
    #exercise.body = example_exercises[0].body
    exercise.body = my_song_generator.get_random_song(song_key=key,song_meter=meter)
    return exercise

@app.get("/data/")
async def get_data():
 return {"data":"This is important data!"}


@app.get("/")
async def root():
 return {"greeting":"Hello world",
         "data":example_exercises
         }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

