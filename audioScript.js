
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        const synth = window.speechSynthesis;
        const recognition = new SpeechRecognition();
        var recognizing = false;

        
        const icon = document.querySelector('i.fa.fa-microphone');
        let paragraph = document.createElement('p');
        console.log(paragraph);
        let container = document.querySelector('.form-control');
        console.log(container);
        container.appendChild(paragraph);
        const sound = document.querySelector('.sound');
        var message = "";
        console.log("In here");
        icon.addEventListener('click', () => {
          sound.play();
          console.log("In here eventListner");
          dictate();
        });
        
        const dictate = () => {
          recognition.start();
          recognizing = true;
          if(recognizing){
          recognition.onresult = (event) => {
            const speechToText = event.results[0][0].transcript;
            
            paragraph.textContent = speechToText;
            message = speechToText;
          }
          recognizing=false;
          }
        }
        
        
        
