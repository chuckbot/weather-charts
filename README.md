# Weather Service Dashboard

The weather service dashboard consist of two sliders („pressure“ and „temperature“)andtwocharts(„chanceofrain“and„amountofrainfall“).

## Dashboard description

### Chance of rain chart

The chance of rain chart displays the mean value and the variance in aline chart. The x-axis are the upcoming days (1...7). The y-axis is the probability of rain (0-100%). The values for the rain chart can be calculated by the following function: 

```
functionchanceOfRain(pressure,temperature,amount) {
  var score = Math.log(amount+1) * Math.log(pressure-929) * Math.log(temperature-9);
  var mean = Math.min(Math.max(score,0),100)
  var upper_bound = Math.min(1.5 * mean, 100);
  var lower_bound = Math.max(0.5 * mean,0);
  return[lower_bound,mean,upper_bound];
}
```
The values of the two sliders(“pressure”and“temperature”) are inputs for the function.These are global estimates and valid for each of the seven days. The sliders are described below. Moreover,the amount of rain fall you get for the day(“amount”) is input for the function. It is also described below. For amount of rainfall, you will get one value per day from aserver.The function returns an array of three values. “mean” is the estimated chance of rain for the day. “upper_bound” and “lower_bound” define a range that quantifies ourconfidence.All three return values should be visualized in the chart.

### Amount of rain fall chart

The amount of rain fall is a barchart. The x-axis will represent the upcoming days(1...7). The y-axis is the amount of rain fall in l/m2.
The values for the bar chart can be requested from the server. Call it at the following link [Data](http://private-4945e-weather34.apiary-proxy.com/weather34/rain).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
