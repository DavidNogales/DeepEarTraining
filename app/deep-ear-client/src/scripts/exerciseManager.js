const base_url = import.meta.env.PUBLIC_API_URL;
console.log(base_url);
const url = base_url+"/exercises"
import {runQuery} from "./db"

async function getExercise(data) {
    const response = await axios.post(`${url}/`,data);
    const lastExercise = response.data.body;
    return lastExercise;
  }

  export function generateLocalExercise(melody_metadata) {
    let key = melody_metadata.key
    let mode = melody_metadata.mode
    let meter = melody_metadata.meter
    return runQuery(key, meter, mode)
    .then((song_response) => {
      if (song_response) {
        return song_response.body; // Return the first item
      } else {
        console.warn("DuckDB result is empty.");
        return null;
      }
    })
    .catch((error) => {
      console.error("Error fetching data from DuckDB:", error);
      return null;
    });
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
