var isimsoyisim= document.getElementById("name-surname");
var numara = document.getElementById("Phone");
function myFunction(event) {
    event.preventDefault();
    console.log(isimsoyisim.value);
   
    // document.getElementById("firstList").innerHTML=isimsoyisim;    
     document.getElementById("firstList").innerHTML+=`<li>${isimsoyisim.value+numara.value}</li>`;
    // list1.innerHTML=isimsoyisim.value + "\n " +numara.value;
}


