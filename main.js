//クリックされたら動作する

function errorInput(){
    console.log(document.getElementById("month").value)
    console.log(document.getElementById("day").value)

    const month = document.getElementById("month").value
    const day = document.getElementById("day").value

    console.log("month:",month,"day:"day)
    
}
//document.getElementById("month")はタグを確認するだけ
//valueはそのタグの値を示す

/*
javaScriptのプログラムとHTMLファイルはどこで対応しているか
タグのついているIDで紐づく
タグの中にある付加情報のことを属性という
*/