let myDate = new Date ();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


if(urlParams.has('day')){//use query string
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);



}else{//use date object
    myDay = myDate.getDay();


}


function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn = `
    <p>
    <img src="${coffee.pic}" alt="Our ${coffee.alt}" id="coffee">
    <strong id = "coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong>,
    ${coffee.desc}

    
    </p>
     
        `;


    return myReturn;

}

switch(myDay){

    case 1:
        today = "Monday";

        coffee = {
            color: "pink",
            name: "Bubble Tea (Boba)",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of Bubble tea or Boba.",
            day: "Monday",
            desc: 'Sometimes you need to treat yourself to some Bubble Tea. Now why do we all need bubble tea or boba in your life? It is literally the best thing in the world. We have multiple flavors, from Taro to Milk Tea. Why not try our signature Comet Tiamiat bubble tea. I assure you it will crash land on your top 3 drinks here.'
        


        };


    break;


    case 2:
        today = "Tuesday";

        coffee = {
            color: "tan",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A pic of a Caramel Latte.",
            day: "Tuesday",
            desc: 'I like my Caramel a latte. This is the second most basic drink, but here at CometBucks believe that the basic drinks need to be the best drinks on the menu. Our caramel is made with Madagascar Vanilla to give a more Tropical and luxrious feel. Even with such a fancy caramel it wont hurt your wallet either! '
        


        };


    break;


    case 3:
        today = "Wednesday";

        coffee = {
            color: "brown",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A pic of a drip coffee.",
            day: "Wednesday",
            desc: 'Some days you just need the drip... And what better way to get that drip is by taking our Drip. No we are not talking about clothes we are talking about Coffee! Our Drip coffee is made up of our own secret blend, called the Milky Way mix, its made up of beans from both international coffee beans and local beans. Come get your true pick me up!'
            


        };


    break;

    case 4:
        today = "Thursday";

        coffee = {
            color: "purple",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A pic of a Cold Brew.",
            day: "Thursday",
            desc: 'The Cold brew is as cold as my heart and soul. I am just joking, but if you do vibe with that, our cold brew that is called the Dark Hole is as bitter and dark as a Millenial in their 9 - 5 job. '
        


        };


    break;

    case 5:
        today = "Friday";

        coffee = {
            color: "Green",
            name: "frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A pic of a frappaccino.",
            day: "Friday",
            desc: 'Frappaccino? more like Funppuccino! We have different types of frappaccinos on our menu, it can go anywhere to basic like Caramel to like our craziest creations like Sakura Frapp! Why not explore the night sky with our Starry Nights Frapp!'
        


        };


    break;

    case 6:
        today = "Saturday";

        coffee = {
            color: "blue",
            name: "mocha",
            pic: "images/mocha.jpg",
            alt: "A pic of a mocha.",
            day: "Saturday",
            desc: 'You mocha me so happy. Is what the mocha would say to the regular coffee if it can talk. Dive into our chocolately goodness that is our mocha. We have flavors from milk, to dark, to white, and even to sea salt! Come try our vast variety of Mocha. I highly reccomend the Galaxy Mocha!'
        


        };


    break;

    case 0:
        today = "Sunday";

        coffee = {
            color: "orange",
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A pic of a Pumpkin Spice Latte.",
            day: "Sunday",
            desc: 'Just like Sunday, this drink is basic. It may be a basic drink, but it is a goodie. We improved the taste and added more spices. Here at CometBucks it is out of this WORLD! Come and get your new and improved Nebula Pumpkin Spice Latte, with an extra special something to spice up your morning!'
    


        };


    break;

}


console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;
