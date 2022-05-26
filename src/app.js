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
  title: "Kit Homes and Quonset Huts",
  subtitle: "A Housing History of Anchorage",
  byline: "By Tim Higginbotham",
  footer:
    'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. Other sources: David Reamer etc.',
  chapters: [
    {
      id: "intro",
      alignment: "fully",
      hidden: false,
      title: "Introduction",
      image: "Skyline image of Anchorage taken by me",
      description:
        "Introductory paragraph in the context of the current housing shortage. This will lead into the historical background of the following chapters.",
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
      alignment: "right",
      hidden: false,
      title: "Tent City",
      image: "data/images/tentcity.jpg",
      description:
        "Explaining Anchorage's origins as a tent city for railroad workers and adventurers",
      location: {
        center: [-149.89716, 61.21848],
        zoom: 13,
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
      onChapterEnter: [
        {
          layer: "anch1925",
          opacity: 1,
          duration: 7000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "railhub",
      alignment: "left",
      hidden: false,
      title: "Railroad Hub",
      image: "data/images/4thAve1920s.jpg",
      description:
        "Anchorage has steady but minor growth before 1939, remains a quiet town of railroad workers, about 4,000 people",
      location: {
        center: [-149.89716, 61.21848],
        zoom: 12,
        pitch: 20.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "anch26-40",
          opacity: 1,
          duration: 7000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "richardson",
      alignment: "right",
      hidden: true,
      title: "Fort Richardson construction",
      image: "data/images/fort-rich-soldiers.jpeg",
      description:
        "Required thousands of construction workers, brought thousands of soldiers, many with families. Prompted need for stores, schools, workers, teachers.",
      location: {
        center: [-149.66419, 61.25831],
        zoom: 11.92,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      //onChapterEnter: [{
      //  layer: "richardson1950",
      //  opacity: 1,
      //  duration: 7000,
      // },],
      //onChapterExit: [{
      // layer: "richardson1950",
      // opacity: 0,
      // duration: 7000,
      // },],
    },
    {
      id: "richardson2",
      alignment: "right",
      hidden: false,
      title: "Fort Richardson construction",
      image: "data/images/fort-rich-soldiers.jpeg",
      description:
        "Required thousands of construction workers, brought thousands of soldiers, many with families. Prompted need for stores, schools, workers, teachers.",
      location: {
        center: [-149.66419, 61.25831],
        zoom: 11.92,
        pitch: 45.0,
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
      alignment: "left",
      hidden: false,
      title: "Population Boom",
      image: "data/images/4thAve1949.jpg",
      description:
        "World War II arrives. Only attacks on US soil outside of Pearl Harbor are in the Aleutians. Population booms in 1940s following construction of Fort Richardson",
      location: {
        center: [-149.87969, 61.15596],
        zoom: 10.8,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "anch41-60",
          opacity: 1,
          duration: 7000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "shortage",
      alignment: "left",
      hidden: false,
      title: "Severe housing shortage",
      image: "data/images/alleyshack48.jpg",
      description:
        "Overall, population grew from 4,000 in 1939 to 32,000 by 1950. Lack of longterm housing led to a rush for shortterm housing. Campsites on private lots, $70 nightly cots in rooms of 20 with no bath, etc. <img src='data/images/10thandG48.jpg' alt='source: Alaska State Library Archives'>",
      location: {
        center: [-149.87969, 61.15596],
        zoom: 10.8,
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
      id: "lotcamps",
      alignment: "left",
      hidden: false,
      title: "Any Means Necessary",
      image: "data/images/13thandC48.jpg",
      description:
        "Opportunistic landlords leapt at the scramble for housing, renting rooms, driveways, and partial lots. Like this lot at 13th ave and C St. Densely populated camp with shared outhouse: $50 ($550 today) per month for a small spot to park a car or trailer.",
      location: {
        center: [-149.88755, 61.20977],
        zoom: 15.45,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "inflation",
      alignment: "center",
      hidden: false,
      title: "Boomtown life combined with postwar inflation",
      description:
        "Prices skyrocketed, shortage of labor and materials, increase wages.",
      location: {
        center: [-149.88755, 61.20977],
        zoom: 15.45,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "kithomes",
      alignment: "left",
      hidden: false,
      title: "Kit Homes and Quonset huts",
      image: "data/images/kit-home-ad.jpg",
      description:
        "Slow construction and lack of options led to rise in popularity of kit homes, mail-order homes shipped with building plans and needed parts. Many of these still survive, most notably in Airport Heights. <img src='data/images/kit-home-ad.jpg' alt='source: Alaska State Library Archives'>",
      location: {
        center: [-149.82151, 61.20337],
        zoom: 14.46,
        pitch: 45.0,
        bearing: -24.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "quonset",
      alignment: "left",
      hidden: false,
      //title: "Third Title",
      image: "data/images/railroad-workers-quonset.jpg",
      description:
        "Similarly, many people made use of surplussed military Quonset huts, converting them to schoolrooms, grocery stores, restaurants, and homes. Surviving huts can still be seen around Anchorage, often used as sheds or even retail stores. <img src='data/images/spenardquonset.jpg' alt='source: Alaska State Library Archives'>",
      location: {
        center: [-149.91381, 61.19663],
        zoom: 16.98,
        pitch: 45.0,
        bearing: -89.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "neighborhoods",
      alignment: "fully",
      hidden: false,
      title: "neighborhoods",
      image: "./path/to/image/source.png",
      description: "turnagain, nunaka valley, pilot's row.",
      location: {
        center: [-149.85762, 61.16364],
        zoom: 10.8,
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
      id: "employeehousing",
      alignment: "fully",
      hidden: false,
      title: "employee housing",
      image: "./path/to/image/source.png",
      description: "Pioneer Home, Safehaven, 10th&11th northwest airlines",
      location: {
        center: [-149.85762, 61.16364],
        zoom: 10.8,
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
      id: "50s60s",
      alignment: "right",
      hidden: false,
      title: "1950-1969: A Period of Steady Growth",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
        center: [-149.85762, 61.16364],
        zoom: 10.8,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "anch61-69",
          opacity: 1,
          duration: 7000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "oilyears",
      alignment: "right",
      hidden: false,
      title: "1970-89: The Oil Years",
      //image: "data/images/pipelineworkers.jpg",
      description:
        "Oil ramps up, pipeline approved then built, Anchorage remains economic hub and headquarters",
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
          opacity: 1,
          duration: 7000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "oilyears2",
      alignment: "right",
      hidden: false,
      //title: "Oil Years: Construction",
      image: "data/images/pipelineworkers.jpg",
      description:
        "Workers 2 weeks on 2 weeks off, families, many stay permanently",
      location: {
        center: [-149.87969, 61.15596],
        zoom: 10.8,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "anch70-79",
          opacity: 1,
          duration: 7000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "oilyears3",
      alignment: "right",
      hidden: false,
      //title: "Third Title",
      image: "data/images/BPbldg.jpg",
      description:
        "oil production reaches all time peak in 1983, soon followed by all-time peak in residential construction. pop grows from 174k-226k.",
      location: {
        center: [-149.87969, 61.15596],
        zoom: 10.8,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "anch80-89",
          opacity: 1,
          duration: 7000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "90s2000s",
      alignment: "left",
      hidden: false,
      title: "1990-2003: The Final Years of Building Growth",
      image: "data/images/BPbldg.jpg",
      description:
        "oil production reaches all time peak in 1983, soon followed by all-time peak in residential construction. pop grows from 174k-226k.",
      location: {
        center: [-149.87969, 61.15596],
        zoom: 10.8,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "anch90-99",
          opacity: 1,
          duration: 7000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "just2000s",
      alignment: "left",
      hidden: false,
      //title: "1990-2003: The Final Years of Building Growth",
      image: "data/images/BPbldg.jpg",
      description:
        "oil production reaches all time peak in 1983, soon followed by all-time peak in residential construction. pop grows from 174k-226k.",
      location: {
        center: [-149.87969, 61.15596],
        zoom: 10.8,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "anch2000-2008",
          opacity: 1,
          duration: 7000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "2009-now",
      alignment: "fully",
      hidden: false,
      title: "A New Housing Crisis",
      image: "data/images/BPbldg.jpg",
      description:
        "Stagnation, decline. Bidding wars, severe shortage, echoes of 1940 only instead of a booming city, now a city in decline, forcing its residents out and dissuading new ones from coming in due to lack of any housing at all, let alone affordable",
      location: {
        center: [-149.87969, 61.15596],
        zoom: 10.8,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "anch2009-19",
          opacity: 1,
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
