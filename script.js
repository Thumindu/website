/* Script to update the function */


function UpdateOrder () {
    document.getElementById("tea_manufacturers").value = document.getElementById("Stay").value;
    document.getElementById("packaging_type").value = document.getElementById("taxitype").value;
    document.getElementById("size").value = document.getElementById("Fueltype").value;
    document.getElementById("extras").value = document.getElementById("Distance").value;



    let tea = document.getElementById("teamanufacturers");
    tea= tea.value;
    
    let teaval=0;

    switch(tea){
        case "dilma":
            teaval=1000;
            break;
        case "jones":
            teaval= 1500;
            break;
        case "george steuart":
            teaval=1000;
            break;
        case "malwatte valley plantations":
            teaval=2000;
            break;
        case "prestige ceylon teas":
            teaval=1000;
            break;
            case "empire teas":
            teaval=2000;
            break;
        default:
            alert("null")
    }

    let package = document.getElementById("packagingtype");
    package = package.value;

    let packageval=0;

    switch(package){
        case "tins":
            packageval=5000;
            break;
        case "paper pouches":
            packageval=1000;
            break;
        case "bags":
            packageval=2500;
            break;
        default:
            alert("null");
    }

    
    let size = document.getElementById("size");
    size= size.value;

    let sizeval=0;

    switch(size){
        case "medium":
            sizeval = 2500;
            break;
        case "small":
            sizeval=1000;
            break;
        case "large":
            sizeval=5000;
            break;
        default:
            alert("Error")
        
    }




    let extras= document.getElementById("extras");
    extras = extras.value;

    let extrasval=0;

    switch(package){
        case "Mug":
            extrasval=500;
            break;
        case "silver pin":
            extrasval=1000;
            break;
        case "wooden souvenir":
            extrasval=1500;
            break;
        default:
            alert("null");
    }


    document.getElementById("grandtotal").value = teaval + packageval + sizeval + extrasval;

 }





/* Script to add to order */


let totalcost = 0;
let ordercount = 0;

function AddToCart() {

    let ordercost = document.getElementById("grandtotal").value;
    totalcost = totalcost + parseInt(ordercost);

    document.getElementById("tea_manufacturers").value = "";
    document.getElementById("packaging_type").value = "";
    document.getElementById("size").value = "";
    document.getElementById("extras").value = "";
    document.getElementById("grandtotal").value = "";


}