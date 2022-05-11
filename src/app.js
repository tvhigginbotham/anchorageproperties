// import $ from "jquery";
import L from "leaflet";
import GeoJSON from "geojson";

async function main() {
  var map = L.map("map").setView([61.17024, -149.910765], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  var data = await import("./data/short-resi.csv");
  var jsonData = GeoJSON.parse(data, { Point: ["lat", "lng"] });
  console.log(jsonData);
  L.geoJSON(jsonData).addTo(map);
}

main();
