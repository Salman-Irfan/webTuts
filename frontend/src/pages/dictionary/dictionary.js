const baseurl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("word-info");
const sound = document.getElementById("sound");
const btn = document.getElementById("inputbtn");

const handleDictionarySynonyms = async () => {

    let inpWord = document.getElementById("input-word").value;
    console.log("input word: ", inpWord);

    try {
        const response = await axios.get(`${baseurl}${inpWord}`);
        const data = response.data; // Axios automatically parses JSON

        result.innerHTML = `
            <div class="flex justify-between items-center">
                <h1 id="word" class="text-xl">${inpWord}</h1>
                <button id="audioBtn">
                    <i id="audio-icon" class="fa-solid fa-play text-2xl cursor-pointer"></i>
                </button>
            </div>
            <div class="flex font-light gap-4 text-indigo-600 mt-4">
                <p id="pos">${data[0].meanings[0].partOfSpeech}</p>
                <p id="phonetic">/${data[0].phonetic || 'N/A'}/</p>
            </div>
            <p id="meaning" class="mt-4">${data[0].meanings[0].definitions[0].definition}</p>
            <p id="example" class="ml-8 mt-3 border-l-4 border-l-sky-500 pl-4">
                Synonyms: ${data[0].meanings[0].synonyms?.join(", ") || "No Synonyms available."}
            </p>
        `;
        const audioBtn = document.getElementById("audioBtn")
        console.log(audioBtn)
        // Handle multiple audio sources
        let audioSrc = data[0].phonetics[1]?.audio || data[0].phonetics[0]?.audio;
        console.log(audioSrc);
        if (audioSrc) {
            sound.setAttribute("src", `https:${audioSrc}`);
        }
        audioBtn.addEventListener("click", () => {
            console.log(`audio btn got clicked `)
            const textToSpeech = new SpeechSynthesisUtterance(inpWord)
            window.speechSynthesis.speak(textToSpeech)
        })

    } catch (error) {
        console.log("Error fetching data: ", error);
        result.innerHTML = "No such word found!";
    }
}

btn.addEventListener("click", handleDictionarySynonyms);

