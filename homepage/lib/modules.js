var skills = [
    "HTML, CSS, and JAVASCRIPT",
    "BOOTSTRAP",
    "WORDPRESS",
    "NODE.JS and EXPRESS", 
    "TWIG", 
    "DJANGO WEB FRAMEWORK(Python)",
]

var classes = [
	{
		class_name: 'Honors Astronomy, Space and Time',
		class_code: 'NSET 181 DA',
		class_description: 'This course is an introdcution to the science of sstronomy and astrophysics',
		credits: '3',
		instructor: 'Dr. Brennan Mullan' 
	},
	{
		class_name: 'Leadership Seminar: Walt Disney World',
		class_code: 'HADL FA19',
		class_description: 'This course looks at the Disney Companies Business, HR, and IT',
		credits: '3',
		instructor: 'Patrick Mulvihill, Sandy Mervosh, and Mark Voortman' 
	},
	{
		class_name: 'NoSQL Databases',
		class_code: 'CMPS364EA',
		class_description: "This course explores modern databases that do not strictly follow the relational database design and SQL. Advantages and disadvantages will be discussed. Students will be required to work with at least one NoSQL databases and write a program that utilizes it.",
		credits: '3',
		instructor: 'Jeff Seamen' 
	},
	{
		class_name: 'Principals of Management',
		class_code: 'DA FA19',
		class_description: 'N/A',
		credits: '3',
		instructor: 'N/A' 
	},
	{
		class_name: 'Web Application Developement',
		class_code: 'CMPS361',
		class_description: 'This course will provide a foundation in several facets of establishing and maintaining a website. This includes the latest advances in client side as well as server side technologies. The goal is to have students design, implement, and run advanced web applications. It will also cover in some detail the protocols required for web development. Prerequisites: CMPS 261, CMPS 262.',
		credits: '3',
		instructor: 'Mark Voortman' 
	},
]



var aboutme = "My name is Bailey Rotellini and I am currently a junior at Point Park going for my bachelors in Information technology. I also work at O2dca as a website and app developer as well as the Brew Thru as a manager on the weekends. i enjoy programming and have been since 6th grade. I have seen technology grow through this time and have learned how to harness the tools at my disposal to create apps, websites and solutions to my everyday problems. "

exports.getskills = function(){
    return skills;
}
exports.getabout = function() {
    return aboutme;
}

exports.getclasses = function() {
	return classes;
}