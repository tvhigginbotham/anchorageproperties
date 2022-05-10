import $ from "jquery";
import L from "leaflet";
import data from "./data/resi-cleaned.csv";
import GeoJSON from "geojson";

var map = L.map("map").setView([61.17024, -149.910765], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

GeoJSON.parse(data);

L.marker([61.17024, -149.910765])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();

console.log($.fn.jquery);
