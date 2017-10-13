(function() {
var width = 400;
var height = 400;
// ステージを作る
var stage = new PIXI.Stage(0x000000);
// レンダラーを作る
var renderer = PIXI.autoDetectRenderer(width, height);
// レンダラーのviewをDOMに追加する
document.getElementById("pixiview").appendChild(renderer.view);


// テキストオブジェクトを作る
var word = "Hello World!";
var style = {font:'bold 60pt Arial', fill:'white'};
var textobj = new PIXI.Text(word, style);
textobj.position.x = 60;
textobj.position.y = height / 2;

// テキストオブジェクトをステージに乗せる
stage.addChild(textobj);

// アニメーション関数を定義する
function animate(){
    requestAnimationFrame(animate); // 次の描画タイミングでanimateを呼び出す
    textobj.rotation += 0.001; // テキストを回転する
	
  	textobj.position.x += 12;
  	if(textobj.position.x > 600){
  		textobj.position.x = -450;
  	}
	
    renderer.render(stage);   // 描画する
}

// 次のアニメーションフレームでanimate()を呼び出してもらう
requestAnimationFrame(animate);
});
