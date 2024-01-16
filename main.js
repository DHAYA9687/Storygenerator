function generateRandomStory() {
        // Arrays containing different story elements
        const characters = ['Alice', 'Bob', 'Charlie', 'David'];
        const places = ['a forest', 'a city', 'a beach', 'a mountain'];
        const actions = ['found a treasure', 'discovered a secret', 'solved a mystery', 'went on an adventure'];

        // Generate a random story
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
        const randomPlace = places[Math.floor(Math.random() * places.length)];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];

        const story = `${randomCharacter} was in ${randomPlace} and ${randomAction}.`;

        // Display the story on the webpage
        document.getElementById('story').innerText = story;
}
