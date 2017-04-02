var bio = {
  "name": "Binghui",
  "role": "Company cat",
  "contacts": {
    "email": "bertieliu52@gmail.com",
    "github": "@aceisScope",
    "location": "Espoo"
  },
  "welcomeMsg": "Welcome to the page of the cutest company cat",
  "skills": [
    "purr", "roll on the floor"
  ],
  "bioPic": "images/avatar.jpeg"
}

var replace_text = "%data%";

var name = HTMLheaderName.replace(replace_text, "Binghui");
var role = HTMLheaderRole.replace(replace_text, "Company cat");

var pic = HTMLbioPic.replace(replace_text, bio["bioPic"]);
var welcomeMsg = HTMLwelcomeMsg.replace(replace_text, bio["welcomeMsg"]);

$("#header").prepend(welcomeMsg);
$("#header").prepend(role);
$("#header").prepend(name);
$("#header").prepend(pic);

var skillStart = HTMLskillsStart;
$("#header").append(skillStart);

for (let skill of bio["skills"]) {
  var html_skill = HTMLskills.replace(replace_text, skill);
  $("#skills").append(html_skill);
}

var email = HTMLemail.replace(replace_text, bio["contacts"]["email"]);
var github = HTMLgithub.replace(replace_text, bio["contacts"]["github"]);
var place = HTMLlocation.replace(replace_text, bio["contacts"]["location"]);

$("#topContacts").append(email);
$("#topContacts").append(github);
$("#topContacts").append(place);
