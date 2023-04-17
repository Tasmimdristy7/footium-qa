# Getting Started 
Here is a summary of what the test does:
* It visits the Footium website and clicks the "View Clubs on OpenSea" button.
* It verifies that the button links to the correct URL on OpenSea.
* It navigates to the Footium website again and verifies that the "Our Investors" heading is present on the page.
* It checks that all the listed investors are present on the page.
* It checks that all the listed GamingDao are present on the page.
* It clicks the "Play" button in the top right corner of the page.
* It checks that the competition table shows 12 clubs, each with its own logo.

Each test step is wrapped in a Playwright test function and uses Playwright's API to interact with the page and perform checks. The expect function is used to assert that certain conditions are true, and the console.log part is used to output information to the console for debugging purposes.


Although I went through the Playwright documentation, and tutorials and wrote this code in just one day, It does have some similarities with Cypress. I admit my code is not optimized to its fullest potential. If I had more time, I would have liked to learn more about efficient ways to handle pages and timeouts in Playwright, in order to improve the code and make it more reliable.

** On line 75 you might hit a time-out error just look out for that. **





Things I would have done better if it was another framework that I am used to: 

- Timeout optimization
- Handling multiple pages
- Organize it with a POM.

