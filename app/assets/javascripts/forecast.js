$(function(){
  $('#get-forecast').on('click',function () {
    
    let url1 = "http://api.openweathermap.org/data/2.5/weather?id=";
    let url2 = $('select[name=location] option:selected').val();
    let url3 = "&appid=";
    let url4 = "&lang=ja&units=metric";
    const appkey = gon.app_key;
    let url = url1 + url2 + url3 + appkey + url4;

    console.log(url);

    $.ajax({
      url: url,
      dataType: 'json',
    })
    .done(function(json){
      // $("#location").html($('select[name=location] option:selected').text());
      $("#location").html(json.name);
      $("#description").html(json.weather[0].description);
      $("#forecast-temp").html(Math.round(json.main.temp));
      $("#forecast-rh").html(json.main.humidity);
      switch (json.weather[0].main){
        case 'Clear':
          $("#icon").html("<img src='http://openweathermap.org/img/wn/01d@2x.png' >");
        break;
        case 'Clouds':
          $("#icon").html("<img src='http://openweathermap.org/img/wn/02d@2x.png' >");
        break;
        case 'Drizzle':
          $("#icon").html("<img src='http://openweathermap.org/img/wn/09d@2x.png' >");
        break;
        case 'Rain':
          $("#icon").html("<img src='http://openweathermap.org/img/wn/10d@2x.png' >");
        break;
        case 'Thunderstorm':
          $("#icon").html("<img src='http://openweathermap.org/img/wn/11d@2x.png' >");
        break;
        case 'Snow':
          $("#icon").html("<img src='http://openweathermap.org/img/wn/13d@2x.png' >");
        break;
        case 'Mist':
        case 'Smoke':
        case 'Haze':
        case 'Dust':
        case 'Fog':
        case 'Sand':
        case 'Ash':
        case 'Squall':
        case 'Tornado':
          $("#icon").html("<img src='http://openweathermap.org/img/wn/50d@2x.png' >");
        break;
      }
    })
    .fail(function() {
      alert("エラー：天気の取得に失敗しました");
    });
  })
});
