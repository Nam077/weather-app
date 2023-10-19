$(document).ready(function() {
    // Đặt API Key của bạn ở đây
    var apiKey = 'eac0291bdbdc4ac2af6192836231910';

    // Lấy thẻ input và nút tìm kiếm theo id
    var cityInput = $('#citySearchName');
    var searchButton = $('#searchButton');
    var weatherDescription = $('#weatherDescription');
    // Lấy các phần tử HTML để cập nhật thông tin thời tiết
    var cityNameElement = $('#cityName');
    var localTimeElement = $('#localTime');
    var tempElement = $('#temp');
    var weatherIconElement = $('#weatherIcon');
    var precipElement = $('#precip');
    var humidityElement = $('#humidity');
    var windSpeedElement = $('#windSpeed');

    // Mảng hướng gió tiếng Việt
    var windDirections = [
        'Bắc', 'Bắc-Bắc Đông', 'Bắc Đông', 'Đông-Bắc Đông', 'Đông', 'Đông-Nam Đông', 'Đông Nam', 'Nam-Đông Nam',
        'Nam', 'Nam-Đông Tây', 'Nam Tây', 'Tây-Nam Tây', 'Tây', 'Tây-Bắc Tây', 'Tây Bắc', 'Bắc-Tây Bắc'
    ];

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
                // Cập nhật các thông tin thời tiết bổ sung
                $('#feelsLike').text(data.current.feelslike_c + '°C');
                $('#windDirection').text(windDirections[Math.floor((data.current.wind_degree % 360) / 22.5)]);
                $('#pressure').text(data.current.pressure_mb + ' mb');
                $('#precipitation').text(data.current.precip_mm + ' mm');
                $('#visibility').text(data.current.vis_km + ' km');
                $('#uvIndex').text(data.current.uv);
                $('#windGust').text(data.current.gust_kph + ' km/h');
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công!',
                    text: 'Tìm kiếm thành công!',
                });

            },
            error: function(error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Không tìm thấy thành phố!',
                })
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
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Bạn chưa nhập tên thành phố!',
            })

        }
    });
});
