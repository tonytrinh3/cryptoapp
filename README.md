# Crypto App with Launch Darkly Integration

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## [Live Demo](https://master.db6fciqri2gxr.amplifyapp.com/)

## Available Scripts

In the project directory, you can run:

### Crypto App Set Up
`git clone` `npm install` `npm start`

You would clone the the repository to get the package.json file. From there you would `npm install` to get the node_modules and such. Then you, would `npm start` to run the test.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Launch Darkly Implementation - Explanation
The implementation of the feature flag was done in the most simple fashion in order to first test if the launch darkly integration works properly. The integration of the feature flag was a boolean to hide and unhide the news component. For the User object within launch darkly in order to target the user, it was built in a simple manner to see if it works in the first place. At first it didn't work, but over time, the User object showed up in the Launch Darkly showed up in the dashboard. This allows us to target a certain user in order to launch certain feature based on user (Fig. 1).

![Launch Darkly Dashboard - Users](/public/Launch-Darkly-2.PNG)
Figure 1. Launch Darkly Dashboard - Users


### Expected Behavior

Through the Launch Darkly Dashboard (Fig. 2), when you toggle the "show news" feature flag from "false" to "true", you are going from hiding the "news" feature (Fig. 3) within the Crypto App website to showing the "news" feature (Fig. 4). 

![Launch Darkly Dashboard - Feature Flag](/public/Launch-Darkly.PNG)
Figure 2. Launch Darkly Dashboard - Feature Flag 

![Homepage of App - Before Toggling Flag - Hiding News Component](/public/Before-Flag.PNG)
Figure 3. Homepage of App - Before Toggling Flag - Hiding News Component


![Homepage of App - After Toggling Flag - Showing News Component](/public/After-Flag.PNG)
Figure 4. Homepage of App - After Toggling Flag - Showing News Component
