use  ```git pull https://github.com/liulukiwi/Kong-Gateway-Test.git``` to get a repo on your local  

To run the case, you can use custom commands:  
```npm run e2e:chrome``` to run the case on Chrome in headed mode  
```npm run e2e:broswe``` to run the case on Chrome in headless mode and with a mochawesome report  
or the default way:  
```npx cypress run```  to run the case on Electron in headless mode 
or  
```npx cypress open``` open the app to run the spec


In the case, I add 3 commands in */support/e2e.js for common use.  
There's a uncaught error when running two of the commands, so I just add a on to ignore it.   
I try to add a teardown for the case but it fails so I just add another case to delete the data.

