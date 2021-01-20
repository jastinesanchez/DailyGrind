/*

    What we need to change:

    Day of week - day
    Coffee Name - name
    Coffee Pic - pic
    Alt tag - alt
    Coffee Description -desc
    Color for coffee - color



*/


let myDate = new Date ();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn = `
    <p>
    <img src="${coffee.pic}" alt="Our ${coffee.name}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>
    ${coffee.desc}

    
    </p>
    
    
    
    `;


    return myReturn;

}

switch(myDay){

    case 3:
        today = "Wednesday";

        coffee = {
            color: "brown",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A pic of a drip coffee.",
            day: "Wednesday",
            desc: "Some days you just need the drip...",



        };


    break;

}


console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);




alert("Hi, it's " + today);