README-hackelman.md

This project was all about the need for SPEED. I started by learning how to incoporate Grunt and ngrok into my project and workflow. This was not an easy task. 

After installing/running grunt, I created the necessary package.json and Gruntfile.js files. The next step was to use ngrok to test my PageSpeeds. Using my command line I hosted index.html on my local server. I then initiated ngrok through the command line which allowed me to test index.html on pagespeeds with a forwarding port address. Thanks (http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/) for the explanations! 

My first PageSpeeds read-out had the following suggestions: 

1) Optimize images: this was the largest time/speed suck for my site. It recommended that I re-size or somehow optimize my images to speed delivery of the webpage. This made sense since we were dealing with multiple image files (both jpg and png). 
	After some serious research I decided that I ought to continue to test my comfort with Grunt. The most helpful sites were (https://mijingo.com/blog/optimizing-images-with-grunt-gulp) and (https://github.com/gruntjs/grunt-contrib-uglify/blob/master/docs/uglify-examples.md). 

	Part of the tutorial also had me "uglify" my js so that helped speed things up as well. 

	``