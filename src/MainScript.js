
export default function script() {
    
    window.$(document).ready(function() {
            window.$('.venobox').venobox();

          const slider = window.tns({ 
            "container": "#base",
             "items": 3,
             "controlsContainer": "#customize-controls",
              "navContainer": "#customize-thumbnails",
            "navAsThumbnails": true,
             "autoplay": true,
           "autoplayTimeout": 1000,
             "autoplayButton": "#customize-toggle",
             "swipeAngle": false,
            "speed": 400
                });
          });

 document.querySelector('.php-email-form').addEventListener('submit',(event) => {
  const  validateEmail = (email) =>  {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  const name = document.forms["myForm"]["name"].value;
  const email = document.forms["myForm"]["email"].value;
  const message = document.forms["myForm"]["message"].value;
  const errArr = [];
 
  if (name === "") {
    errArr.push('nameErr');
  }
  if (!validateEmail(email)) {
    errArr.push('emailErr');
  }
  if (message === "") {
    errArr.push('messageErr');
  }
 if(errArr.length === 0){
  const success = document.querySelector('#success')
  const nameErr = document.querySelector('#nameErr')
  const emailErr = document.querySelector('#emailErr')
  const messageErr = document.querySelector('#messageErr')
  success.classList.remove('d-none');
  success.classList.add('d-block');
  nameErr.classList.add('d-none');
  nameErr.classList.remove('d-inline-block');
  emailErr.classList.add('d-none');
  emailErr.classList.remove('d-inline-block');
  messageErr.classList.add('d-none');
  emailErr.classList.remove('d-inline-block');
return true
 }
 else{
   event.preventDefault();
   const success = document.querySelector('#success')
   success.classList.add('d-none');
  success.classList.remove('d-inline-block');
   if(!errArr.includes('nameErr')){
    const nameErr = document.querySelector('#nameErr')
    nameErr.classList.add('d-none');
    nameErr.classList.remove('d-inline-block');
   }
   if(!errArr.includes('emailErr')){
    const emailErr = document.querySelector('#emailErr')
    emailErr.classList.add('d-none');
    emailErr.classList.remove('d-inline-block');
   }
   if(!errArr.includes('messageErr')){
    const messageErr = document.querySelector('#messageErr')
    messageErr.classList.add('d-none');
    messageErr.classList.remove('d-inline-block');
   }
   errArr.forEach(el => {

    if(el === 'nameErr'){
      const nameErr = document.querySelector('#'+el)
      nameErr.classList.add('d-inline-block');
      nameErr.classList.remove('d-none');
      return
    }
     if(el === 'emailErr'){
      const emailErr = document.querySelector('#'+el)
      emailErr.classList.add('d-inline');
      emailErr.classList.remove('d-none');
        return 
     }
     if(el === 'messageErr'){
      const messageErr = document.querySelector('#'+el)
      messageErr.classList.add('d-inline');
      messageErr.classList.remove('d-none');
        return 
    }
   })
   return false;
 }
 })



  
  
        
           
}

