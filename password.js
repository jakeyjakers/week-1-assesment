const password = "Twilightimperiumisbestgame7"

const hasNumber = /[0-9]/;

const hasLowerLetter = /[a-z]/

const hasUpperLetter = /[A-Z]/

const hasWhiteSpace = /!\s/

//I had learned regex somewhat but sadly i forgot most of it so I couldn't quite remember how to write one 
//that meets all those parameters to have it be shorter.

if (password.length >= 10 && password.length <= 30 &&  
    
    hasNumber.test(password) && hasLowerLetter.test(password) &&

    hasUpperLetter.test(password) ) {
    console.log("Success!")
} else {
    console.log('Fail!')
}