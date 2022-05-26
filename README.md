# Then and Now: Housing Crises in Anchorage

## Subhed

### A story map designed by Tim Higginbotham as part of the University of Kentucky New Maps Plus graduate program

1. Introduction:
   This visualizes building over time in Anchorage, Alaska, from its origins as a small tent settlement to Alaska's largest city. Following a major post-World War II population expansion, Anchorage faced a severe housing shortage, forcing newcomers to pay outlandish prices for low-quality short-term housing in the hopes of someday finding a longterm home. Today, after decades of continued growth, building has slowed to a crawl, creating another serious housing shortage. From 1950-1990, Anchorage was urgently building to house a growing population. But now, the city has stagnated, the population is declining for the first time, and the rate of building can't meet the current population's demands. Houses put up for sale are selling in 3 days, the prices driven well over asking in bidding wars, deterring newcomers and forcing out locals.

2. Methodology
   muni data cleaned to necessary columns with panda, vacant properties removed with null value search in land use column, csv to geojson with qgis

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
