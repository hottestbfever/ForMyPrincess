// Array of sweet messages Lorenzo has said to Nox
const sweetMessages = [
    "Please don't ever feel like you have to be perfect for me, because in my eyes you already are. I love you, Nox, just as you are.",
    "I know overthinking is hard to control, but I'm right here...",
    "baby im in fucking love with you and its bad..",
    "I wear all these rings yet none of them can even amount to the one we both will be wearing one day.",
    "your so perfect because you're mine forever.",
    "I'm always thankful such a beautiful girl came into my life and made it a million times better..",
    "I would love to just wake up every morning and stare into your eyes and tell you all the reasons I love you so much.",
    "I know, it's already real enough in my heart..",
    "A princess deserves a knight...",
    "What she didn’t know was that every moment with her felt like magic...",
    "Your laughter is my favorite sound, and it always brightens my day.",
    "Whenever I'm with you, time stands still, and the world fades away.",
    "You are the reason I believe in love."
];

// Nox's unique responses
const noxResponses = [
    ["\"Smile back sweetly\"", "Hug him tightly", "Tell him he's perfect"],
    ["Laugh and say 'I love you more'", "Kiss his cheek", "Tell him you're lucky to have him"],
    ["Wink at him playfully", "Tease him with a smirk", "Hold his hand tightly"],
    ["Whisper 'You're my favorite person'", "Giggle and give him a soft kiss", "Tell him he's your hero"],
    ["Give him a playful nudge", "Sigh dreamily", "Look into his eyes"],
    ["Pretend to be shy", "Blush and look away", "Lean in closer"],
    ["Smile softly", "Gaze at him lovingly", "Share a secret smile"],
    ["Whisper something sweet", "Playfully poke him", "Laugh and cuddle closer"],
    ["Surprise him with a peck", "Hold his gaze", "Whisper your thoughts"],
    ["Give him a compliment", "Smile brightly", "Say how much he means to you"],
    ["Playfully roll your eyes", "Laugh out loud", "Hold his hand tighter"],
    ["Kiss him lightly on the cheek", "Snuggle into him", "Say 'You complete me'"],
    ["Wrap your arms around him", "Say he's your everything", "Gently tease him"]
];

// Lorenzo's varied reactions
const lorenzoReactions = [
    "Lorenzo smiles warmly and tears up from your sweet words.",
    "Lorenzo feels sappy and overwhelmed with love for you.",
    "Lorenzo blushes and holds you tighter, feeling so lucky.",
    "Lorenzo looks into your eyes and whispers, You're my everything.",
    "Lorenzo grins and feels his heart race.",
    "Lorenzo chuckles and pulls you closer.",
    "Lorenzo gazes at you with admiration.",
    "Lorenzo winks and leans in for a kiss.",
    "Lorenzo holds you close, feeling protective.",
    "Lorenzo smiles and laughs, feeling so happy.",
    "Lorenzo's heart swells with affection.",
    "Lorenzo beams with pride at your words.",
    "Lorenzo wraps you in a warm embrace."
];

// Descriptors based on Nox's response
const responseDescriptors = {
    "Smile back sweetly": "loving",
    "Hug him tightly": "caring",
    "Tell him he's perfect": "nice",
    "Laugh and say 'I love you more'": "loving",
    "Kiss his cheek": "affectionate",
    "Tell him you're lucky to have him": "thoughtful",
    "Wink at him playfully": "playful",
    "Tease him with a smirk": "flirty",
    "Hold his hand tightly": "intimate",
    "Whisper 'You're my favorite person'": "sweet",
    "Giggle and give him a soft kiss": "loving",
    "Tell him he's your hero": "admiring",
    "Give him a playful nudge": "playful",
    "Sigh dreamily": "romantic",
    "Look into his eyes": "intimate",
    "Pretend to be shy": "cute",
    "Blush and look away": "adorable",
    "Lean in closer": "intimate",
    "Smile softly": "sweet",
    "Gaze at him lovingly": "loving",
    "Share a secret smile": "bonding",
    "Whisper something sweet": "romantic",
    "Playfully poke him": "flirty",
    "Laugh and cuddle closer": "loving",
    "Surprise him with a peck": "affectionate",
    "Hold his gaze": "intimate",
    "Whisper your thoughts": "thoughtful",
    "Give him a compliment": "sweet",
    "Smile brightly": "happy",
    "Say how much he means to you": "loving",
    "Playfully roll your eyes": "playful",
    "Laugh out loud": "joyful",
    "Hold his hand tighter": "caring",
    "Kiss him lightly on the cheek": "affectionate",
    "Snuggle into him": "loving",
    "Say 'You complete me'": "deep",
    "Wrap your arms around him": "caring",
    "Say he's your everything": "loving",
    "Gently tease him": "playful"
};

let currentQuestion = 0; // Track the current question

// Handle next question scene
function nextScene(choice) {
    const sceneText = document.getElementById('scene');
    const buttons = document.getElementById('buttons');
    const nextButton = document.getElementById('next');
    const questionCounter = document.getElementById('question-counter');

    // Play the ding sound
    const dingSound = document.getElementById('ding-sound');
    dingSound.play();

    // Show sweet message and Lorenzo's response
    const noxResponse = noxResponses[currentQuestion][choice];
    const descriptor = responseDescriptors[noxResponses[currentQuestion][choice].replace(/"/g, '')] || "thoughtful";

    sceneText.innerText = `Nox: ${noxResponse}\n\nLorenzo: ${lorenzoReactions[currentQuestion]}\n\nLorenzo reminds you of something ${descriptor} he's said to you before: "${sweetMessages[currentQuestion]}"`;

    // Update question counter
    questionCounter.innerText = `Question ${currentQuestion + 1}/13`;

    // Hide buttons and show next button
    buttons.style.display = 'none';
    nextButton.style.display = 'block';
}

// Handle next question
function nextQuestion() {
    const sceneText = document.getElementById('scene');
    const buttons = document.getElementById('buttons');
    const nextButton = document.getElementById('next');
    const questionCounter = document.getElementById('question-counter');

    // Increment question index
    currentQuestion++;

    // If there are more questions, display next options
    if (currentQuestion < sweetMessages.length) {
        sceneText.innerText = `Lorenzo smiles at Nox again. What do you do?`;

        // Add Nox's unique responses
        buttons.innerHTML = '';
        noxResponses[currentQuestion].forEach((response, index) => {
            const button = document.createElement('button');
            button.innerText = response;
            button.onclick = () => nextScene(index);
            buttons.appendChild(button);
        });

        buttons.style.display = 'block';
        nextButton.style.display = 'none';
    } else {
        // End of the journey
        sceneText.innerText = "The fantasy continues with love and laughter. Thank you for playing!";
        buttons.style.display = 'none';
        nextButton.style.display = 'none';
    }
}

// Initialize the first scene
nextQuestion();
