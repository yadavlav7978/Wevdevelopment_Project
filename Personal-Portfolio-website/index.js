// ------------------------ circular progress bar--------------------------------



for (let i = 1; i < 4; i++) {

  let circle = document.querySelector(`.circle${i}`);
  let text = document.querySelector(`.text${i}`)
  let value = document.querySelector(`.value${i}`)

  let start = 0;
  let end = value.innerText;

  let progres = setInterval(() => {
    start++;
    if (start == end) {
      clearInterval(progres);
    }
    value.innerText = `${start}%`;
    circle.style.background = `conic-gradient(
        #59a61d ${start * 3.6}deg,                
        #c8e9ae ${start * 3.6}deg              
      )`;
    //starting color ,starting angle
    //ending color ,ending angle

  }, 50)
}

// ---------- javascript for google form

const scriptURL = 'https://script.google.com/macros/s/AKfycbxuFY9M0ebMkk-9MCF0qaaaLASOu4WPKUNbzQrfrip-ZhvBbVBaO_nHlouyDRcbQWAz/exec'
const form = document.forms['submit-to-google-sheet']

const submit_msg = document.getElementById('submit-msg');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      submit_msg.innerHTML = "Message sent succesfully...";

      setTimeout(function () {
        submit_msg.innerHTML = "";
      }, 5000)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})




