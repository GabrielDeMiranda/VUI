const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Cifar";
      texts.appendChild(p);
    }
    if (text.includes("open novel interaction lab class")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Novel Interaction lab class ";
      texts.appendChild(p);
      console.log("opening Novel interaction's Lab Class, check your video and audio settings!");
        window.open("https://www.play.mdx.ac.uk/channel/Novel%2BInteraction%2BTechnoloy%2BLab%253A%2BMonday%2Band%2BFriday/183405661");
      }
       if (text.includes("open novel interaction lecture class")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Novel Interaction lecture class ";
      texts.appendChild(p);
      console.log("opening Novel interaction's lecture Class, check your video and audio settings!");
        window.open("https://www.play.mdx.ac.uk/channel/Novel%2BInteraction%2BTechnology%2BMonday%2BLecture/183378131");
       
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
