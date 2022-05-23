/* global mapboxgl scrollama */
var config = {
  style: "mapbox://styles/tvhigginbotham/cl2jg1i9d00ve14o9jq9b1ua6",
  accessToken:
    "pk.eyJ1IjoidHZoaWdnaW5ib3RoYW0iLCJhIjoiY2wzZGt4eHc1MDFmdjNkbnY2c2FhMnJmYSJ9.zDJvq-KT0bjy9XsKoRcTCw",
  showMarkers: true,
  markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  title: "Anchorage Properties",
  subtitle: "A Century of Housing Crises (real title tk)",
  byline: "By Tim Higginbotham",
  footer:
    'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: "1915",
      alignment: "left",
      hidden: false,
      title: "Display Title",
      image: "./path/to/image/source.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location: {
        center: [-149.87969, 61.15596],
        zoom: 10.83,
        pitch: 0.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "tentcity",
      alignment: "right",
      hidden: false,
      title: "Tent City",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
        center: [-149.89716, 61.21848],
        zoom: 15.85,
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
          opacity: 0.75,
        },
      ],
      onChapterExit: [
        {
          layer: "anch1925",
          opacity: 0,
        },
      ],
    },
    {
      id: "conex",
      alignment: "left",
      hidden: false,
      title: "Third Title",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
        center: [-149.88701, 61.20743],
        zoom: 14.98,
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
      id: "fifties",
      alignment: "fully",
      hidden: false,
      title: "Third Title",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
        center: [-149.83956, 61.17567],
        zoom: 13.39,
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
      id: "sixties",
      alignment: "fully",
      hidden: false,
      title: "Third Title",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
        center: [-149.81274, 61.22457],
        zoom: 15.88,
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
      id: "seventies",
      alignment: "fully",
      hidden: false,
      title: "Third Title",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
        center: [-149.86241, 61.18855],
        zoom: 17.39,
        pitch: 60.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "eighties",
      alignment: "fully",
      hidden: false,
      title: "Third Title",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
        center: [-149.8827, 61.23403],
        zoom: 15.17,
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
      id: "now",
      alignment: "fully",
      hidden: false,
      title: "Third Title",
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
      onChapterEnter: [],
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
