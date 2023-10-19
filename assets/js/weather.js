$(document).ready(function() {
    // Đặt API Key của bạn ở đây
    var apiKey = 'eac0291bdbdc4ac2af6192836231910';

    // Lấy thẻ input và nút tìm kiếm theo id
    var cityInput = $('#citySearchName');
    var searchButton = $('#searchButton');
    var weatherDescription = $('#weatherDescription');
    var atmosphericPressure = $('#atmosphericPressure');
    var uvIndex = $('#uvIndex');
    var sunriseTime = $('#sunriseTime');
    var sunsetTime = $('#sunsetTime');
    var cloudCover = $('#cloudCover');
    var fog = $('#fog');

    // Lấy các phần tử HTML để cập nhật thông tin thời tiết
    var cityNameElement = $('#cityName');
    var localTimeElement = $('#localTime');
    var tempElement = $('#temp');
    var weatherIconElement = $('#weatherIcon');
    var precipElement = $('#precip');
    var humidityElement = $('#humidity');
    var windSpeedElement = $('#windSpeed');

    // Tạo hàm để lấy và cập nhật thông tin thời tiết cho một thành phố cụ thể
    function getWeatherInfo(city) {
        // Tạo URL yêu cầu API
        var apiUrl = 'http://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + city + '&lang=vi';

        // Gửi yêu cầu AJAX
        $.ajax({
            url: apiUrl,
            dataType: 'json',
            success: function(data) {
                // Cập nhật các phần tử HTML với thông tin thời tiết mới
                cityNameElement.text(data.location.name);
                localTimeElement.text(data.location.localtime);
                tempElement.text(data.current.temp_c + '°C');
                weatherIconElement.attr('src', '//' + data.current.condition.icon);
                precipElement.text(data.current.precip_mm + ' mm');
                humidityElement.text(data.current.humidity + '%');
                windSpeedElement.text(data.current.wind_kph + ' km/h');
                weatherDescription.text(data.current.condition.text);
                atmosphericPressure.text(data.current.pressure_mb + ' hPa');
                uvIndex.text(data.current.uv);
                sunriseTime.text(data.current.sunrise);
                sunsetTime.text(data.current.sunset);
                cloudCover.text(data.current.cloud + '%');
                fog.text(data.current.fog ? 'Có' : 'Không có');
            },
            error: function(error) {
                console.log(error);
            }
        });
    }

    // Mặc định, hiển thị thông tin thời tiết cho Hà Nội khi trang web được load
    getWeatherInfo('Ha Noi');

    // Đặt sự kiện cho nút tìm kiếm
    searchButton.on('click', function() {
        // Lấy giá trị thành phố từ thẻ input
        var city = cityInput.val();

        // Kiểm tra xem có giá trị thành phố không
        if (city !== '') {
            // Lấy và cập nhật thông tin thời tiết cho thành phố được tìm kiếm
            getWeatherInfo(city);
        }
    });
});
