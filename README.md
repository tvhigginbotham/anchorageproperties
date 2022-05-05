#Then and Now: Housing Crises in Anchorage
##Subhed
###A story map designed by Tim Higginbotham as part of the University of Kentucky New Maps Plus graduate program

1. Introduction:
   This project will visualize building over time in Anchorage, Alaska and analyze how a worsening lack of new housing units are contributing to skyrocketing real estate prices. The project will provide a background explanation of issue, focusing on key neighborhoods, contextualized with their histories as rush-built responses to prior housing crises.

2. Methodology
   Here I will describe the data sources, programming languages, and softwares used creating the story map.

a) Data
municipal boundaries and building data from CAMA data at data.muni.org, including: building year, bedroom count, and housing type.
neighborhood boundaries via anchorage muni data condensed and processed into geojson using turf
census data for race, income, focused on key neighborhoods of Nunaka Valley, South Addition, Thunderbird Heights, Mountain View
images pulled from historical archives with help of local historian David Reamer.
Possibly videos, newspaper clippings, designed graphs and charts https://data.muni.org/Housing-and-Homelessness/CAMA-Property-Inventory-Residential-and-Commercial/yfin-h3vh https://data.muni.org/Housing-and-Homelessness/Girdwood-Residential-Value-Bedrooms-example-/6dj9-bj4e
b) medium for delivery
A multimedia scrollable story map telling story of Anchorage's housing supply. Inspiration: https://bellingham.maps.arcgis.com/apps/Cascade/index.html?appid=ad0a1daf65f94df690d06c75e2d0f9ff

c) layout
Programmed for desktop and mobile, it will feature a full-width map embedded in scrollable story map with data visualization and images, videos. Current outlook: bidding wars, low vacancy rates, rising rents and sales.

How we got here: prior shortages, major crises, rapid builds to meet growth, gave rise to key neighborhoods, including mixed income, low income housing. Profile of key neighborhoods
Where those neighborhoods stand today: current sales data, occupancy rate
What comes next?
Inspiration: https://bellingham.maps.arcgis.com/apps/Cascade/index.html?appid=ad0a1daf65f94df690d06c75e2d0f9ff
d) thematic representation
e) user interaction
scrollable page, content comes as user scrolls. can stop or scroll up to rewind

f) aesthetics and design
still considering design

# Parcel + Leaftlet Starter

## Get Started

1. Install dependencies: `npm install`
1. Run development server: `npm start`

Then, you can open the site in your browser: http://localhost:1234/

To stop the development server: CTRL+C

## Debugging in Visual Studio Code

To start a debugging session:

1. Run `npm start`
1. In Visual Studio Code, go to "Run and Debug" and "Launch Chrome against localhost"

## Building for production

`npm run build`
