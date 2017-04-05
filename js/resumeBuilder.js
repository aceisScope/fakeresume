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
  "bioPic": "images/avatar.jpg"
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

console.log(bio.skills)
if (bio.skills.length > 0) {
  var skillStart = HTMLskillsStart;
  $("#header").append(skillStart);

  for (let skill of bio["skills"]) {
    var html_skill = HTMLskills.replace(replace_text, skill);
    $("#skills").append(html_skill);
  }
}

var email = HTMLemail.replace(replace_text, bio["contacts"]["email"]);
var github = HTMLgithub.replace(replace_text, bio["contacts"]["github"]);
var place = HTMLlocation.replace(replace_text, bio["contacts"]["location"]);

$("#topContacts").append(email);
$("#topContacts").append(github);
$("#topContacts").append(place);

var work = [
  {
    "date": "2015.12 - 2017.4",
    "employer": "Meow&Meow Co.",
    "title": "Company cat",
    "location": "Helsinki",
    "Description": "Chase rats"
  },
  {
    "date": "2015.6 - 2015.12",
    "employer": "Meow University",
    "title": "Cat assistant",
    "location": "Espoo",
    "Description": "Rats catching practice"
  }
]

for (index in work) {
  var workStart = HTMLworkStart;
  $("#workExperience").append(workStart);

  var mywork = work[index];
  var employer = HTMLworkEmployer.replace(replace_text, mywork.employer);
  var worktitle = HTMLworkTitle.replace(replace_text, mywork.title);
  var workdate = HTMLworkDates.replace(replace_text, mywork.date);
  var worklocation = HTMLworkLocation.replace(replace_text, mywork.location);
  var workdescription = HTMLworkDescription.replace(replace_text, mywork.Description);
  $(".work-entry:last").append(employer + worktitle);
  $(".work-entry:last").append(workdate);
  $(".work-entry:last").append(worklocation);
  $(".work-entry:last").append(workdescription);
}



var myproject = {
  "title": "Rats chasing practice training",
  "date": "2016.5 - 2016.12",
  "description": "Run after all the rats and catch them all!",
  "image": "images/project.jpg"
}
var projectStart = HTMLprojectStart;
var projecttitle = HTMLprojectTitle.replace(replace_text, myproject.title);
var projectdate = HTMLprojectDates.replace(replace_text, myproject.date);
var projectdescription = HTMLprojectDescription.replace(replace_text, myproject.description);
var projectimage = HTMLprojectImage.replace(replace_text, myproject.image);
$("#projects").append(projectStart);
$(".project-entry").append(projecttitle);
$(".project-entry").append(projectdate);
$(".project-entry").append(projectdescription);
$(".project-entry").append(projectimage);


var myschool = {
  "date": "2014.8 - 2016.12",
  "name": "Meow University",
  "degree": "Master of Cat",
  "location": "Espoo",
  "major": "Rats chasing and floor rolling"
}

var schoolStart = HTMLschoolStart
var schoolname = HTMLschoolName.replace(replace_text, myschool.name);
var schooldegree = HTMLschoolDegree.replace(replace_text, myschool.degree);
var schooldate = HTMLschoolDates.replace(replace_text, myschool.date);
var schoollocation = HTMLschoolLocation.replace(replace_text, myschool.location);
var schoolmajor = HTMLschoolMajor.replace(replace_text, myschool.major);
$("#education").append(schoolStart);
$(".education-entry").append(schoolname + schooldegree);
$(".education-entry").append(schooldate);
$(".education-entry").append(schoollocation);
$(".education-entry").append(schoolmajor);
