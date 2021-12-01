<script>
    import {onMount} from "svelte"

    onMount(()=> {
        //Default zoom
        let defaultZoom = 13

        //Predefine latitude and longitude for certain locations -- negative numbers for W and S
        let latlonTremont = [40.5275, -89.4926]

        //Set up map - initialize with Tremont lat/lon
        let mainMap = L.map("map").setView(latlonTremont, defaultZoom)

        //Mapbox map tiles
        let tilesMapbox = {
            url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
            options: {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoiandydW5nZSIsImEiOiJja3VvOGFraXEwZmZoMm5wZnhicnIyNnM1In0.H2NTwP-5gNZMYl5wCo5xSw'
            }
        }

        //Function to switch map tileset
        function switchTileset(tileset) {
            L.tileLayer(tileset.url, tileset.options).addTo(mainMap);
        }

        //Default tileset to Mapbox
        switchTileset(tilesMapbox)

        //Functions to set latitude and longitude based on input values
        function changeLatLon() {
            //Change sign of the lat/lon value based on cardinal value
            let latitude = latCardinal.value === 'n' ? latDegrees.value : latDegrees.value * -1
            let longitude = lonCardinal.value === 'e' ? lonDegrees.value : lonDegrees.value * -1

            //Set view and zoom
            mainMap.setView([latitude, longitude])
        }
    })
</script>

<div class="map-container">
    <div id="map"></div>
</div>

<style lang='scss'>
    .map-container, #map {
        width: 100%;
        height: 100%;
        z-index: 1;
    }
</style>