# How a city becomes unlivable
## Visualizing lack of growth and rising real estate prices in anchorage alaska
A web mapping application designed by tim higginbotham as part of the University of Kentucky New Maps Plus graduate program

## 1. Introduction:
Describing the project -- visualizing building over time in Anchorage, Alaska and analyzing how lack of new units contribute to skyrocketing real estate prices. Provide background of issue, contextualize with numbers and history, explain importance, and describe data source and map function: slider to move visualization through years, lot parcels filling in with new growth, with a color schema to show rising prices.

## 2. methodology
Data sources, languages and softwares
### a) potential data
  - municipal boundaries shapefile or openstreetmap
  - neighborhood boundaries via anchorage muni
  - images (popup slider function possibly)
  - There is a wealth of property data at data.muni.org, and I've become familiar with it through my work as a real estate appraiser for the Municipality of Anchorage.
https://data.muni.org/Housing-and-Homelessness/CAMA-Property-Inventory-Residential-and-Commercial/yfin-h3vh
https://data.muni.org/Housing-and-Homelessness/Girdwood-Residential-Value-Bedrooms-example-/6dj9-bj4e

This data needs to be filtered to down to the most relevant details, including at least construction year, neighborhood, and home value. It will need to be joined with spatial data matched by Parcel ID number.

### b) medium for delivery
web page featuring interactive map, explanatory text, images, slider to visualize year by year, color-coded breakdowns by neighborhood demonstrating home value and build rates, and clickable properties with value graphs
### c) layout
coded for desktop and mobile, full width map embedded in scrollable web page, scroller and legend within map, and popup graphs within clickable neighborhood zones
### d) thematic representation
### e) user interaction
scrollable page, slider years, clickable neighborhoods for detailed investigation
### f) design
 
