function youAge(){
    let age=document.getElementById('age').value;

        if(age>18){
            document.getElementById('your_age').innerHTML=`вы старше меня ${18 -age}`;
        }else if(age<18){
            document.getElementById('your_age').innerHTML=`вы младше меня на ${age -18}`;
        }
    }