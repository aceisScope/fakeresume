var formattedName = HTMLheaderName.replace("%data%", "Binghui");
var formattedRole = HTMLheaderRole.replace("%data%", "Company cat");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
