#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  * Javascript Debugging
  * Performance Optimization 

*Realtime editing of HTML/CSS is done on the elements tab that lets you make direct changes that can be seen live on the webpage.
*Javascript debugging is done on the Debugging tab 
*Performance Optimization is done on the Network tab, here you can see how fast hte page is loading and what is loading too slowly or slowing down the responsiveness of the webpage.  This allows you to make appropriate changes to make sure your site is responsive for the viewers


* What's the quick key for your OS to spawn the Dev Tools inspector?
  
* The quick key for my OS is CTRL+SHIFT+I 

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

*When I right-clicked on the block of text, I went on the css page on the far right and it showed that it was a .gif image.  This is why we can't tweak the color of the text or change the text itself.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

  *The largest image is lg-share-eng.gif which is a link plugin to share something.  I found this out by right clicking on the page, going to inspect element and then the Network tab.  From there it showed everything that ran on the page and the table shows the many characteristics of them(Method,status,type,initiator,etc) By clicking on the Size option it allowed me to rank them in descending order from the largest sized file to the smallest.  And from there the type shows what it is(application,image) and I scrolled down to the first image. Link is http://s7.addthis.com/static/btn/v2/lg-share-en.gif

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

*Minimise payload would be the lowest hanging fruit to optimize.  They are roughly 20-30kbs and vary in that range, so a total of 1mbs in size.  Tasks like minify CSS/HTML/JS, optimise images, etc.  