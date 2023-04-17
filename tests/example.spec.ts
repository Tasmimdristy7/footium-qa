import { test, expect } from "@playwright/test";

test.describe("Footium-navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Visits Footium website.
    await page.goto("https://footium.club");
    
    const page1Promise = page.waitForEvent('popup');
    //Clicks on the Open sea button as medium is banned i tried this one
    
    await page.click('button:has-text("View Clubs on OpenSea")');
    const page1 = await page1Promise;
    await page1.close();
//Checks that if the button links to the correct
    expect(page1.url()).toBe('https://opensea.io/collection/footium-football-clubs');
    console.log(page1.url())
    expect(true).toBe(true);
  });

  test("Footium test 2", async ({page}) => {
   //Verify the Investors
    await page.goto("https://footium.club");
    
    
      const heading = page.getByRole('heading', { name: 'Our Investors' });
      const headingText = 'Our Investors';
      const timeout = 5000;
  
      await expect(heading).toContainText(headingText);
    
      console.log(await heading.textContent());
      
      //Here checks all the investors exists or not, I used array for quick test but there are some better ways also
      
      const investors = ['Animoca Brands', 'Stride VC', 'Backed VC', 'Entreé Capital', 'Concept Ventures', 'IVC', 'Encode Club','Chris Smalling','Michael Bentley','Ahmed Al-Balaghi','SolBigBrain'];
     
      let allInvestorsFound = true;
      
      for (const investor of investors) {
          const investorSelector = `text=${investor}`;
          await page.waitForSelector(investorSelector);
          const investorElement = await page.$(investorSelector);
          if (!investorElement) {
            allInvestorsFound = false;
            console.log(`Investor "${investor}" not found on page.`);
          }
       
          expect(investorElement).toBeTruthy();
        }
        if (allInvestorsFound) {
          console.log('All investors and angle investor found on page.');
        } else {
          console.log('Verification failed: some investors not found on page.');
        }
//Checks if all the GamingDao exists or not
        const GamingDao = ['Merit Circle','BlackPool','BAYZ','Yield Guild Games SEA']
        let allGamingDao = true;
        for (const Dao of GamingDao){
          const GamingDaoSelector = `text=${Dao}`;
          await page.waitForSelector(GamingDaoSelector);
          const GamingDaoElement = await page.$(GamingDaoSelector);
          if (!GamingDaoElement) {
            allGamingDao = false;
            console.log(`Gaming Dao "${Dao}" not found on page.`);
          }
          expect(GamingDaoElement).toBeTruthy();
          }
          if (allGamingDao) {
            console.log('All gamingDao found on page.');
          } else {
            console.log('Verification failed: some  not found on page.');
          }

        
          //Clicks the PLAY button in the top right corner
          await page.getByRole('button', { name: 'Play' }).click();

          //Ensures that the Competition table shows 12 clubs, each with their own logo
          //Locates the compettition table here
              const tableSelector = ".css-10ll2cr";
              await page.waitForSelector(tableSelector);

              // selecting all rows within a table
              const rows = await page.$$(tableSelector + " tbody tr");

              //checks the rows 
              expect(rows.length).toBe(12);
              console.log(rows.length)

              // Check each row for the logo image
              
              for (const row of rows) {
                const logoSelector = "img";
                const logoElement = await row.$(logoSelector);
                expect(logoElement).toBeTruthy();
              
                if (logoElement) {
                  console.log("Logo is present for row");
                  expect(true).toBe(true); // pass condition
                } else {
                  console.log("Logo is not present for row");
                  expect(false).toBe(true); // fail condition
                }
              }
              
              expect(true).toBe(true);
  });
});




  
