const base_url = import.meta.env.PUBLIC_API_URL;
console.log("base_URL:");
console.log(base_url);
const url = base_url+"/exercises"
console.log("Hi! local script loaded!")

async function getExercise(data) {
    const response = await axios.post(`${url}/`,data);
    const lastExercise = response.data.body;
    return lastExercise;
  }
  
export async function generateExercise(selectedValues) {
    const postSchema = {
      "header": "",
      "body": "string",
      "meter": selectedValues.meter,
      "mode": selectedValues.mode,
      "key": selectedValues.key
    }
    const lastExercise = await getExercise(postSchema);
    //abcjs.renderAbc(divID, abcNewString, visualOptions);
    return lastExercise
}
