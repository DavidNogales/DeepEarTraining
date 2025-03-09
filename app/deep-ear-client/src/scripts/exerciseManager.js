const base_url = import.meta.env.PUBLIC_API_URL;
console.log("base_URL:");
console.log(base_url);
const url = base_url+"/exercises"
console.log("Hi! local script loaded!")
import {runQuery} from "./db"

async function getExercise(data) {
    const response = await axios.post(`${url}/`,data);
    const lastExercise = response.data.body;
    return lastExercise;
  }

  export function generateLocalExercise(melody_metadata) {

    return runQuery()
    .then((duckdb_res) => {
      console.log("res duckdb:", duckdb_res);

      if (Array.isArray(duckdb_res) && duckdb_res.length > 0) {
        return duckdb_res[0]; // Return the first item
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
