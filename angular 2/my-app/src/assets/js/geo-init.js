module.exports = function initGeoMap(ele, data) {
    alert("initGeoMap");
    google.load('visualization', '1', { 'packages': ['geochart'] });
    google.setOnLoadCallback(drawVisualization);
    data = data;

    function drawVisualization() {
        var data = google.visualization.arrayToDataTable(data);

        var opts = {
            region: 'IN',
            displayMode: 'regions',
            resolution: 'provinces',
            width: 640,
            height: 480
        };
        var geochart = new google.visualization.GeoChart(ele);
        geochart.draw(data, opts);
    }
};