# CricMic – AI Cricket Game Commentary

CricMic is an AI system that generates near-real-time, context-aware commentary for online cricket games. Instead of repeating preset lines, it looks at what is happening on screen (which shot was played) and produces fresh commentary, which can be spoken in a personalised voice.

This was a group Final Year Project (FYP-I and FYP-II) at FAST-NUCES Islamabad, Aug 2024 – May 2025.

## How it works (pipeline)

1. **Video input** – the user uploads a gameplay or match clip through the web interface.
2. **Shot recognition** – human pose keypoints are extracted from each frame and a classifier predicts the cricket shot (for example drive, pull, cut).
3. **Commentary generation** – the predicted shot and match context are turned into commentary text.
4. **Personalised voice** – the commentary is spoken with a voice cloned using F5-TTS.

## What is in this repository

This repository holds the **web application (front end and upload service)** and the project's reference material.

| Path | What it is |
|---|---|
| `run.py` | Flask application. Routes: GET /login, GET /dashboard, GET /generate, POST /upload-video. |
| `config.py` | Application configuration (currently empty). |
| `templates/` | HTML pages: dashboard.html, generate.html. |
| `static/` | style.css, generate.css, Images/, js/ for the front end. |
| `Directory.txt` | The planned Flask project layout. |

### run.py in detail

- Creates a Flask app and makes sure static/uploads/ exists.
- POST /upload-video accepts a file in the form field videoFile, rejects requests with no file or an empty filename, and saves the video to static/uploads/.
- GET /login, GET /dashboard and GET /generate render the matching HTML templates.
- Runs on 0.0.0.0:5000 in debug mode.

## Run the web app

git clone https://github.com/ZaidZaki24/CricMic-AI-Game-Commentary-FYP.git
cd CricMic-AI-Game-Commentary-FYP
python3 -m venv venv
source venv/bin/activate
pip install flask
python run.py

## My contribution

- Shot classification: pose keypoints and a classifier for cricket shots.
- Personalised commentary: commentary text and a cloned voice using F5-TTS.

The model and voice code for these parts is **not included in this repository**; it lives in separate working files. This repository covers the web interface and the upload service.

## Team

Group project. The original repository is by [rafaykek](https://github.com/rafaykek/CricMic-AI-Game-Commentary). This copy is kept under [ZaidZaki24](https://github.com/ZaidZaki24).

## Status

Academic prototype from a final year project. Login is a placeholder page with no authentication, and the upload route has no file type or size checks, so it is not production ready.
