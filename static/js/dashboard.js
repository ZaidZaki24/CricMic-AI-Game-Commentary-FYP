const data = null;
const xhr = new XMLHttpRequest();

// Remove this if not required to avoid CORS issues
// xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText); // Log the response for debugging
        try {
            const matchData = JSON.parse(this.responseText); // Parse the JSON data
            displayNews(matchData); // Call the function to display match data
        } catch (error) {
            console.error("Failed to parse JSON response:", error);
        }
    }
});

xhr.open('GET', 'https://api.cricapi.com/v1/currentMatches?apikey=04d8ec67-2d06-423e-ad70-44d8b905ec25&offset=0');
xhr.send(data);

// Function to display the match data in the HTML
function displayNews(matchData) {
    // Assuming you have a <div id="news-container"></div> in your HTML
    const newsContainer = document.getElementById('news-container');
    if (newsContainer && matchData && matchData.data) {
        // Clear any existing content
        newsContainer.innerHTML = '';

        // Loop through match data and append it to the news container
        matchData.data.forEach(match => {
            const matchItem = document.createElement('div');
            matchItem.className = 'match-item mb-3';

            // Check for match information properties
            const matchName = match.name || "Match";
            const matchStatus = match.status || "Status unknown";
            const matchVenue = match.venue || "Venue not available";
            const team1 = match.teams && match.teams[0] ? match.teams[0].name : "Team 1";
            const team2 = match.teams && match.teams[1] ? match.teams[1].name : "Team 2";

            // Display match information
            matchItem.innerHTML = `
                <h5>${matchName}</h5>
                <p>Status: ${matchStatus}</p>
                <p>Venue: ${matchVenue}</p>
                <p>Teams: ${team1} vs ${team2}</p>
            `;

            newsContainer.appendChild(matchItem);
        });
    } else {
        newsContainer.innerHTML = '<p>No match data available</p>';
    }
}
