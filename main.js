name_of_the_student=[];
function submit(){
    var display=[];
    for (j=1;j<=4;j++){
        var name=document.getElementById("name_of_the_student_"+j).value;
name_of_the_student.push(name);        
    }
    var length=name_of_the_student.length;
    for(k=0;k<length;k++){
        display.push('<h4>name-'+name_of_the_student[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display;
    var final=display.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=final;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_the_student.sort();
    var display=[];
    var length=name_of_the_student.length;
for(k=0;k<length;k++){
    display.push("<h4>name-"+name_of_the_student[k]+"</h4>");
    

}
 var final=display.join(' ');
    document.getElementById('display_name_without_commas').innerHTML=final;
}

