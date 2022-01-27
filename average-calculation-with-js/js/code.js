let userName = prompt("Please enter your name :");

let lesson = prompt("Please enter the name of the course you want to learn the letter grade :");

let note = prompt("Please enter your grade :");

let noteInfo ;

if (lesson.length <= 0 ) {
    alert("Please enter a valid course!");
}
else {
    if(userName.length <= 0){
        alert("Please enter a valid name!");
    }
    else{
        console.log(userName);
        if(note > 100) {
            alert("Please enter a valid note!");
        }
        else {
            console.log(lesson);
            if(note >= 90) {
                noteInfo = "AA";
            }
            else if(note >= 80 ){
                noteInfo = "BA";
            }
            else if(note >= 70 ){
                noteInfo = "BB";
            }
            else if(note >= 60 ){
                noteInfo = "CC";
            }
            else if(note < 60 && note >= 0 ){
                noteInfo = "FF";
            }
            else {
                alert("Please enter a valid note!");
            }
        
        }
    
    }
    

}
let data = document.querySelector("#data");
data.innerHTML =`${userName}`;

let data2 = document.querySelector("#data2");
data2.innerHTML=`${lesson}`;

let data3 = document.querySelector("#data3");
data3.innerHTML =`${note} / ${noteInfo}`;

