let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-gb"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }
}
//window.addEventListener('load',()=>{
  //  wishMe()
//})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
let currentIndex=event.resultIndex
let transcript=event.results[currentIndex][0].transcript
content.innerText=transcript
takecommand(transcript.toLowerCas())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takecommand(message){
    btn.style.display="flex"
    voice.style.display="none"
 if(message.includes("hello"))
        {
        speak("hello sir,what can i help you?")
    }
    if(message.includes("hey"))
        {
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Arup Sir")
    }
    else if (message.includes("open YouTube")){
        speek("opening YouTube...")
        window.open("https://youtube.com","-blank")
    }
    else if (message.includes("Google")){
        speek("opening Google...")
        window.open("https://google.com","-blank")
    }
    else if (message.includes("Facebook")){
        speek("opening Facebook...")
        window.open("https://facebook.com","-blank")
    }
    else if (message.includes("Instagram")){
        speek("opening Google...")
        window.open("https://instagram.com","-blank")
    }
    else if (message.includes("Calculator")){
        speek("opening Calculator...")
        window.open("calculator://")
    }
    else if (message.includes("WhatsApp")){
        speek("opening WhatsApp...")
        window.open("https://whatsapp.com","-blank")
    }
    else if (message.includes("Time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric",second:"numeric"})
        speak(time)
    }
    else if (message.includes("Date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date)
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("ssheli","")||message.replace("shali","")
        speak(finalText)
        window.open('https://www.google.com/search?q=${message.replace("sheli","")}',"-blank")
    }
}