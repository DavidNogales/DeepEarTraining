import * as duckdb from "https://cdn.jsdelivr.net/npm/@duckdb/duckdb-wasm@latest/+esm";

let db;

async function initDuckDB() {
    try {
        const JSDELIVR_BUNDLES = duckdb.getJsDelivrBundles();
        const bundle = await duckdb.selectBundle(JSDELIVR_BUNDLES);

        const worker_url = URL.createObjectURL(
            new Blob([`importScripts("${bundle.mainWorker}");`], { type: "text/javascript" })
        );

        const worker = new Worker(worker_url);
        const logger = new duckdb.ConsoleLogger();
        db = new duckdb.AsyncDuckDB(logger, worker);

        await db.instantiate(bundle.mainModule, bundle.pthreadWorker);
        URL.revokeObjectURL(worker_url);
        console.log("DuckDB-Wasm initialized successfully.");

        await loadLocalStorageData();

    } catch (error) {
        console.error("Error initializing DuckDB-Wasm:", error);
    }
}

async function loadLocalStorageData() {
    try {
        if (!db) {
            console.error("DuckDB-Wasm is not initialized");
            return;
        }

        const melodiesJSON = sessionStorage.getItem("melodies");
        if (!melodiesJSON) {
            console.error("No melodies found in localStorage.");
            return;
        }

        const conn = await db.connect();

        // Create an in-memory DuckDB file
        await db.registerFileBuffer("melodies.json", new TextEncoder().encode(melodiesJSON));

        // Create table from JSON
        await conn.query(`CREATE TABLE melodies AS SELECT * FROM read_json_auto('melodies.json')`);

        console.log("Melodies successfully loaded from localStorage into DuckDB.");
        await conn.close();

    } catch (error) {
        console.error("Error loading localStorage data into DuckDB:", error);
    }
}




export async function runQuery(key, meter, mode) {
    
    await new Promise((resolve) => setTimeout(resolve, 5000));
    try {
        if (!db) {
            console.error("DuckDB-Wasm is not initialized");
            return [];
        }

        const conn = await db.connect();
        console.log("Database connection established");

        // Query the newly created table
        const result = await conn.query(`SELECT * FROM melodies WHERE key='${key}' AND meter='${meter}' AND mode='${mode}'`);

        // Convert to JSON format
        const songs = result.toArray().map((row) => row.toJSON());
	const song = songs[Math.floor(Math.random()*songs.length)]
        await conn.close();
        console.log("Database connection closed");

        return song; // Returns actual data

    } catch (error) {
        console.error("Error querying data:", error);
        return [];
    }
}


initDuckDB();
