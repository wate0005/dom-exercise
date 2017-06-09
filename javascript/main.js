/*global console, tagLine, alert*/


/*
Task 1

1. Access HTML element with id tag-line.
2. Access all headings that belong to div with the class name bg-main-content.
3. Create the variable collect and assign it with content of tag-line.
4. Loop through the array of headings and append the content of each heading to variable collect
5. After the loop, use alert to print collect
*/



//1. Access HTML element with id tag-line.
var tagLine = document.getElementById("tag-line");
console.log("tagLine: ", tagLine.innerHTML);


//2. Access all headings that belong to div with the class name bg-main-content.
var headings = document.querySelectorAll(".bg-main-content h2");
console.log("headings: ", headings.innerHTML);


//3. Create the variable collect and assign it with content of tag-line.
var collect = tagLine.innerHTML + "\n----------------------------------------\n\n";
console.log("collect: ", collect);


//4. Loop through the array of headings and append the content of each heading to variable collect
var i;

//here is the loop
for (i = 0; i < headings.length; i += 1) {
    
    //append the content with += and use \n for the break - NOT br
    collect += headings[i].innerHTML + "\n";
}


//5. After the loop, use alert to print collect
alert(collect);





    

/*
Task 2

Access 13th div with class name box that belongs to div with the class name bg-main-content. 
You can name the variable when_to_launch.
Use property children to "scoop" in array all HTML elements that belong to that div.
Create the variable collect and assign it with content of heading that belongs to gotten array.
Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
After the loop, use alert to print collect
*/


//this collects the heading - 13th child of box
var when_to_launch = document.querySelectorAll(".bg-main-content .box")[12].children;

//this collects the paragraph under the 13th heading
var collect = when_to_launch[0].innerHTML + "\n------------------\n\n";


var i;
//here is the loop, start with 1 because 0 is already used
//this collects the second paragraph
for (i = 1; i < when_to_launch.length; i += 1) {
    
    //append the content with += and use \n for the break - NOT br - 2x for one break
    collect += when_to_launch[i].innerHTML + "\n\n";
}


alert(collect);
