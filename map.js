var map = L.map('map', {
    center: [40.7864, -119.2064],
    zoom: 5,

})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const pct = L.esri.featureLayer({
    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/stelprdb5332131(PCT)/FeatureServer/0?token=ZALHDVTMnRr_XJ1u3R8YwutGcfbeKFo54Ret-JYkPItc2ipEkEr7PSYz2K5SLF0JIqOPKy4KczW7dN5VZ8vHNuOqlwIpJPHsfCp_Hk07eGjwUxWOF5cKFs8VTmW-4zIp13zLKF3pCC6rL2pmTtQSsRURXVQPKpz6dEwT-hB5_4oY5OybAGnnoTZje70Cw6Tbs0cRJpylukoHlCQKSKe_bnd3s94s9jhEuaUOdCD9Qh0YVAmz6rKHAaYjZk12Ew0U-AE4WV-3WCLED_4Sc8lyew..',
    style: function (feature) {
        return {
            color: 'red', weight: 2, 
        }
    }
}).addTo(map);




L.marker([32.589, -116.467]).addTo(map)
    .bindPopup('Southern Terminus, Campo, CA <img src="https://photos.thetrek.co/wp-content/uploads/2014/10/PCT-southern-terminus.jpg" style="width: 100%; height:100%";">');

L.marker([49.000, -120.799]).addTo(map)
    .bindPopup('Northern Terminus, <br> E.C. Manning Provincial Park <img src="https://www.pcta.org/wp-content/uploads/2019/01/16.jpg" style="width: 100%; height:100%";">');

L.marker([36.694, -118.373]).addTo(map)
    .bindPopup('Highest Point, Forester Pass, CA <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/View_from_Forester_Pass.jpg" style="width: 100%; height:100%";">');

L.marker([45.662, -121.896]).addTo(map)
    .bindPopup('Lowest Point, Cascade Locks, OR <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/BridgeOfTheGods2.jpg" style="width: 100%; height:100%";">');

L.marker([40.213, -121.354]).addTo(map)
    .bindPopup('Middle Point, <br> Lassen Volcanic National Park, CA <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Broken_face_of_Brokeoff_Mountain.jpg" style="width: 100%; height:100%";">');


var popup = L.popup();
