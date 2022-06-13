# Building out of Crisis: A Housing History of Anchorage

![Anchorage as a Tent City](data/images/tentcity.jpg?raw=true "Anchorage as a Tent City")

## A story map designed by Tim Higginbotham as part of the University of Kentucky New Maps Plus graduate program

### 1. Introduction:

This story map visualizes building over time in Anchorage, Alaska, from its origins as a small tent settlement to Alaska's largest city. Following a major post-World War II population expansion, Anchorage faced a severe housing shortage, forcing newcomers to pay outlandish prices for low-quality short-term housing in the hopes of someday finding a longterm home. Today, after decades of continued growth, building has slowed to a crawl, creating another serious housing shortage. From 1950-1990, Anchorage was urgently building to house a growing population. But now, the city has stagnated, the population is declining for the first time, and the rate of building can't meet the current population's demands. Houses put up for sale are selling in 3 days, the prices driven well over asking in bidding wars, deterring newcomers and forcing out locals.

![resigraph](data/images/resigraph.png?raw=true "graph showing decline in residential construction")

### 2. Methodology

**A) Data**

- Housing data was sourced from the Municipality of Anchorage Property Appraisal Division's [residential property inventory](https://data.muni.org/Housing-and-Homelessness/CAMA-Property-Inventory-Residential-with-Details/r3di-nq2j). The dataset was downloaded as a CSV and cleaned, reduced and organized using Python 3 via Jupyter notebooks to include only point geographies and the year built for each property. The data was then split chronologically by year built into eight CSV files, which were uploaded as separate Mapbox layers.
- Historical photographs were primarily found using the [Alaska Digital Archives](https://vilda.alaska.edu/) and belong to the University of Alaska and the Alaska State Library. Other photos used are licensed under Creative Commons by Wordpress users aldenjewell and Travis S.
- A shapefile of the Trans-Alaska Pipeline System was downloaded from the [State of Alaska Geoportal](https://gis.data.alaska.gov/datasets/e36c4585bb7d4f6d988853a16f5ecd26).
- Georeferenced historical aerial photography will be sourced from the Municipality of Anchorage GIS Department.
- Historical research drawn from David Reamer's ["How A Mid-Century Housing Crisis Left Its Mark On Today's Anchorage"](https://www.adn.com/alaska-life/2021/03/29/how-a-mid-century-housing-crisis-left-its-mark-on-todays-anchorage-neighborhoods/).

**B) Medium for Delivery**
This project is presented as a web-based application accessible by desktop and mobile devices. The basemap and data layers are hosted on and were designed using Mapbox. Code needed to create a scrollable story map was borrowed heavily from https://github.com/mapbox/storytelling.

The technology stack for this project includes HTML, CSS, and Javascript.

**C) Layout**
This project will be presented as a scrollable story map accessible by desktop and mobile devices. It will feature a fullscreen Mapbox basemap with chapter divs containing text and images that tell the history of housing in Anchorage. The basemap width and chapter text boxes will be resized to fit fullscreen and mobile devices.

![first sketch](data/images/IMG_2468.jpg?raw=true "First draft sketch of map layout")

First draft sketch of map layout -- originally intended to have forward and back buttons and clickable popup stories.

![second sketch](data/images/IMG_2469.jpg?raw=true "Second draft sketch of map layout")

Second draft sketch of map layout, which helped me zero in on the final idea.

**D) Thematic Representation**
Each residential property in Anchorage will be represented by point features categorized by color according to building era broken down into the following ranges of years: 1925 and earlier (tent city days); 1926-40 (slow growth as a railroad hub); 1941-69 (post-World War II housing crisis and building boom); 70-79 (early oil years); 80-89(oil boom); 90-2008 (continued growth); and 2009-2019 (stagnation). A legend on screen will explain this to the reader.

The Trans-Alaska Pipeline System will be represented by a line feature.

**E) User Interaction**
The user engages with the story map as the would a news article -- scrolling down the page, prompting new text, images, and data to populate on screen. Point features representing residential buildings will appear on screen according to year built throughout the story. Text boxes, broken into chapters, will contain the text and images that explain the story to the reader.

**F) Aesthetics and Design**
The basemap is been designed simply in order to not crowd or distract from the text, while allowing point features to be highly visible and notable when they appear. Labels, roads, and geographic features, aside from water and land, have been hidden or minimized.

**G) Conclusion**
Anchorage was unprepared for the growth it experienced in the 1940s and 50s and, as such, was ultimately unable to prevent a housing crisis that severely impacted the health, safety, and wealth of locals and newcomers. Eventually, through urgent building, it was able to grow into its new shoes and survive the growing pains of the oil boom in the 70s and 80s, emerging as a major hub and Alaska's largest city. But with building growth slowed to a crawl, Anchorage lacks the housing supply needed for its current population. This has brought a new kind of housing crisis to the city, sparked not by growth, but by stagnation. Anchorage is a city in decline, and will be until it meets the needs of its population.
