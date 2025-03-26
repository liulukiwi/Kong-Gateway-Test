Use  ```git clone https://github.com/liulukiwi/Kong-Gateway-Test.git``` to clone a repo on your local  

To run the case, you can go to the directory of Kong-Gateway-Test and use either custom command:  
```npm run e2e:chrome``` to run the case on Chrome in headed mode  
```npm run e2e:reporter``` to run the case on Chrome in headless mode and with a mochawesome report, the report is under */Kong-Gateway-Test/mochawesome-report/mochawesome.html  
or the default way:  
```npx cypress run```  to run the case on Electron in headless mode

or  
```npx cypress open``` open the app to run the spec


In the case, I add 3 commands in */support/e2e.js for common use.  
There's a uncaught error when running the commands, I just add a on to ignore it.  
I try to add a teardown for the case but it fails so I just add another case to delete the data.
