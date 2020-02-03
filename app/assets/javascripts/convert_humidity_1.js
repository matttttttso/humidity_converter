$(function(){
  $('#temp1,#rh1').keyup(function(){
    // 正規表現　マイナス符号、半角数字、少数点
    this.value = this.value.replace(/[^-+0-9.]+/,'');
  });

  $('#convert1').on('click',function () {
    let temp1 = Number($('#temp1').val());
    let rh1 = Number($('#rh1').val());
    var a,
        m,
        tn,
        c,
        pws,
        pw,
        tempdp1,
        abt1,
        tempdp1Round,
        abt1Round;

    if( $('#temp1').val() == "" || $('#rh1').val() == ""){
      alert("エラー：温度と相対湿度は必須です");
      $('#tempdp1').text("");
      $('#abt1').text("");
    }
    else if ( rh1 < 0 || 100 < rh1 ){
      alert("エラー：相対湿度は0%〜100%の範囲内で入力してください");
      $('#tempdp1').text("");
      $('#abt1').text("");
    }
    else {
      if (-70 <=temp1&&temp1 < 0){
        a = 6.114742,
        m = 9.778707,
        tn = 273.1466;
      }
      else if(0 <=temp1&&temp1 < 50){
        a = 6.116441,
        m = 7.591386,
        tn = 240.7263;
      }
      else if(50 <=temp1&&temp1 < 100){
        a = 6.004918,
        m = 7.337936,
        tn = 229.3975;
      }
      else if(100 <=temp1&&temp1 < 150){
        a = 5.856548,
        m = 7.27731,
        tn = 225.1033;
      }
      else if(150 <=temp1&&temp1 < 200){
        a = 6.002859,
        m = 7.290361,
        tn = 227.1704;
      }
      else if(200 <=temp1&&temp1 < 350){
        a = 9.980622,
        m = 7.388931,
        tn = 263.1239;
      }
      else if( temp1 < -70 ){
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
      pws = a * Math.pow(10, (m * temp1 / (temp1 + tn)));
      pw = pws * rh1 / 100;
      tempdp1 = tn / ((m / Math.log10(pw / a)) -1);
      abt1 = c * pw *100 / (temp1 + 273.15);

      tempdp1Round = tempdp1.toFixed(1);
      abt1Round = abt1.toFixed(2);

      $('#tempdp1').text(tempdp1Round);
      $('#abt1').text(abt1Round);
    }
  })
});
