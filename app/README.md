# DeepEarTraining App

## Objective

Provides a tool capable of generating melodies given a pitch, meter and mode, the app provides two views:

- **teacher view**: Provides an editor for the generated exercise.
- **student view**: Provides the environment for evaluating the student's input.

## Stack Description

- **AstroJS**: For generating the static website.
- **Tailwind**: For managing the responsiveness of the elements in the client.
- **abcjs**: Library for managing ABC notation based songs.
- **FastAPI**: For generating the API endpoints for the server.
- **Vercel** and **Render**: For deploying the client and the server.

## Key Features

- Music Sheet visualizer.
- ABC editor.
- Exercise player.
- Exercise evaluator base on Fuzzy Matching.
- Exercise generator (Currently only a static DB with exercises).
