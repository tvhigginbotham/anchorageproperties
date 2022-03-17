# How a City Becomes Unlivable (title will likely change)
## Visualizing lack of growth and rising real estate prices in Anchorage, Alaska
A web mapping application designed by Tim Higginbotham as part of the University of Kentucky New Maps Plus graduate program

## 1. Introduction:
This project will visualize building over time in Anchorage, Alaska and analyze how a worsening lack of new housing units are contributing to skyrocketing real estate prices. The project will provide a background explanation of issue, contextualized with historical numbers, and attribute the data sources (mostly to the Municipality of Anchorage).

## 2. Methodology
Here I will describe the data sources, programming languages, and softwares used creating the project.
### a) Potential Data
  - municipal boundaries shapefile or openstreetmap background
  - neighborhood boundaries via anchorage muni data condensed and processed into geojson using turf
  - individual parcels queried and processed into geojson using turf
  - images (popup slider function possibly)
  - There is a wealth of property data at data.muni.org, and I've become familiar with it through my work as a real estate appraiser for the Municipality of Anchorage.
https://data.muni.org/Housing-and-Homelessness/CAMA-Property-Inventory-Residential-and-Commercial/yfin-h3vh
https://data.muni.org/Housing-and-Homelessness/Girdwood-Residential-Value-Bedrooms-example-/6dj9-bj4e

This data needs to be filtered to down to the most relevant details, including at least construction year, neighborhood, and home value. It will need to be joined with spatial data by Parcel ID number.

### b) medium for delivery
A web page featuring an interactive map, explanatory text, images, a slider to visualize year by year, color-coded breakdowns by neighborhood demonstrating home value and build rates, and clickable individual properties with graphs showing values
### c) layout
Programmed for desktop and mobile, it will feature a full-width map embedded in scrollable web page, a slider and legend shown within the map, and popup graphs within clickable neighborhood zones and individual properties
### d) thematic representation
A classified choropleth for neighborhood polygons and subdued zoomable lines within them for each individual parcel
### e) user interaction
scrollable page, slidable years, hoverable neighborhoods and clickable properties for detailed investigation
### f) aesthetics and design
still considering design

 
