/*
this is an example of a long javascript comment.Note the characters at the beginning and ending of the comments.
this script adds the words "Hello ,world" into the body area of the html page.
*/
window.onload = writeMessage;//Do this when page finishes loading
function writeMessage(){
	//Here's where the actual work gets done
	document.getElementById('helloMessage').innerHTML="hello World";
}