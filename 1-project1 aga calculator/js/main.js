const myBirthday = document.getElementById("dateInput");
const ageBtn = document.getElementById("ageBtn");
const ageField = document.getElementById('writeAge');


//logic

function getMyAge(){
    let birthDate = myBirthday.value;
    if(birthDate != ""){
        let myAge =  calculateAge(birthDate);

        ageField.innerHTML=`your age is ${myAge} ${myAge>9? 'years' : 'year'} old`
        
    }else{
        alert('please, enter your age')
    }

}

function calculateAge(birthdate){
    let birthDate = new Date(birthdate);
    let currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    let monthDif = currentDate.getMonth()-birthDate.getMonth();

    let dayDif = currentDate.getDate()-birthDate.getDate();


    if(monthDif<0 || (monthDif===0 && dayDif<0 )){
        age--
    }

    return age

}

//the event
ageBtn.addEventListener('click',function(){
    getMyAge();
})

