QUnit.test('Mock AJAX testing', function (assert) {
    assert.ok(true, 'The MOCK AJAX has been started.');
    var done = assert.async();

    $.mockjax({
        url: "http://peter279k.com/disaster_water_data/water.php",
        responseText: {
            dataset: {
                '@xmlns': "http://twd.water.gov.tw/opendata/wqb"
            }
        }
    });

    var xhr = httpReq();

    xhr.error(function(error) {
        $("#response-result").html('Fetching the water data is failed.');
        assert.equal($("#response-result").html(), 'Fetching water data is failed', 'expected the error message');
    }).success(function(response) {
        $("#response-result").html("Your response origint url is: " + response['dataset']['@xmlns']);
        assert.equal($("#response-result").html(), "Your response origint url is: " + response['dataset']['@xmlns'], 'expected the origin url from water data');
    }).complete(function() {
        done();
    });

});
