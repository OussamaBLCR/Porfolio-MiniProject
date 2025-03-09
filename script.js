const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');


const email_error = document.getElementById('email_error');


const message_error = document.getElementById('message_error');




form.addEventListener('submit',(e)=>
{  
    let isValid = true;


   var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

   if(name.value === '' || name.value == null || name.value.length <= 2 )

   {
      e.preventDefault();
      name_error.innerHTML = "Name is required";
      isValid = false;
   }


   else
   {
      name_error.innerHTML = "";
   }

   if(!email.value.match(email_check))
   {
      e.preventDefault();
      email_error.innerHTML = "Valid Email is required";
      isValid = false;

   }


   else
   {
      email_error.innerHTML = "";
   }




   if(message.value.length <= 5)

   {
      e.preventDefault();
      message_error.innerHTML = "Message must be more than 6 characters";
      isValid = false;
   }

   else
   {
     message_error.innerHTML = "";
   }

   if(message.value.length >= 30)

   {
      e.preventDefault();
      message_error.innerHTML = "Message cannot be more than 30 characters";
      isValid = false;
   }

   if (isValid) {
    alert('Submitted');
}



})