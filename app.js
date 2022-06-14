/* global mapboxgl scrollama */
var config = {
  style: "mapbox://styles/tvhigginbotham/cl2jg1i9d00ve14o9jq9b1ua6",
  accessToken:
    "pk.eyJ1IjoidHZoaWdnaW5ib3RoYW0iLCJhIjoiY2wzZGt4eHc1MDFmdjNkbnY2c2FhMnJmYSJ9.zDJvq-KT0bjy9XsKoRcTCw",
  showMarkers: false,
  //markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  theme: "light",
  use3dTerrain: false, //set true for enabling 3D maps.
  title: "Building out of Crisis",
  subtitle: "A Housing History of Anchorage, Alaska",
  byline: "By Tim Higginbotham",
  footer:
    'Data sources: Municipality of Anchorage Open Data Portal, State of Alaska Department of Natural Resources <br> Research sources: Alaska Department of Labor and Workforce Development; David Reamer, "Mid-Century Housing Crisis"; Anchorage Daily News <br> Coding source: <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
  chapters: [
    {
      id: "intro",
      alignment: "fully",
      hidden: false,
      title: "Introduction",
      image: "data/images/IMG_9547.JPG",
      description:
        "In the century since it was founded as a small tent city to serve as the Alaska Railroad Headquarters in 1914, Anchorage has grown to become Alaska’s largest city and an international transport hub — but not without growing pains. Following a major post-World War II population expansion, Anchorage faced a severe housing shortage, forcing newcomers to pay outlandish prices for low-quality short-term housing in the hopes of someday finding a long-term home. Through decades of building, the city eventually reached something close to a stable housing market.<p>But in recent years, building has slowed to a crawl, creating another serious housing shortage. The city’s growth has stagnated — the population is declining for the first time ever and the rate of building can’t meet the current population’s demands. Vacancy rates in rental units are dropping fast and houses put up for sale are selling in a matter of days with their prices driven up by bidding wars, forcing out locals in the rental and buying markets alike. <p> Anchorage built its way out of past crises, and it needs to do the same again. This crisis is different — caused by stagnation rather than rapid growth — but the solution is the same.",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "tentcity",
      alignment: "center",
      hidden: false,
      title: "Tent City",
      image: "data/images/tentcity.jpg",
      description:
        "Anchorage was founded along the mouth of Ship Creek in 1914 as a small tent city to headquarter the Alaska Railroad. Populated almost entirely by railroad and construction workers, it operated as a company town in its first years. By 1920, as many as 2,000 people lived in tents and makeshift shelters with up to 100 more arriving each week. Sanitation conditions were poor, prompting the urgent need to build adequate housing.",
      location: {
        center: [-149.897, 61.212],
        zoom: 13.2,
        pitch: 45.0,
        bearing: 0.0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [
        {
          layer: "anch1925",
          opacity: 0.7,
          duration: 400,
        },
      ],
    },
    {
      id: "tentcity2",
      alignment: "right",
      hidden: false,
      //title: "Residential Buildings - 1914-1925",
      //image: "data/images/tentcity.jpg",
      description:
        "<ul><li>Residential buildings: 1914-1925<li>Building count: 72</ul>",
      location: {
        center: [-149.897, 61.212],
        zoom: 13.2,
        pitch: 45.0,
        bearing: 0.0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "hidden101",
      alignment: "right",
      hidden: true,
      //title: "Residential Buildings - 1914-1925",
      //image: "data/images/tentcity.jpg",
      //description:
      location: {
        center: [-149.897, 61.212],
        zoom: 13.2,
        pitch: 45.0,
        bearing: 0.0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [
        {
          layer: "anch1925",
          opacity: 0,
          duration: 400,
        },
      ],
    },
    {
      id: "railhub",
      alignment: "center",
      hidden: false,
      title: "Railroad Hub",
      image: "data/images/4thAve1920s.jpg",
      description:
        "The 20s and 30s brought Anchorage slow, steady growth as it became a civilian town in its own right. By 1939, the population reached 4,000, centered mainly around its original downtown grid site near Ship Creek. Roads were paved, theaters and restaurants opened, and safe, long-term housing built.",
      location: {
        center: [-149.86665, 61.19647],
        zoom: 11.4,
        pitch: 10.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [
        {
          layer: "anch26-40",
          opacity: 0.7,
          duration: 1000,
        },
      ],
    },
    {
      id: "railhub2",
      alignment: "right",
      hidden: false,
      //title:,
      //image: "data/images/4thAve1920s.jpg",
      description:
        "<ul><li>Residential buildings: 1926-1940<li>Building count: 618</ul>",
      location: {
        center: [-149.86665, 61.19647],
        zoom: 11.4,
        pitch: 10.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "space2",
      alignment: "right",
      hidden: true,
      //title:,
      //image:,
      // description:,
      location: {
        center: [-149.86665, 61.19647],
        zoom: 11.4,
        pitch: 10.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [
        {
          layer: "anch26-40",
          opacity: 0,
          duration: 1000,
        },
      ],
    },
    {
      id: "richardson",
      alignment: "right",
      hidden: false,
      title: "A Military Town",
      image: "data/images/fort-rich-soldiers.jpeg",
      description:
        "In 1940-41, the US military constructed Fort Richardson and Elmendorf Air Force Base, two major military bases deemed necessary due to the Pacific threat from Japan, particularly attacks on Alaska’s Aleutian Islands. The bases brought thousands of soldiers and construction workers to Anchorage — many of whom brought families — prompting the need for new groceries, schools, teachers, and workers in general. As a result, the population of Anchorage tripled from 1939-1942, growing from 4,000 to 12,000, and exploded to over 44,000 by 1960.",
      location: {
        center: [-149.59317, 61.20236],
        zoom: 9.8,
        pitch: 30.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "base",
          opacity: 0.35,
          duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "base",
          opacity: 0,
          duration: 1000,
        },
      ],
    },
    {
      id: "boom",
      alignment: "right",
      hidden: false,
      //title:
      //image: "data/images/4thAve1949.jpg",
      description:
        "<ul><li>Residential buildings: 1941-1959<li>Building count: 5,300</ul>",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "anch41-60",
          opacity: 0.7,
          duration: 7000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "space3",
      alignment: "right",
      hidden: true,
      //title:,
      //image: "data/images/4thAve1949.jpg",
      //description:
      // "A town built for 4,000 cannot accommodate 40,000 newcomers. Those arriving had no chance whatsoever at securing a stable, long-term home, and were forced instead to find short-term shelter by any means necessary. Privies, shacks, and yes, tents, were quickly constructed on private lots with exorbitant rents. Opportunistic landlords converted driveways and yards into campsites.<p>A cot in a room shared with 20 other people with no bath on site was documented as having a rate of $7 per night ($70 in today’s dollars). This densely populated campsite with a single shared outhouse on 13th Ave and C St rented small spaces to park a car or trailer for $50 per month (equivalent to $550 today).<p>The low quality and sanitation practices in these shelters accelerated the spread of disease and illness, particularly in children. Many of these new homes lacked sewage systems and garbage services. Houseflies carried illness from home to home. In 1946, 400 Anchorage families were homeless not due to lack of means, but to lack of housing options.",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "boom",
      alignment: "fully",
      hidden: false,
      title: "A Severe Housing Shortage",
      //image: "data/images/4thAve1949.jpg",
      description:
        "<figure><img src='data/images/4thAve1949.jpg' alt='source: Alaska State Library Archives'/><figcaption>A soldier navigates 4th Avenue in downtown Anchorage (1949)</figcaption></figure>A town built for 4,000 cannot accommodate 40,000 newcomers. Those arriving had little chance at securing a long-term home and were forced instead to find short-term shelter by any means necessary. Privies, shacks, and tents were quickly constructed on private lots with exorbitant rents. Opportunistic landlords converted driveways and yards into campsites.<figure><img src='data/images/alleyshack48.jpg' alt='source: Alaska State Library Archives'/><figcaption>This alleyshack in downtown Anchorage housed six occupants. 1948.</figcaption></figure>A cot in a room shared with 20 other people with no bath on site was documented as having a rate of $7 per night ($70 in today’s dollars). A densely populated campsite with a single shared outhouse on 13th Ave and C St rented small spaces to park a car or trailer for $50 per month (equivalent to $550 today).<figure><img src='data/images/13thandC48.jpg' alt='source: Alaska State Library Archives'/><figcaption>The campsite on 13th and C referenced above (1948)</figcaption></figure>The low quality and sanitation practices in these shelters accelerated the spread of disease and illness, particularly in children. Many of these new homes lacked sewage systems and garbage services. Houseflies carried illness from home to home. In 1946, 400 Anchorage families were homeless not due to lack of means, but to lack of housing options.<figure><img src='data/images/10thandG48.jpg' alt='source: Alaska State Library Archives'/><figcaption>Poor hygienic conditions in shacks and privies like these led to high rates of illness in children. 1948.</figcaption></figure>",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "shortage",
      alignment: "right",
      hidden: false,
      title: "Kit Homes and Quonset Huts",
      image: "data/images/airportheights.jpg",
      description:
        "Unprepared for its status as a boomtown, Anchorage built itself out of crisis. With an overstretched construction industry and a shortage of labor and materials (exacerbated by postwar inflation), Anchorage residents and employers built as their means allowed. Kit homes — mail-order catalog homes shipped complete with building plans and parts — became a popular option. Many of these survive today, most notably in the Airport Heights neighborhood near Merrill Field, pictured above and shown on the map. <figure><img src='data/images/kit-home-ad.jpg' alt='source: Creative Commons'/><figcaption>A catalogue ad showing the kind of mail-order home that still predominates some Anchorage neighborhoods today.</figcaption></figure>",
      location: {
        center: [-149.82154, 61.20346],
        zoom: 13.41,
        pitch: 45.0,
        bearing: -15.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "neighborhoods",
          opacity: 0.35,
          duration: 1000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "neighborhoods",
      alignment: "right",
      hidden: false,
      //title: "Kit Homes and Quonset huts",
      //image: "data/images/10th-and-C-nwairlines.jpg",
      description:
        "<figure><img src='data/images/10th-and-C-nwairlines.jpg' alt='source: Alaska State Library Archives'/><figcaption> A South Addition neighborhood of single-family homes built by Northwest Airlines as employee housing. 1959.</figcaption></figure>Developers erected major neighborhoods like Nunaka Valley, Airport Heights, Roger's Park, Pilot's Row and Turnagain (highlighted on map). Businesses, needing housing for employees, became major developers themselves. The Civil Aeronautics Administration built the Safehaven apartment complex to house employees in 1942. Northwest Airlines built a neighborhood of ranch homes on 10th Avenue and C Street to house its workers, and the Alaska Railroad Company built a neighborhood of surplus military quonset huts.<figure><img src='data/images/railroad-workers-quonset.jpg' alt='source: Alaska State Library Archives'/><figcaption>A quonset hut neighborhood built as Alaska Railroad employee housing. 1960.</figcaption></figure>",
      location: {
        center: [-149.84932, 61.22917],
        zoom: 11.12,
        pitch: 10.0,
        bearing: -90.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [
        {
          layer: "neighborhoods",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "anch41-60",
          opacity: 0,
          duration: 1000,
        },
      ],
    },
    {
      id: "earthquake",
      alignment: "fully",
      hidden: false,
      title: "Disaster and Recovery: the 1960s",
      image: "data/images/downtown-earthquake.jpg",
      description:
        "Growth continued steadily through Alaska’s achievement of statehood in 1959 and into the 1960s before an earthquake brought the city to a sudden, devastating halt in April, 1964. <figure><img src='data/images/earthquake.jpg' alt='source: Alaska State Library Archives'/><figcaption>Thousands of Anchorage homes were destroyed or damaged by the 1964 earthquake</figcaption></figure>The second largest earthquake in recorded global history, it caused $300 million in property damage and killed 115 people. The quake changed the trajectory of the 1960s, with the remainder of the decade dominated by repairs, rebuilds, and the restoration of normalcy to city life.<figure><img src='data/images/turnagain-earthquake.jpg' alt='source: Alaska State Library Archives'/><figcaption>The newly built Turnagain neighborhood was among the hardest hit due to unstable seaside soil</figcaption></figure>Meanwhile, another boom loomed around the corner. While Alaska rebuilt, oil companies lobbied in Juneau and Washington DC and laid the seeds to greatly expand their Alaskan production.",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "earthquake2",
      alignment: "right",
      hidden: false,
      //title:
      //image: "data/images/earthquake.jpg",
      description:
        "<ul><li>Residential buildings: 1961-1969<li>Building count: 7,913</ul>",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "anch61-69",
          opacity: 0.7,
          duration: 1000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "space4",
      alignment: "right",
      hidden: true,
      //title: ,
      //image: ,
      //description:
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "oilyears",
      alignment: "right",
      hidden: false,
      title: "1970-89: The Oil Years",
      //image: "data/images/pipelineworkers.jpg",
      description:
        "The 1970s and 80s in Alaska were dominated by a rapid expansion of oil production and a massive influx of cash and capital. Here is a timeline of events: <ul> <li> In 1970, Cook Inlet oil production boomed.<li>In 1973, Congress authorized the Trans-Alaska Pipeline System to be built from Prudhoe Bay to Valdez.<li>In 1974, construction began.<li>By 1975, the pipeline’s workforce reached 28,072 and the price of crude oil had doubled in 3 years to $7.56 per barrel.<li>In 1977, the pipeline was completed with a total workforce of 70,000, and regular production in Prudhoe Bay required even further workforce expansion. As Alaska’s largest city and economic center, Anchorage’s population once again boomed.</ul><figure><img src='data/images/pipelineworkers.jpg' alt='source: Alaska State Historical Archives'/><figcaption>An influx of workers brought a major demand for housing to Anchorage</figcaption></figure>",
      location: {
        center: [-149.64054, 64.46236],
        zoom: 4,
        pitch: 10.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "pipeline",
          opacity: 0.8,
          duration: 7000,
        },
        {
          layer: "anch61-69",
          opacity: 0,
          duration: 100,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "space5",
      alignment: "right",
      hidden: true,
      //title: "Oil Years: Construction",
      //image: "data/images/pipelineworkers.jpg",
      //description:,
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      //mapAnimation: "flyTo",
      //rotateAnimation: false,
      //callback: "",
      onChapterEnter: [
        {
          layer: "pipeline",
          opacity: 0,
          duration: 100,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "oilyears2",
      alignment: "right",
      hidden: false,
      //title: "Oil Years: Construction",
      //image: "data/images/pipelineworkers.jpg",
      description:
        "<ul><li>Residential buildings: 1970-1989<li>Building count: 42,394</ul>",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      //mapAnimation: "flyTo",
      //rotateAnimation: false,
      //callback: "",
      onChapterEnter: [
        {
          layer: "anch70-79",
          opacity: 0.7,
          duration: 1000,
        },
        {
          layer: "anch80-89",
          opacity: 0.7,
          duration: 1000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "space51",
      alignment: "right",
      hidden: true,
      //title: "Oil Years: Construction",
      //image: "data/images/pipelineworkers.jpg",
      //description:,
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      //mapAnimation: "flyTo",
      //rotateAnimation: false,
      //callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "oilyears3",
      alignment: "fully",
      hidden: false,
      //title: "Oil Years: Construction",
      image: "data/images/BPbldg.jpg",
      description:
        "From 1970-79, Anchorage's population grew from 48,000 to 174,000. And as oil production continued, Anchorage continued to build. Many pipeline workers settled permanently in Anchorage, living there for half of their 'two weeks on, two weeks off' schedules.<p>The state treasury pumped a billion dollars of North Slope oil revenue into Anchorage construction in the ‘80s, with residential construction reaching its all-time peak in 1983. <p>From 1980-1989, the city’s population grew from 174,000-226,000.",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [
        {
          layer: "anch70-79",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "anch80-89",
          opacity: 0,
          duration: 1000,
        },
      ],
    },
    {
      id: "90s2000s",
      alignment: "fully",
      hidden: false,
      title: "1990-2003: The Final Years of Building Growth",
      image: "data/images/westchester80s.jpg",
      description:
        "After the oil boom, Anchorage settled into its stature as a newly significant US city. It continued building and developing its own culture as neighborhoods filled out and life evolved with the times.",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "90s2000s2",
      alignment: "right",
      hidden: false,
      //title:
      //image: "data/images/westchester80s.jpg",
      description:
        "<ul><li>Residential buildings: 1990-2008<li>Building count: 19,033</ul>",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "anch90-99",
          opacity: 0.7,
          duration: 1000,
        },
        {
          layer: "anch2000-08",
          opacity: 0.7,
          duration: 1000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "90s2000s21",
      alignment: "right",
      hidden: true,
      //title:
      //image: "data/images/westchester80s.jpg",
      description:
        "<ul><li>Residential buildings: 1990-2008<li>Building count: 19,033</ul>",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [
        {
          layer: "anch90-99",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "anch2000-08",
          opacity: 0,
          duration: 1000,
        },
      ],
    },
    {
      id: "just2000s",
      alignment: "center",
      hidden: false,
      //title: "1990-2003: The Final Years of Building Growth",
      image: "data/images/resigraph.png",
      description:
        "Anchorage’s residential construction reached its final year of growth in 2003. Fewer residences have been built each year since.",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "2009-now2",
      alignment: "right",
      hidden: false,
      //title:
      //image: "data/images/IMG_9565.jpg",
      description:
        "<ul><li>Residential buildings: 2009-2019<li>Building count: 4,037</ul>",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "anch2009-19",
          opacity: 0.7,
          duration: 1000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "2009-now2",
      alignment: "right",
      hidden: true,
      //title:
      //image: "data/images/IMG_9565.jpg",
      description:
        "<ul><li>Residential buildings: 2009-2019<li>Building count: 4,037</ul>",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "2009-now",
      alignment: "fully",
      hidden: false,
      title: "A New Housing Crisis",
      image: "data/images/IMG_9565.jpg",
      description:
        "In recent years it has reached a point of crisis — an unfamiliar crisis for a city whose shortages have historically come during booms rather than periods of decline. From 2019-2020, home prices increased 6.4%. From 2021-2022 they increased 8.9%. Meanwhile, the average rent has increased 2.8% in that span. A shortage of units, stagnated construction, a diminished amount of buildable land, and an overall surge in the national housing market have made the city worse for buyers and renters than ever before. Bidding wars drive home sales well over asking price. Homes stay on the market for an average of 21 days, down from 58 days three years ago. <p>Vacancy rates in apartments dropped in 2021 from 9.2% to 4.3%.The prospect of even greater rent increases threatens to force longterm Anchorage residents out of their homes.<p>A recent U.S. Census Bureau Household Pulse Survey found that more than 30% of Alaskan adults live in homes that are not current on rent or mortgages, where eviction is likely in the next two months. And between January and November 2021, more than 15,000 Alaskans accessed homeless services.<p>In short, people in Anchorage are challenged to find a place to live. And when they can, they can seldom afford it. While this housing shortage doesn’t share a cause with Anchorage’s 20th century shortages, its does share a solution: in order to house its population and return some promise to its future, it must learn from the past and build.",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "end",
      alignment: "fully",
      hidden: true,
      title: "A New Housing Crisis",
      //image: "data/images/IMG_9565.jpg",
      description:
        "In recent years it has reached a point of crisis — an unfamiliar crisis for a city whose shortages have historically come during booms rather than periods of decline. From 2018 to 2019, home prices increased ____. From 2019-2020, they increased ____. From 2020-2021, ____. Meanwhile, rents have increased from ___ to ____ in that span. A shortage of units, stagnated construction, a diminished amount of buildable land, and an overall surge in the national housing market have made the city worse for buyers and renters than ever before. Bidding wars drive home sales well over asking price. Homes stay on the market for an average of _ days. Landlords hike rents regularly, forcing longterm Anchorage residents out of their homes.<p>Vacancy rates in apartments dropped in 2021 from 9.2% to 4.3%. A recent U.S. Census Bureau Household Pulse Survey found that more than 30% of Alaskan adults live in homes that are not current on rent or mortgages, where eviction is likely in the next two months. And between January and November 2021, more than 15,000 Alaskans accessed homeless services.<p>In short, people in Anchorage are challenged to find a place to live. And when they can, they can seldom afford it. While this housing shortage doesn’t share a cause with Anchorage’s 20th century shortages, its does share a solution: in order to house its population and encourage a return to growth and prosperity, Anchorage must build.",
      location: {
        center: [-149.88577, 61.1654],
        zoom: 10.07,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "anch2009-19",
          opacity: 0.7,
          duration: 7000,
        },
        {
          layer: "anch90-99",
          opacity: 0.7,
          duration: 7000,
        },
        {
          layer: "anch2000-08",
          opacity: 0.7,
          duration: 7000,
        },
        {
          layer: "anch70-79",
          opacity: 0.7,
          duration: 7000,
        },
        {
          layer: "anch80-89",
          opacity: 0.7,
          duration: 7000,
        },
        {
          layer: "anch61-69",
          opacity: 0.7,
          duration: 7000,
        },
        {
          layer: "anch41-60",
          opacity: 0.7,
          duration: 7000,
        },
        {
          layer: "anch26-40",
          opacity: 0.7,
          duration: 7000,
        },
        {
          layer: "anch1925",
          opacity: 0.7,
          duration: 7000,
        },
      ],
      onChapterExit: [],
    },
  ],
};

var initLoad = true;
var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
};

var alignments = {
  left: "lefty",
  center: "centered",
  right: "righty",
  full: "fully",
};

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    var options = {};
    if (layer.duration) {
      var transitionProp = prop + "-transition";
      options = { duration: layer.duration };
      map.setPaintProperty(layer.layer, transitionProp, options);
    }
    map.setPaintProperty(layer.layer, prop, layer.opacity, options);
  });
}

var story = document.getElementById("story");
var features = document.createElement("div");
features.setAttribute("id", "features");

var header = document.createElement("div");

if (config.title) {
  var titleText = document.createElement("h1");
  titleText.innerText = config.title;
  header.appendChild(titleText);
}

if (config.subtitle) {
  var subtitleText = document.createElement("h2");
  subtitleText.innerText = config.subtitle;
  header.appendChild(subtitleText);
}

if (config.byline) {
  var bylineText = document.createElement("p");
  bylineText.innerText = config.byline;
  header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute("id", "header");
  story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
  var container = document.createElement("div");
  var chapter = document.createElement("div");

  if (record.title) {
    var title = document.createElement("h3");
    title.innerText = record.title;
    chapter.appendChild(title);
  }

  if (record.image) {
    var image = new Image();
    image.src = record.image;
    chapter.appendChild(image);
  }

  if (record.description) {
    var story = document.createElement("p");
    story.innerHTML = record.description;
    chapter.appendChild(story);
  }

  container.setAttribute("id", record.id);
  container.classList.add("step");
  if (idx === 0) {
    container.classList.add("active");
  }

  chapter.classList.add(config.theme);
  container.appendChild(chapter);
  container.classList.add(alignments[record.alignment] || "centered");
  if (record.hidden) {
    container.classList.add("hidden");
  }
  features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement("div");

if (config.footer) {
  var footerText = document.createElement("p");
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute("id", "footer");
  story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=scrollytellingV2"
    : "?pluginName=scrollytellingV2";
  return {
    url: url + suffix,
  };
};

var map = new mapboxgl.Map({
  container: "map",
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: config.chapters[0].location.zoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  interactive: false,
  transformRequest: transformRequest,
  projection: config.projection,
});

// Create a inset map if enabled in config.js
if (config.inset) {
  var insetMap = new mapboxgl.Map({
    container: "mapInset", // container id
    style: "mapbox://styles/mapbox/dark-v10", //hosted style id
    center: config.chapters[0].location.center,
    // Hardcode above center value if you want insetMap to be static.
    zoom: 3, // starting zoom
    hash: false,
    interactive: false,
    attributionControl: false,
    //Future: Once official mapbox-gl-js has globe view enabled,
    //insetmap can be a globe with the following parameter.
    //projection: 'globe'
  });
}

if (config.showMarkers) {
  var marker = new mapboxgl.Marker({ color: config.markerColor });
  marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

map.on("load", function () {
  if (config.use3dTerrain) {
    map.addSource("mapbox-dem", {
      type: "raster-dem",
      url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      tileSize: 512,
      maxzoom: 14,
    });
    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

    // add a sky layer that will show when the map is highly pitched
    map.addLayer({
      id: "sky",
      type: "sky",
      paint: {
        "sky-type": "atmosphere",
        "sky-atmosphere-sun": [0.0, 0.0],
        "sky-atmosphere-sun-intensity": 15,
      },
    });
  }

  // As the map moves, grab and update bounds in inset map.
  if (config.inset) {
    map.on("move", getInsetBounds);
  }
  // setup the instance, pass callback functions
  scroller
    .setup({
      step: ".step",
      offset: 0.5,
      progress: true,
    })
    .onStepEnter(async (response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.add("active");
      map[chapter.mapAnimation || "flyTo"](chapter.location);
      // Incase you do not want to have a dynamic inset map,
      // rather want to keep it a static view but still change the
      // bbox as main map move: comment out the below if section.
      if (config.inset) {
        if (chapter.location.zoom < 5) {
          insetMap.flyTo({ center: chapter.location.center, zoom: 0 });
        } else {
          insetMap.flyTo({ center: chapter.location.center, zoom: 3 });
        }
      }
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
      if (chapter.callback) {
        window[chapter.callback]();
      }
      if (chapter.rotateAnimation) {
        map.once("moveend", () => {
          const rotateNumber = map.getBearing();
          map.rotateTo(rotateNumber + 180, {
            duration: 30000,
            easing: function (t) {
              return t;
            },
          });
        });
      }
    })
    .onStepExit((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.remove("active");
      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
      }
    });
});

//Helper functions for insetmap
function getInsetBounds() {
  let bounds = map.getBounds();

  let boundsJson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [bounds._sw.lng, bounds._sw.lat],
              [bounds._ne.lng, bounds._sw.lat],
              [bounds._ne.lng, bounds._ne.lat],
              [bounds._sw.lng, bounds._ne.lat],
              [bounds._sw.lng, bounds._sw.lat],
            ],
          ],
        },
      },
    ],
  };

  if (initLoad) {
    addInsetLayer(boundsJson);
    initLoad = false;
  } else {
    updateInsetLayer(boundsJson);
  }
}

function addInsetLayer(bounds) {
  insetMap.addSource("boundsSource", {
    type: "geojson",
    data: bounds,
  });

  insetMap.addLayer({
    id: "boundsLayer",
    type: "fill",
    source: "boundsSource", // reference the data source
    layout: {},
    paint: {
      "fill-color": "#fff", // blue color fill
      "fill-opacity": 0.2,
    },
  });
  // // Add a black outline around the polygon.
  insetMap.addLayer({
    id: "outlineLayer",
    type: "line",
    source: "boundsSource",
    layout: {},
    paint: {
      "line-color": "#000",
      "line-width": 1,
    },
  });
}

function updateInsetLayer(bounds) {
  insetMap.getSource("boundsSource").setData(bounds);
}

// setup resize event
window.addEventListener("resize", scroller.resize);
