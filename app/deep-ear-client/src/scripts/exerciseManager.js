import axios from "axios";

const url = "http://localhost:8000/exercises"
console.log("Hi! local script loaded!")

async function getExercise(data) {
    const response = await axios.post(`${url}/`,data);
    const lastExercise = response.data.body;
    return lastExercise;
  }
  
export async function generateExercise(exerciseHeader) {
    const postSchema = {
        "header": exerciseHeader,
        "body": "string"
      }
    const lastExercise = await getExercise(postSchema);
    //abcjs.renderAbc(divID, abcNewString, visualOptions);
    console.log(lastExercise);
}