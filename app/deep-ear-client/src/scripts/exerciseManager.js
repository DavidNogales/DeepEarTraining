import axios from "axios";

const base_url = import.meta.env.API_URL;
console.log("base_URL:");
console.log(base_url);
const url = base_url+"/exercises"
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
    console.log(typeof(lastExercise));
    return lastExercise
}