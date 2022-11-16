let surname = "IYIO";

if (surname == "IYIOLA"){
    console.log("Welcome back IYIOLA!")
    document.getElementById('rem').innerHTML= "Welcome back IYIOLA!";
}

else if(surname == "OLALEKAN"){
    console.log("this is your compound name")
    document.getElementById('rem1').innerHTML= "this is your compound name";
}

else if(surname == "BLESSING"){
    console.log("this is your firstname")
    document.getElementById('rem2').innerHTML= "this is your firstname";
}

else if(surname == "IFEOLUWA"){
    console.log("this is your other name")
    document.getElementById('rem3').innerHTML= "this is your other name";
}

else{
    window.alert("NO RECORD FOUND!")
}

