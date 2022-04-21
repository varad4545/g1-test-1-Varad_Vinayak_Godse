// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');
// const password = document.querySelector('#password');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();
//     var validation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//     if(nameInput.value === '' || emailInput.value === ''){
//         msg.classList.add('error');
//         msg.innerText = 'Please enter all fields';
//         setTimeout(() => msg.remove(), 3000);
//     } 
//     if (!password.value.match(validation)) {
//         msg.classList.add('error');
//         msg.innerText = 'Password length is less than 6 or has special characters';
//         setTimeout(() => msg.remove(), 3000);
//     }
//     else {
//         const li = document.createElement('li');
//         const text = document.createTextNode(`Submitted: ${nameInput.value}: ${emailInput.value}`);
//         li.appendChild(text);
//         userList.appendChild(li); 
//         nameInput.value = '';
//         emailInput.value = '';
//     }
// }


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

const userList = document.querySelector('#users');
const btn1= document.querySelector('#btn1');
const password = document.querySelector('#password');
var verify1 = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
myForm.addEventListener('submit', onSubmit);
var i=2;
function onSubmit(e) {
    e.preventDefault();
    if((nameInput.value === '') ||(nameInput.value.length<4)){
        const msg3 = document.createElement("text");
          
        msg3.classList.add("error");
         msg.appendChild(msg3);
        msg3.innerText = 'name length should be greater than 4';
  
        setTimeout(() => msg3.remove(), 3000);
    } else {

  
        
        if(password.value.length<6 || !password.value.match(verify1)){
              const msg2 = document.createElement("text");
          
            msg2.classList.add("error");
             msg.appendChild(msg2);
            msg2.innerText = 'Password length should 6';
      
            setTimeout(() => msg2.remove(), 3000);
        }
        else{
        const li = document.createElement('li');
        const text = document.createTextNode(`${nameInput.value}: ${emailInput.value}`);
        li.appendChild(text);
        userList.appendChild(li); 
        nameInput.value = '';
        emailInput.value = '';
        password.value = '';}

        
      
    }

 
  
}