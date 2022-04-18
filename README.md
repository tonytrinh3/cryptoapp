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


#### Setting up Env Local File for API KEYS

In the root folder of the project, create `.env.local` file to store the API keys for the project and add the below code:

`REACT_APP_COINRANKING_API_KEY=`
`REACT_APP_BING_NEWS_API_KEY=`
`REACT_APP_LAUNCH_DARKLY_CLIENT_ID=`

To populate the API keys to the right the variable, you would go to following link after you signed up in Rapid API and subscribe to the APIs for a free plan:
[Coinranking](https://rapidapi.com/Coinranking/api/coinranking1/)
[Bing News](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/)

For these two APIS, copy the "X-RapidAPI-Key" from the "headers" section and save to `.env.local` (Fig. 1 and Fig. 2).

![CoinRanking API](/public/coinranking-api.png)
Figure 1. CoinRanking API


![Bing News API](/public/bing-news-api.png)
Figure 2. Bing News API


For Launch Darkly API, after you signed up for the free trial from Launch Darkly [Launch Darkly](https://app.launchdarkly.com/settings/projects), create a new project for the crypto app and get the Client-side ID for this app (Fig. 3) in `REACT_APP_LAUNCH_DARKLY_CLIENT_ID`.

![Launch Darkly API](/public/Launch-Darkly-API.png)
Figure 3. Launch Darkly Dashboard - Users

### Launch Darkly Implementation - Explanation
The implementation of the feature flag was done in the most simple fashion in order to first test if the launch darkly integration works properly. The integration of the feature flag was a boolean to hide and unhide the news component. For the User object within launch darkly in order to target the user, it was built in a simple manner to see if it works in the first place. At first it didn't work, but over time, the User object showed up in the Launch Darkly showed up in the dashboard. This allows us to target a certain user in order to launch certain feature based on user (Fig. 4).

![Launch Darkly Dashboard - Users](/public/Launch-Darkly-2.PNG)
Figure 4. Launch Darkly Dashboard - Users


### Expected Behavior

Through the Launch Darkly Dashboard (Fig. 5), when you toggle the "show news" feature flag from "false" to "true", you are going from hiding the "news" feature (Fig. 6) within the Crypto App website to showing the "news" feature (Fig. 7). 

![Launch Darkly Dashboard - Feature Flag](/public/Launch-Darkly.PNG)
Figure 5. Launch Darkly Dashboard - Feature Flag 

![Homepage of App - Before Toggling Flag - Hiding News Component](/public/Before-Flag.PNG)
Figure 6. Homepage of App - Before Toggling Flag - Hiding News Component


![Homepage of App - After Toggling Flag - Showing News Component](/public/After-Flag.PNG)
Figure 7. Homepage of App - After Toggling Flag - Showing News Component
