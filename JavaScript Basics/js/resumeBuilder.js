// 1. BIOGRAPHY
var bio = {
    "name": "John Doe",
    "role": "Web Developer",
    "contacts": {
        "mobile": "650-555-555",
        "email": "john@example.com",
        "twitter": "@johndoe",
        "github": "johndoe",
        "location": "San Francisco"
    },
    "welcomeMsg": "lorem ipsum dolor sit amet etc etc etc.",
    "skills": [
        "awesomeness",
        "delivering things",
        "cryogenic sleep",
        "saving the universe"
    ],
    "biopic": "images/fry.jpg"
};

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    $("#topContacts").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").prepend(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").prepend(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").prepend(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").prepend(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
    
if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

    $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));

// 2. WORK EXPERIENCE
var work = {
    "jobs": [
        {
            "employer": "Planet Express",
            "title": "Delivery Boy",
            "location": "Brooklyn, NY",
            "dates": "January 3000 - Future",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paner camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "Pannuci's Pizza Express",
            "title": "Delivery Boy",
            "location": "Manhattan, NY",
            "dates": "1998 - December 31, 1999",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paner camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ]
};

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
        
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));   
    }
}

displayWork();

// 3. PROJECTS
var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": 2014,
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paner camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif",
                "images/197x148.gif"
                       ]
        }
    ]
};

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
        
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
        
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
            }
        }
    }
}

projects.display();

// 4 . EDUCATION
var education = {
    "schools": [
        {
            "name": "Nova Southheastern University",
            "location": "Fort Lauderdale, FL",
            "degree": "Masters",
            "majors": "CS",
            "dates": 2013
        },
        {
            "name": "Eckerd College",
            "location": "Saint Petersburg, FL",
            "degree": "BA",
            "majors": "CS",
            "dates": 2003
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Crash Course",
            "school": "Udacity",
            "date": 2014,
            "url": "http://www.udacity.com/course/ud804"
        }
    ]
};

function displaySchools() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name));
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
    }
}

displaySchools();

function displayOnlineClasses() {
    for (course in education.onlineCourses) {
        $(".education-entry:last").append(HTMLonlineClasses);

        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title));
        $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].date));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
    }
}

displayOnlineClasses()