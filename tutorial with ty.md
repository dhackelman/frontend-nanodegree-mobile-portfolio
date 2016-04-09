Now speaking with....
Welcome! Please type in ''hello your_coach's_name'' when you're ready to chat and your coach will be ready to talk with you shortly.
Welcome! Please type in ''hello your_coach's_name'' when you're ready to chat and your coach will be ready to talk with you shortly.
→hello ty
Udacity Coach: hey there! need some grunt help?
→Sorta. In a fit of anger I abandoned grunt for gulp this past sunday and things have gone a lot more smoothly
→Is that ok?
Udacity Coach: oh sweet, i prefer gulp anyway. it's what most devs are using these days anyway; grunt is losing steam
Udacity Coach: so yeah totally fine :)
→The tutorials I found for gulp did a much better job of explaining the syntax and it seems like a more concise way to run my tasks
→The issue I'm having right now:
→ 1- compressing images to get my pagespeed score up
→I went and used online tools to compress everything 1 by 1 a couple weeks ago and was able to get my score into the 80s, but when I use gulp to automate the compression/etc. my score sank way back down and the file sizes didn't decreas much
Udacity Coach: gotcha. what are you using for image compression?
Udacity Coach: oh let me pull the latest version of your code too (one sec)
→this is from my gulpfile: //Images Task //Compress gulp.task('image', function(){ gulp.src('src/views/images/*') .pipe(imagemin({ progressive: true, optimizationLevel: 7 })) .pipe(gulp.dest('dist/views/images')); });
Udacity Coach: yeah checking it out now
→I'm not the slickest git user yet, but hopefully everything pushed to github correctly this afternoon
Udacity Coach: yeah it's all there :) also, which online tools did you use to compress?
→tinyjpg.com and jpeg-optimizer.com
Udacity Coach: so is your biggest / only concern optimizing that image size more? i can look into that right now
→thats only one (trying to use gulp and not having to upload/download compressed versions for every picture)
→The other one is not understanding how to improve my js file or inline my CSS. All the reading I'm doing keeps talking about SASS and concatenating js and css files and stuff that I'm pretty unfamiliar with
Udacity Coach: yeah sounds good. so gulp-imagemin is definitely the best/most popular tool out there for gulp, but i still don't find it all that great. you might not be able to replicate the compression you can get from online tools, since they could simply be using better compression algorithms that aren't available on any NPM pacakge. but what i would recommend trying on that end is https://www.npmjs.com/package/gulp-image ; i haven't used it myself yet but have heard good things
Udacity Coach: the other alternative is to make compression something you handle outisde of gulp with a normal command line tool you snag from npm
Udacity Coach: let me grab a link
→I didn't know the command line could help with things like that. awesome.
Udacity Coach: yeah, here's one worth checking out for JPGs:
Udacity Coach: https://www.npmjs.com/package/image-min
→sweet.
Udacity Coach: to your other question:
Udacity Coach: yeah definitely don't need to use SASS here
Udacity Coach: sass is basically "fancy CSS"; very cool and worth learning but not needed.
Udacity Coach: sass-lang.org
Udacity Coach: whoops
Udacity Coach: sass-lang.com my bad haha
Udacity Coach: but anyway
→got it.
→So for the js specific part, it felt like the class really dove in to some advanced javascript stuff that was over my head. I went through and tried to edit as many for loops as I could to limit the number of calculations the page made for the pizza stuff. But then it started talking about
→some request animation frame things that I didn't get
Udacity Coach: oh sure. lemme share a nice resource for that function
Udacity Coach: i'll also chat with the other coaches about editing the course a bit to make all that more clear :)
Udacity Coach: sorry to hear it was tough to follow.
Udacity Coach: i think this was the one: http://creativejs.com/resources/requestanimationframe/
Udacity Coach: paul irish also has a nice blog post about it: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
→so I need to implement this for my pizza page?
Udacity Coach: yeah it'll be very helpful; obviously if you can get the score up in other ways you don't need to, but this will help out
→Alright. One other thing- PagesSpeeds keeps saying- Your page has 1 blocking CSS resources. This causes a delay in rendering your page. None of the above-the-fold content on your page could be rendered without waiting for the following resources to load. Try to defer or asynchronously load blocking resources, or inline the critical portions of those resources directly in the HTML.
Udacity Coach: ah yes.
→I tried using gulp inline-css but that broke a lot of stuff on the page and the more I read, the more confused I got
→It just feels like adding 1 small external css page shouldnt be the thing holding this score back
Udacity Coach: https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery <-- google's official post w/ regard to that
Udacity Coach: lots of good tips in there
Udacity Coach: as far as gulp-inline-css
Udacity Coach: taking a look at your code and seeing what' up
Udacity Coach: *what's
Udacity Coach: hmm, when i run gulp seems like the html pages aren't generated
Udacity Coach: only index.html shows up
Udacity Coach: can't get to the pizza page
→yeah, I didn't get to that yet
Udacity Coach: ohh gotcha
→that was a complaint I was trying no to make- that the file structure of this project makes using grunt/gulp really hard because of the way we're having to use multiple files in multiple folders, etc.
Udacity Coach: it's totally possible though! yeah a bit more involved but doable. let me share an example gulpfile you can reference, from a project i wrote
Udacity Coach: this project has multiple files and lots of stuff moving around
→that would be awesome.
Udacity Coach: :) lemme grab it, one sec
Udacity Coach: one thing to note; this project uses a newer version of JS (called "ES6") so some of the syntax will be slightly different. the gulp stuff is largely the same though
Udacity Coach: but youll notice things like "let" and "const" instead of var, etc
Udacity Coach: http://pastebin.com/U3VFjMnh
Udacity Coach: you'll notice that i have that "paths" object near the top, so i can pass in multiple files at once to some of the tools
Udacity Coach: and gulp will preserve dir structure which is nice
→Gotcha. I was trying to do it with some weird arrays and that wasn't going so well
Udacity Coach: yeah. are you familiar with regex / file globbing?
→nope
Udacity Coach: gotcha. so in your file you actually do a bit of it; "globbing" is a term that refers to the idea of matching files based on a pattern. i.e. when i say "*.js" it's a glob that matches all js files
→with the wildcard symbol, right
Udacity Coach: exactly. what can be more helpful is using two stars like this: "js/**/*.js"
Udacity Coach: which would match all files in all subdirectories that end in js
Udacity Coach: which is super helpful if you've got lots of nested folders in a structure you need to preserve
→so "js/**/*.js" says that it needs to start in my js folder, then look in any folder within to find any files that end in .js ?
Udacity Coach: yup!
Udacity Coach: example:
→so our file structure has a js folder and then a views folder which also has a js folder
Udacity Coach: it'd find both js/main.js and js/subfolder/main.js, etc
→but views isn't a subfolder of js in our structure right now. I guess I need to restructure?
Udacity Coach: you might have to play around, or just make your gulpfile work a bit harder to find em all
→or maybe use "src/**/*.js" ?
Udacity Coach: yeah that'd work!
→ok. I know we're out of time, but thanks for all the help. I'm gonna try to use some of the stuff from your pastebin as a starting point, and then hit up the command line for more jpeg compression. Thanks again!
Udacity Coach: no worries! glad i could help :) good luck on the final strecth!
Udacity Coach: see ya!
→thanks

Type your question here 
