var right=document.getElementById('footlogo').style.height;
var left=document.getElementById('foot').style.height;
if(left>right)
{
    document.getElementById('footlogo').style.height=left;
}
else
{
    document.getElementById('foot').style.height=right;
}

//var construction = alert('This page is under construction. Please excuse our mess!');

function objMsg() {
	var theMsg = {name: document.getElementById('name').value
	, email: document.getElementById('email').value
	, phone: document.getElementById('phone').value
	, subject: document.getElementById('subject').value
	, message: document.getElementById('message').value}
	return theMsg.name + "\n" + theMsg.email + "\n" + theMsg.phone + "\n" + theMsg.subject + "\n" + theMsg.message;
};

function clearForm() {
	document.getElementById('contactForm').reset();
};