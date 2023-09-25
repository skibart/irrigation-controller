# Irrigation Controller for Sonoff eWeLink Devices

This Node.js application allows you to control your irrigation system using Sonoff eWeLink devices. You can manage the watering of different zones and ensure efficient water usage based on various parameters and weather conditions.

## Hardware Requirements

- **SONOFF 4CHPROR3**: This device is used to control open/close valves for your irrigation zones.

- **Sonoff MS01**: The soil moisture sensor to measure the moisture level in your lawn or garden soil.

- **Sonoff THR316D**: This device acts as a controller for the Sonoff MS01 and serves as the main switch for your irrigation system.

- **Sonoff Mini R2**: Used as a controller for the rain sensor to detect rainfall.

## Weather Forecast Data

To obtain weather forecasts, the app utilizes the `weatherapi-com.p.rapidapi.com` API.

## Configuration Parameters

Before initiating the irrigation process, you can customize various parameters to fine-tune your irrigation system's behavior. Here are the available parameters:

- **hoursToSkipAfterRain**: Set the number of hours that must pass since the last rainfall before irrigation can proceed.

- **lawnWetToAbortHours**: Specify the minimum number of hours since the lawn was last wet to prevent unnecessary watering.

- **mmPerM2In2DaysToAbort**: Define the minimum amount of rainfall (in millimeters) over the last 2 days to trigger irrigation skipping.

- **mmPerM2ForecastTodayToAbort**: Set the minimum forecasted rainfall (in millimeters) for the current day to skip irrigation.

- **chanceOfRainToAbort**: Specify the percentage chance of rain that, if met or exceeded in the forecast, will cause irrigation to be skipped.

- **humidityToAbort**: Set a humidity threshold, and if the current humidity level exceeds this value, irrigation will be skipped.

## Irrigation Process

Before starting the irrigation process, the application performs the following checks:

1. **Current Weather**: Obtains the current weather conditions to assess whether irrigation is needed.

2. **Weather Forecast**: Retrieves the weather forecast data to make informed decisions about irrigation.

3. **Historical Weather**: Analyzes historical weather data to optimize watering schedules.

4. **Parameters**: Considers the custom parameters you've configured to determine if irrigation should proceed.

## Zone-Specific Irrigation

This app allows you to set up different irrigation schedules and parameters for each zone in your lawn or garden. You can achieve precise control over when and how much each area gets watered, ensuring efficient use of resources.

Feel free to customize the app according to your specific needs, and enjoy a smarter and more efficient irrigation system for your home or garden.
