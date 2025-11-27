let vote = (age) =>{ 
    if (age=18){
        return "You Are Eligible For Vote";
    }
    else{
        return"You Are  Not Eligible For Vote";
    }
}
let age = 20;
let message = vote(age);
document.getElementById("rst").innerText=message + "20";