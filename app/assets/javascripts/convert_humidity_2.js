$(function(){
  $('#temp2,#rh2').keyup(function(){
    // 正規表現　マイナス符号、半角数字、少数点
    this.value = this.value.replace(/[^-+0-9.]+/,'');
  });

  $('#convert2').on('click',function () {
    let temp2 = Number($('#temp2').val());
    let rh2 = Number($('#rh2').val());
    var a,
        m,
        tn,
        c,
        pws,
        pw,
        tempdp2,
        abt2,
        tempdp2Round,
        abt2Round;
    
    if( $('#temp2').val() == "" || $('#rh2').val() == ""){
      alert("エラー：温度と相対湿度は必須です");
      $('#tempdp1').text("");
      $('#abt1').text("");
    }
    else if ( rh2 < 0 || 100 < rh2 ){
      alert("エラー：相対湿度は0%〜100%の範囲内で入力してください");
      $('#tempdp1').text("");
      $('#abt1').text("");
    }
    else {
      if (-70 <=temp2&&temp2 < 0){
        a = 6.114742,
        m = 9.778707,
        tn = 273.1466
      }
      else if(0 <=temp2&&temp2 < 50){
        a = 6.116441,
        m = 7.591386,
        tn = 240.7263
      }
      else if(50 <=temp2&&temp2 < 100){
        a = 6.004918,
        m = 7.337936,
        tn = 229.3975
      }
      else if(100 <=temp2&&temp2 < 150){
        a = 5.856548,
        m = 7.27731,
        tn = 225.1033
      }
      else if(150 <=temp2&&temp2 < 200){
        a = 6.002859,
        m = 7.290361,
        tn = 227.1704
      }
      else if(200 <=temp2&&temp2 < 350){
        a = 9.980622,
        m = 7.388931,
        tn = 263.1239
      }
      else if( temp2 < -70 ){
        alert("エラー：温度-70℃以下には対応していません");
        $('#tempdp1').text("");
        $('#abt1').text("");
      }
      else {
        alert("エラー：温度350℃以上には対応していません");
        $('#tempdp1').text("");
        $('#abt1').text("");
      }

      c = 2.16679,
      pws = a * Math.pow(10, (m * temp2 / (temp2 + tn)));
      pw = pws * rh2 / 100;
      tempdp2 = tn / ((m / Math.log10(pw / a)) -1);
      abt2 = c * pw *100 / (temp2 + 273.15);

      tempdp2Round = tempdp2.toFixed(1);
      abt2Round = abt2.toFixed(2);

      $('#tempdp2').text(tempdp2Round);
      $('#abt2').text(abt2Round);
    }
  })
});
