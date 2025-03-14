function validate(e){
    e.preventDefault();

    const email = document.getElementById("email").Value;
    const password = document.getElementById("password").Value;
    const age = document.getElementById("age").Value;
    const msgBox = document.getElementById("message").Value;

    let message="";

    if (email===''){
        message= "please enter the email"
        msgBox.style.color='red';
    }
    else if(password===""){
        message= "password must be atleast 8 charactors";
        msgBox.style.color='red';
    }
    else if(age===""){
        message= "age must be between 12 to 50";
        msgBox.style.color='red';
    }
    else{
        message="login successfully";
        msgBox.style.color="green";
    }

    msgBox.innerHTML = message
}