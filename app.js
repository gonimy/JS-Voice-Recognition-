const talk = document.querySelector(".talk");
const content = document.querySelector(".content");

const speetchRecognition =
  window.speetchRecognition || window.webkitSpeechRecognition;

const recognition = new speetchRecognition();

const replies = [
  "don`t be sad",
  "everything is going to pass ",
  "its okay to be sad",
];

recognition.onstart = () => {
  console.log("voice is activated and you can talk to Microphone");
};

recognition.onresult = (e) => {
  const curr = e.resultIndex;
  const script = e.results[curr][0].transcript;
  console.log(script);
  content.textContent = script;
  reachOutLoud(script);
};

talk.addEventListener("click", () => {
  console.log("working");
  recognition.start();
});

function reachOutLoud(msg) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "i did not get what you said";
  if (msg.includes("not happy")||msg.includes("sad")) {
    console.log("working");
    const reply = replies[Math.floor(Math.random() * 2)];
    speech.text = reply;
  }
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
