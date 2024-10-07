from flask import Flask, render_template, request, redirect, url_for
import os

app = Flask(__name__)

# Define the folder where uploaded videos will be saved

UPLOAD_FOLDER = 'static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload folder exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload-video', methods=['POST'])
def upload_video():
    if 'videoFile' not in request.files:
        return "No file part in the request", 400
    
    video_file = request.files['videoFile']
    
    if video_file.filename == '':
        return "No file selected", 400

    # Save the video to the UPLOAD_FOLDER
    video_path = os.path.join(app.config['UPLOAD_FOLDER'], video_file.filename)
    video_file.save(video_path)
    
    return f"Video uploaded successfully: {video_file.filename}", 200
# Login page route
@app.route("/dashboard", methods=["GET"])
def dashboard():
    # Renders the 'login.html' file from the 'templates' folder
    return render_template("dashboard.html", message='')
# Generate page route
@app.route("/generate", methods=["GET"])
def generate():
    return render_template("generate.html", message='')

# Login page route
@app.route("/login", methods=["GET"])
def login():
    # Renders the 'login.html' file from the 'templates' folder
    return render_template("login.html", message='')

if __name__ == "__main__":
    # Run the Flask app
    app.run(debug=True, host="0.0.0.0", port=5000)
