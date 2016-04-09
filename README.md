##How to Successfully Run this Application: 

[Visit my site which is hosted on GH Pages](http://dhackelman.github.io/frontend-nanodegree-mobile-portfolio/)

####Measure the PageSpeed @ [this site](https://developers.google.com/speed/pagespeed/insights/)
####Use DevTools in chrome to measure the fps and to check out the speed of the pizza changer on pizza.html



## Website Performance Optimization Project Narrative

This project was all about the need for SPEED. I started by learning how to use ngrok to host the pages so that I could test PageSpeed. This was not an easy task, but I perservered and got it going. Command line is getting easier to work with. 

###Part 1: Optimize PageSpeed Insights score for index.html

####1. Started by reading and re-reading (http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

####2. After installing/running grunt, I created the necessary package.json and Gruntfile.js files. The next step was to use ngrok to test my PageSpeeds. Using my command line I hosted index.html on my local server. I then initiated ngrok through the command line which allowed me to test index.html on pagespeeds with a forwarding port address.

####3. My first PageSpeeds read-out had the following suggestions: 

	#####a) Optimize images: this was the largest time/speed suck for my site. It recommended that I re-size or somehow optimize my images to speed delivery of the webpage. This made sense since we were dealing with multiple image files (both jpg and png). 
		Thanks to these sites for the help: 
			(https://mijingo.com/blog/optimizing-images-with-grunt-gulp)   and 
			(https://github.com/gruntjs/grunt-contrib-uglify/blob/master/docs/uglify-examples.md) and 
			(compressjpeg.com)

	#####b) PageSpeeds said I should Part of the tutorial also had me "uglify" my js and minify HTML and css. That helped speed things up as well. Check out  my _gulpfile.js_ for more info. 

####4. After more testing, tweaking, and moderate tantruming, I decided to opt for gulp
	#####a)  Used gulp to watch files, minify html, uglify js, and minify css files. 

	#####b) Gulp is dope but wouldn't optimize images much, had to use compressjpeg.com to get it from 2.4mB to 42kB. 


####Part 2: Optimize Frames per Second in pizza.html and main.js

	#####a) most of the changes I made involved trying to reduce the number of calculations the page was making with its _for loops_ and the _document.getElementId_. Instead of getting all elements, I specified element IDs. I also created variables that would store information instead of having to calculate things like _.length_ within the for loops
	#####b) Changed the pizza slider and implemented a switch statement to change pizza sizes. We didn't need to figure out a new size when the use clicks the slider. There are only 3 possibilities, so I only offered 3 size options. This reduces the style calculation. 

T