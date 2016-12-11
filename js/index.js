$(function() {
    httpReq();
});

function httpReq() {
    var xhr = $.ajax({
        url: 'http://peter279k.com/disaster_water_data/water.php',
        dataType: "json",
        success: function(response) {
            $("#response-result").html("Your response origint url is: " + response['dataset']['@xmlns']);
        },
        error: function(error) {
            $("#response-result").html('Fetching the water data is failed.');
        },
        complete: function() {}
    });

    return xhr;
}
