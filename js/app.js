/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
document.getElementById('matCount').innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
document.getElementById('msgCount').innerHTML = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
document.getElementById('fullname').innerHTML = 'Ronald McDonald';


//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
document.getElementById('age').innerHTML = 63;

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
var newDiv = document.createElement('div');
newDiv.setAttribute("id", "job");
newDiv.textContent = 'Clown & Restauranteur';
var profileData = document.getElementById('data');
profileData.appendChild(newDiv);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var hobbiesDiv = document.createElement('div');
hobbiesDiv.setAttribute('id', 'hobbies');
hobbiesDiv.textContent = "Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King";
profileData.appendChild(hobbiesDiv);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var locationDiv = document.createElement('div');
locationDiv.setAttribute('id', 'location');
locationDiv.textContent = "Honolulu, HI";
profileData.appendChild(locationDiv);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var wantsDiv = document.createElement('div');
wantsDiv.setAttribute('id', 'wants');
wantsDiv.textContent = "Looking for a Mrs. McDonald";
profileData.appendChild(wantsDiv);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var newPara = document.createElement('p');
newPara.setAttribute('id', 'pro2')
newPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non libero consectetur, fermentum magna at, rhoncus tellus. Maecenas a gravida lectus. Aenean in mattis lectus. Quisque et velit tempus, consequat mi ut, accumsan eros. Quisque at blandit mauris. Etiam tincidunt erat a pulvinar semper."
var profileDiv = document.getElementById('profile');
profileDiv.appendChild(newPara);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.


//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto




