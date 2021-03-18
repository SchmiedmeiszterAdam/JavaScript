// alert("Hello világ section!");
//document.write("Hello világ section!");
//console.log("üzenet");
var valtA ="";
var valtB ="";
var valtJel ="";
function osszead(){
    var osszeg = Number(valtA) + Number(valtB);
    document.getElementById("szoveg").innerHTML = osszeg;
}
function kivon(){
    var osszeg = Number(valtA) - Number(valtB);
    document.getElementById("szoveg").innerHTML = osszeg;
}
function szoroz(){
    var osszeg = Number(valtA) * Number(valtB);
    document.getElementById("szoveg").innerHTML = osszeg;
}
function oszt(){
    var osszeg = Number(valtA) / Number(valtB);
    document.getElementById("szoveg").innerHTML = osszeg;
}

function szamolas() {
    valtA = document.getElementById("a").value;
    valtB = document.getElementById("b").value;
    valtJel = document.getElementById("muv").value;
    if (valtJel === "+"){
        osszead()
    }
    else if(valtJel === "-"){
        kivon()
    }
    else if(valtJel === "*"){
        szoroz()
    }
    else if(valtJel === "/"){
        oszt();
    }    
    document.getElementById("szoveg").innerHTML = osszeg;
}
