const form = document.getElementById('form');
const username = document.getElementById('username');
const address = document.getElementById('address');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const lang = document.getElementById('lang');
const msg = document.getElementById('msg');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
  //get the values from the inputs
  const usernameValue = username.value.trim();
  const addressValue = address.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const ageValue = age.value.trim();
  const genderValue = gender.value.trim();
  const langValue = lang.value.trim();
  const msgValue = msg.value.trim();


  if(usernameValue === '') {
    //show error
    //add error class
    setErrorFor(username, 'Name cannot be blank');
  } else {
    //add success class
    setSuccessFor(username);
  }

  if(addressValue === '') {
    //show error
    //add error class
    setErrorFor(address, 'Address cannot be blank');
  } else {
    //add success class
    setSuccessFor(address);
  }

  if(emailValue === '') {
    //show error
    //add error class
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)){
    //add success class
    setErrorFor(email, 'Email is invalid');
  } else {
    setSuccessFor(email);
  }

  if(phoneValue === '') {
    //show error
    //add error class
    setErrorFor(phone, 'Invalid Phone Number');
  } else {
    //add success class
    setSuccessFor(phone);
  }

  if(ageValue === '') {
    //show error
    //add error class
    setErrorFor(age, 'Age cannot be blank');
  } else {
    //add success class
    setSuccessFor(age);
  }

  if(genderValue === '') {
    //show error
    //add error class
    setErrorFor(Gender, 'Gender cannot be blank');
  } else {
    //add success class
    setSuccessFor(Gender);
  }

  if(langValue === '') {
    //show error
    //add error class
    setErrorFor(lang, 'Language cannot be blank');
  } else {
    //add success class
    setSuccessFor(lang);
  }

  if(msgValue === '') {
    //show error
    //add error class
    setErrorFor(msg, 'Essay cannot be blank');
  } else {
    //add success class
    setSuccessFor(msg);
  }


function setErrorFor(input, message){
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');

  // add error meesage inside small
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error';
}


function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

}



