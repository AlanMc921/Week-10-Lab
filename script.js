/*
application that asks a user to enter how many subjects they have. 
The application should then ask the user to enter the results for each subject. 
Store these results in an array and print them back to the user along with their overall average and grade for each module.
*/

//declare vars

var noSubs;
var subResults=[];
var grade;
var totalMarks=0;
var average;
var message = "";

function subjects(){

    noSubs=parseInt(prompt("Please enter the number of subjects taken"));

//Populate the array

    for(let i=0;i<noSubs;i++){
        subResults[i]=parseInt(prompt("Please enter your result for subject " + (i+1)));
        totalMarks=totalMarks+subResults[i];
    }

    //compute average

    average=totalMarks/noSubs;

    //create output

    //return each result

    for(i=0;i<noSubs;i++){
        message=message + "Your result for subject " + (i+1) + " is " + subResults[i] +"<br/>";

        //compute individual grades

        if(subResults[i]<40){
            grade="Fail";
        }
        else if(subResults[i]<50 && subResults[i]>=40){
            grade="Class 3 Honors/Pass";
        }    
        else if(subResults[i]<60 && subResults[i]>=50){
            grade="Lower Second Class (2.2) Honors";
        }    
        else if(subResults[i]<70 && subResults[i]>=60){
            grade="Upper Second Class (2.1) Honors";
        }    
        else{
            grade="First Class Honours";
        }    

        message = message + "Your grade for subject " + (i+1) + " is " + grade + "<br/>";
    
    }

    //return ovarall average

    message = message + "Your overall average is " + average + "<br/>";

    //output message

    document.getElementById("main").innerHTML= message;


}