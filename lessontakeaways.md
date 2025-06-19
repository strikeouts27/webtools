This note is for remembering what I was taught in class.

Github pages utilizez its own servers which have their own directories. because of this, what the root folder on my machine is differs from what the root folder is on the github page. because of this putting a / in front of my file path says to the server to go start from the root directory and traverse the file paths to my css stylesheet. if the root directory of the server differs from my home computer, it will look for the file in the wrong place. remove backslashes from the front of html and css stylesheet <link>

incorrect
<link rel="stylesheet" href="/css/style.css">

correct:
<link rel="stylesheet" href="css/style.css">

Anything inside of the article links is fair game to utilize. 
Stay in the lesson and its material. 
Perhaps a winning strategy is to complete the assigned material, and than once I have reached that stopping point utilize a branch to work ahead. 