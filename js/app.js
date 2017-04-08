(function(){

	var app = angular.module('tabs',[]);

	app.controller('StoreController', function(){   //storeController is the name of the controller that we are writing. Store should be capital case
		this.programs = programs;
	});

	app.controller('PanelController',function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});


	var programs = [
	{
		name: 'Parent and Child',
		age: '2-3yrs',
		duration: '30 minutes',
		ratio: '10:1 ratio',
		description: 'The goal of the Parent and Child program is to expose and enhance early childhood development skills including: cognitive, language, gross motor, fine motor and social skills. These skills will be taught through fun activities, singing, dancing and gymnastics! A certified coach will guide you and your child throughout the class. We will present students to a wide variety of props and equipment, along with the opportunity to participate in structured activities. We can`t wait to see your little ones show us their biggest Ta Da!'
	},
	{
		name: 'Tiny Tumblers',
		age: 'Independent 3yrs',
		duration: '30 minutes',
		ratio: '6:1 ratio',
		description:'We will engage children with a wide variety of activities and challenges in order for them to gain an understanding of their bodies’ capabilities. We will focus on moving through gymnastics skills, non competitive games and group work. We will include larger spatial awareness skills, balance, overall body coordination and greater self-confidence opportunities. Your child will have so much fun jumping, climbing, marching, hopping, dancing and rolling all throughout class!'
	},
	{
		name: 'Rock n Rollers',
		age: '4-5yrs',
		duration: '45 minutes',
		ratio: '8:1 ratio',
		description:'We will work on developing coordination, balance, strength, self confidence and gymnastics skills. Our focal point of the class is making certain that all children gain a positive “I can do it” attitude! Gymnasts will work on bars, beam, floor & vault in a fun atmosphere while forming safe habits. Instead of having your child jump on your couch, let them come jump on our springboard and swing on our bars!'
	},
	{
		name: 'Beginning Gymnastics',
		age: '6-9yrs',
		duration: '1 hour',
		ratio: '8:1 ratio',
		description:'All students are welcome to join this class whether they have a background in gymnastics or they’re a first timer! Our coaches are able to fulfill their individual needs. Students will be refining their technique, developing strength and gymnastics skills. These include headstands, handstands, cartwheels, round-offs etc. To form a strong foundation, emphasis is placed on proper gymnastics form. Gymnasts will work on bars, beam, floor & vault in a fun atmosphere while forming safe habits.'
	},
	{
		name: 'Playgroups',
		age: '2-6yrs',
		duration: '1 hour',
		ratio: 'Min 8 Children',
		description:'Our playgroups are so much fun! Gather your friends and we’ll set up a customized playgroup for you! Playgroups include 30 minutes of gymnastics instruction and games along with 30 minutes of free time. You can come to us, or we can bring our mats to you!'
	},
	{
		name: 'Special Presentations',
		age: '2-10yrs',
		duration: '30 minutes/class',
		ratio: '2 Class Min',
		description:'Let us bring our mats to your school and teach gymnastics to your students. Kids will have so much fun learning gymnastics and playing fun games during our special presentation. *We can be flexible with your schedule and needs* This is a great treat for your students during the school year or for summer camps!'
	},
	]

})();