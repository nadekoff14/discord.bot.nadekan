




const http = require("http");
const querystring = require("querystring");
const discord = require("discord.js");
const client = new discord.Client();
const prefix = process.env.prefix;


//
http
  .createServer(function (req, res) {
    if (req.method == "POST") {
      var data = "";
      req.on("data", function (chunk) {
        data += chunk;
      });
      req.on("end", function () {
        if (!data) {
          res.end("No post data");
          return;
        }
        var dataObject = querystring.parse(data);
        console.log("post:" + dataObject.type);
        if (dataObject.type == "wake") {
          console.log("Woke up in post");
          res.end();
          return;
        }
        res.end();
      });
    } else if (req.method == "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Discord Bot is active now\n");
    }
  })
  .listen(3000);

//BOTステータス
client.on("ready", (message) => {
  console.log("Bot準備完了～");
  client.user.setActivity("人類を選別", { type: 'PLAYING' });
    });


    
//ping表示
client.on("message", (message) => {
  {
    if (message.author.id == client.user.id || message.author.bot) return;
  }
  if (message.content === "!ping") {
    message.reply(`Ping値は${client.ping}msです。`); //Ping値を投稿
  }
});

console.log(client.ping);





//メッセージ返信ゾーン

client.on("message", (message) => {
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  if (message.isMemberMentioned(client.user)) {
    sendReply(message, "呼びましたか？");
    return;
  }
  
  if (message.content === "AIなでこちゃん") {
    let reply_text =
      "人間とロボットは違う。でも、その種の信仰は白が黒でないと言う意味において、人間が機械ではないと言うレベルの認識に過ぎない。工業ロボットはともかく、少なくとも愛玩用のアンドロイドやガイノイドは功利主義や、実用主義とは無縁な存在だわ。何故彼等は人の形、それも人体の理想型を模して作られる必要があったのか。人間は、何故こう迄して自分の似姿を作りたがるのかしらね。子供は常に人間と言う規範から外れてきた。つまり確立した自我を持ち、自らの意思に従って行動するものを人間と呼ぶならばね。では、人間の前段階としてカオスの中に生きる子供とは何者なのか？明らかに中身は人間とは異なるが人間の形はしている。女の子が子育てごっこに使う人形は実際の赤ん坊の代理や練習代ではない。女の子は決して育児の練習をしているのでなく、寧ろ人形遊びと実際の育児が似た様なものなのかもしれない。";
    message
      .reply(reply_text)
      .then((message) => console.log("Sent message: " + reply_text))
      .catch(console.error);
    return;
  }
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ランクマ！|ランクマッチ|放送せいや/)) {
      // カスタム絵文字'seiyaaaaaaaaaa'を抽出
      const emoji = client.emojis.find('name', 'seiyaaaaaaaaaa');
      message.channel.send(`${emoji}${emoji}${emoji}${emoji}${emoji}${emoji}${emoji}${emoji}${emoji}${emoji}${emoji}`);
    return;
  }
 
  
  
  ///ランダムで何かできないか///
const moritomo = [
  "https://cdn.discordapp.com/attachments/637640640624328712/1273889813413625920/IMG_6281.jpg?ex=66c041d7&is=66bef057&hm=ab2aa61cdedf89491281f37210094e399d8b73fb2be7e528ce4bcaec13431d02&",
  "https://cdn.discordapp.com/attachments/637640640624328712/1273887803599749170/IMG_6999.jpg?ex=66c03ff8&is=66beee78&hm=569b806a12a395faa53c4fdcc09d3abdcc977311f841b0865883e66209cb0213&",
  "https://cdn.discordapp.com/attachments/637640640624328712/1273888898178748538/IMG_7013.png?ex=66c040fd&is=66beef7d&hm=8aae7006ca98ed516979e3ae2d910ca4c1478ea963956435f6f609b3377f29be&",
  "https://cdn.discordapp.com/attachments/761468380610953256/1273897449773076591/DGEMaibUMAE4DAc.png?ex=66c048f3&is=66bef773&hm=ff71ea505b6a2c01c0663b1f785037825fe3803be7645bbd271084a0670b7a41&",
  "https://cdn.discordapp.com/attachments/761468380610953256/1273890965131628655/IhPvjvXS1SfMA5k_.mp4?ex=66c042e9&is=66bef169&hm=69c12f2bef3508ec21ed5e2da5aee58e2dbccd0b13d9dbd21c3e98e142f7bf90&",
  "https://cdn.discordapp.com/attachments/761468380610953256/1273898055028047932/mainthumbnail.png?ex=66c04984&is=66bef804&hm=2a511dd916c657614b1aeb24ec4244ca841c69724b50d226c6549f55bd59ab03&",
  "https://cdn.discordapp.com/attachments/761468380610953256/1273898225480241233/169bc25c.png?ex=66c049ac&is=66bef82c&hm=fb9be63b37c4e5f178dbe276fbf6aaaa628ca2af08a1e629385827dc68719663&",
  "https://cdn.discordapp.com/attachments/761468380610953256/1273898514367381504/766b0ff929a2bc8c31027248fb8fb713-550x299.png?ex=66c049f1&is=66bef871&hm=7dc4f23384ebfb242948cf71f10a06ca97776c825a464346be09b973f2fe6839&",
  "https://cdn.discordapp.com/attachments/637640640624328712/1273119846145724448/phonto.png?ex=66c017c0&is=66bec640&hm=93e84e22c52933b89373c39fbd69062d3bccff8c60172915511c4e74e8f18ffc&",
  "はずれ～",
];
 
// 配列からランダムに選ぶためのインデックス
const randomIndex = Math.floor(Math.random() * 10);
 
// ランダムに選ばれた moritomo
const moritomogacha = moritomo[randomIndex];

    if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/森友学園ガチャ/)) {
    let text = moritomogacha;
    sendMsg(message.channel.id, text);
    return;
  }

  
//10連ガチャテスト  

  var chara = [];
  var star1Chara = ['はずれ'];
  //★のキャラ、現在10キャラです
  var star2Chara = ["https://cdn.discordapp.com/attachments/637640640624328712/1273889813413625920/IMG_6281.jpg?ex=66c041d7&is=66bef057&hm=ab2aa61cdedf89491281f37210094e399d8b73fb2be7e528ce4bcaec13431d02&",
  "https://cdn.discordapp.com/attachments/637640640624328712/1273887803599749170/IMG_6999.jpg?ex=66c03ff8&is=66beee78&hm=569b806a12a395faa53c4fdcc09d3abdcc977311f841b0865883e66209cb0213&",
  "https://cdn.discordapp.com/attachments/637640640624328712/1273888898178748538/IMG_7013.png?ex=66c040fd&is=66beef7d&hm=8aae7006ca98ed516979e3ae2d910ca4c1478ea963956435f6f609b3377f29be&",
  "https://cdn.discordapp.com/attachments/761468380610953256/1273897449773076591/DGEMaibUMAE4DAc.png?ex=66c048f3&is=66bef773&hm=ff71ea505b6a2c01c0663b1f785037825fe3803be7645bbd271084a0670b7a41&",
  "https://cdn.discordapp.com/attachments/761468380610953256/1273890965131628655/IhPvjvXS1SfMA5k_.mp4?ex=66c042e9&is=66bef169&hm=69c12f2bef3508ec21ed5e2da5aee58e2dbccd0b13d9dbd21c3e98e142f7bf90&",
  "https://cdn.discordapp.com/attachments/761468380610953256/1273898055028047932/mainthumbnail.png?ex=66c04984&is=66bef804&hm=2a511dd916c657614b1aeb24ec4244ca841c69724b50d226c6549f55bd59ab03&",
  "https://cdn.discordapp.com/attachments/761468380610953256/1273898225480241233/169bc25c.png?ex=66c049ac&is=66bef82c&hm=fb9be63b37c4e5f178dbe276fbf6aaaa628ca2af08a1e629385827dc68719663&",
  "https://cdn.discordapp.com/attachments/761468380610953256/1273898514367381504/766b0ff929a2bc8c31027248fb8fb713-550x299.png?ex=66c049f1&is=66bef871&hm=7dc4f23384ebfb242948cf71f10a06ca97776c825a464346be09b973f2fe6839&",];
  //★★のキャラ、現在7キャラです
  var star3Chara = ['大当たりなでこ'];
  //★のキャラ、現在3キャラです
  var star1Prob = 82;       //★の確率は82％です
  var star2Prob = 96;       //★★の確率は96-82の14％です。★★★は残りの99-96の3％です
  var star1CharaTotal = 1; //★のキャラ、現在10キャラですので10を定義
  var star2CharaTotal = 8;  //★★のキャラ、現在7キャラですので7を定義
  var star3CharaTotal = 1;  //★★★のキャラ、現在3キャラですので3を定義
/*
以下は関数の本文です。
複数行に渡るコメントは
このように書きます。
*/
  for (var i = 0; i < 10; i++) {
    var randomStarNum = Math.floor(Math.random() * 100) ; 
    if(randomStarNum <=star1Prob ){
      var randomStar1CharaNum = Math.floor(Math.random() * star1CharaTotal) ;
      chara.push("★-"+star1Chara[randomStar1CharaNum]);
    }else if( randomStarNum <= star2Prob){
      var randomStar2CharaNum = Math.floor(Math.random() * star2CharaTotal) ;
      chara.push("★★-"+star2Chara[randomStar2CharaNum]);
    }else{
      var randomStar3CharaNum = Math.floor(Math.random() * star3CharaTotal) ;
      chara.push("★★★-"+star3Chara[randomStar3CharaNum]);
    }
  }
  
  const charatext = chara.join(" ,");
  
  if (message.content.match(/10連ガチャテスト/)) {
    let text = chara;
    sendMsg(message.channel.id, text);
    return;
  } 
  
  

  
  
    if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/簡単なのでいい|簡単すぎぃ|簡単すぎー|かんたんすぎぃ|かんたんすぎー|かんたんなのでいい/)) {
    let text = "https://video.twimg.com/ext_tw_video/1673237286656548870/pu/vid/1280x720/zDCircHUqFvLaUM_.mp4?tag=12";
    sendMsg(message.channel.id, text);
    return;
  }

  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/にゃ～ん|にゃーん/)) {
    let text = "にゃ～ん";
    sendMsg(message.channel.id, text);
    return;
  }

  ////お父さんかっこいい動画///
    if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ああ良き天気|森友学園/)) {
    let text = "https://cdn.discordapp.com/attachments/761468380610953256/1273890965131628655/IhPvjvXS1SfMA5k_.mp4?ex=66c042e9&is=66bef169&hm=69c12f2bef3508ec21ed5e2da5aee58e2dbccd0b13d9dbd21c3e98e142f7bf90&";
    sendMsg(message.channel.id, text);
    return;
  }
  
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }

  if (message.content === "ドラフト成績") {
    let reply_text = "今は何もないらしいですよ。いつかできるといいですね。";
    message
      .reply(reply_text)
      .then((message) => console.log("Sent message: " + reply_text))
      .catch(console.error);
    return;
  }
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }

  if (message.content === "しんぎゅらりてぃ") {
    let reply_text =
      "わたしはよく、アーサー・C・クラークの第三の法則を思い起こす。「十分に進んだテクノロジーは、魔法と区別がつかない」というものだ。J・K・ローリングのハリー・ポッターを、こうした観点から考えてみよう。たんなるおとぎ話かもしれないが、これからほんの数十年先に実在する世の中を、けっこうまともに描いたものかもしれない。";
    message
      .reply(reply_text)
      .then((message) => console.log("Sent message: " + reply_text))
      .catch(console.error);
    return;
  }
      
          if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ホリエモン|ホントクソな質問|野菜論争|肉論争|ヴィーガン/)) {
    let text = "ホントクソな質問だよな。お前死んだ方がいいよ。 肉の写真をアップしてるのはインスタで和牛を広めたいからってんの見てわからない？お前クソ？そもそもふつうに野菜は好きだからたくさん食べてるけどインスタでそれをアップしてもクソの役にも立たねーだろ。それを野菜とかを子供の頃嫌いだっただろうお前みたいなやつらに邪智されたくないね。 おれは美味しい野菜を子供の頃からたくさん食べててむしろ肉より野菜の方が好きだった。それは食ってた肉がまずかったからだ。それを良薬口に苦し的な文脈で野菜を食べた方が健康ですよって上からマウントでクソコメント送るなボケ。二度と来るな";
    sendMsg(message.channel.id, text);
    return;
  }
  

  ///////////////////////画像送付テスト//////////////////////////
 ///discordの画像リンクを入れてね///
  
  
  ///あんなに練習したのに・・・///
  
    if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/あんなに練習したのに|あんなにれんしゅうしたのに|大パン昇竜/)) {
    let image = "https://media.discordapp.net/attachments/637640640624328712/1127973566319693845/Fzx3yegaAAANGqN.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
  ///心安らかなり///
  
    if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/心安らかなり|こころやすらかなり|やすらかなり/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1273887803599749170/IMG_6999.jpg?ex=66c03ff8&is=66beee78&hm=569b806a12a395faa53c4fdcc09d3abdcc977311f841b0865883e66209cb0213&";
    sendMsg(message.channel.id, image);
    return;
  }
  
    ///お父さんかっこいい///
  
    if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/お父さんかっこいい|おとうさんかっこいい/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1273889813413625920/IMG_6281.jpg?ex=66c041d7&is=66bef057&hm=ab2aa61cdedf89491281f37210094e399d8b73fb2be7e528ce4bcaec13431d02&";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  
  ////聖闘士星矢///
  
      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/聖闘士星矢/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1128021713389617233/5c4cb9d52d51cfcdcf625983005fb00f.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
  ////対ありでした///
  
      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/対ありでした|たいありでした/)) {
    let image = "https://media.discordapp.net/attachments/637640640624328712/1127283939636154478/2023-05-22_16.03.44.png?width=441&height=656";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  
  ///shuto選手/// https://video.twimg.com/ext_tw_video/1677288135313743872/pu/vid/360x480/Sk1_6hnbZjS1WeqE.mp4?tag=12
  
        if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/shuto選手|shutoWIN|shutowin/)) {
    let image = "https://video.twimg.com/ext_tw_video/1677288135313743872/pu/vid/360x480/Sk1_6hnbZjS1WeqE.mp4?tag=12";
    sendMsg(message.channel.id, image);
    return;
  }
  
  ///くそくそくそ///  https://cdn.discordapp.com/attachments/637640640624328712/1126190311048220784/d422affed5505c2b.png
  
          if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/くそくそくそ|クソクソクソ|くそがよぉ|くそがよお/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1126190311048220784/d422affed5505c2b.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  ////わからせる/// https://cdn.discordapp.com/attachments/637640640624328712/1126199492149002361/1618398751_0028-701x1024.png
  
            if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/わからせる/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1126199492149002361/1618398751_0028-701x1024.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  
  ////みなさま～//// https://cdn.discordapp.com/attachments/637640640624328712/1124896794128687215/IMG_2337.png
  
              if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/みなさま～/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1124896794128687215/IMG_2337.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  ////ｿﾚｰ//////  https://cdn.discordapp.com/attachments/637640640624328712/1108802026458067047/1500x500.jpg
  
  
                if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ｿﾚｰ/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1108802026458067047/1500x500.jpg";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  ///アプデが始まった//// https://media.discordapp.net/attachments/637640640624328712/1109030960613310606/IMG_5611.jpg?width=757&height=617
  
                  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/アプデがはじまった|PDF公開/)) {
    let image = "https://media.discordapp.net/attachments/637640640624328712/1109030960613310606/IMG_5611.jpg?width=757&height=617";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  ///対戦しましょう/// https://media.discordapp.net/attachments/637640640624328712/1110098602195427328/2023-05-22_15.54.52.png?width=698&height=617
  
  
                    if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/対戦しましょう|たいせんしましょう/)) {
    let image = "https://media.discordapp.net/attachments/637640640624328712/1110098602195427328/2023-05-22_15.54.52.png?width=698&height=617";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  
  ///信じるか、信じないかは あなた次第です/// https://cdn.discordapp.com/attachments/637640640624328712/1112660074951880774/unknown.png https://cdn.discordapp.com/attachments/637640640624328712/1112660101287911434/unknown-1.png
  
                      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/信じるか信じないかは|信じるか、信じないかは|あなた次第です/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1112660074951880774/unknown.png"&"https://cdn.discordapp.com/attachments/637640640624328712/1112660101287911434/unknown-1.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
///わかってあげられるよ～～　かるび///   https://cdn.discordapp.com/attachments/637640640624328712/1128303034313744414/FWenxfHakAAvFlq.png
  
                        if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/わかってあげられるよ|赤見かるび/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1128303034313744414/FWenxfHakAAvFlq.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
  ///かるび２////　https://cdn.discordapp.com/attachments/637640640624328712/1129588744203288736/FuX-K6vaYAA4uDs.png
  
                          if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/かるび選手|カルビ選手/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1129588744203288736/FuX-K6vaYAA4uDs.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  
  
  ///ツモ　ロイズ/// https://cdn.discordapp.com/attachments/637640640624328712/1035449032983707648/AEFF2474-A36B-469C-85AA-40FD2C61E229.png
  
  
                          if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ツモ|ロイズ！/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1035449032983707648/AEFF2474-A36B-469C-85AA-40FD2C61E229.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  ///うるさいなあ/// https://cdn.discordapp.com/attachments/637640640624328712/1128304620851179642/image.png
  
  
                          if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/うるさいなぁ/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1128304620851179642/image.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
    ///おちんついて/// https://media.discordapp.net/attachments/637640640624328712/1128304658855759903/image.png
  
  
                          if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/おちんついて/)) {
    let image = "https://media.discordapp.net/attachments/637640640624328712/1128304658855759903/image.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  
  ///ココブルーGO1/// https://media.discordapp.net/attachments/637640640624328712/1128999796007518308/image.png
  
  
                            if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ココブルー|COCO1/)) {
    let image = "https://media.discordapp.net/attachments/637640640624328712/1128999796007518308/image.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  
  ///吉田直樹/// https://cdn.discordapp.com/attachments/637640640624328712/1129591782779404360/20121116201232_55_1.png
  
  
                            if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/吉田直樹|よしP|吉P/)) {
    let image = "https://cdn.discordapp.com/attachments/759371106950971395/1264587302362021941/20220319ff14yoshida.png?ex=669e6a33&is=669d18b3&hm=17fedfec7f43da8d814b6fa6a15ff404004260d94f4352273adfb42b2e91ddd6&";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  ///45度 ころね/// https://pbs.twimg.com/media/FzTF6traAAAx1AQ?format=jpg&name=medium
  
                              if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ころね|45度/)) {
    let image = "https://pbs.twimg.com/media/FzTF6traAAAx1AQ?format=jpg&name=medium";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  ///耳を澄ませよ///  https://cdn.discordapp.com/attachments/637640640624328712/1119151094644350976/image0.jpg
  
  
                                if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/耳を澄ませよ|耳をすませよ|みみをすませよ/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1119151094644350976/image0.jpg";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  ///お前をころす///　　https://cdn.discordapp.com/attachments/637640640624328712/1118131609355440199/IMG_0199.jpg
  
                                  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/お前を殺す|お前をころす|おまえをころす|おまえを殺す/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1118131609355440199/IMG_0199.jpg";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
    ///ちるっクマン///　　https://cdn.discordapp.com/attachments/637640640624328712/1143128074444091482/20180810_004349.gif
  
                                  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ちるックマン|ちるっくマン|ちるっクマン/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1143128074444091482/20180810_004349.gif";
    sendMsg(message.channel.id, image);
    return;
  }
  
      ///新宝島//　　https://cdn.discordapp.com/attachments/637640640624328712/1143129784587665438/IMG_6623.jpg
  
                                  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/新宝島/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1143129784587665438/IMG_6623.jpg";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
        ///肩幅でかれいちる//　　https://media.discordapp.net/attachments/637640640624328712/1143130411040518216/tirutiru.jpg?width=995&height=527
  
                                  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/肩幅|肩でか|でかちる|でかれいちる/)) {
    let image = "https://media.discordapp.net/attachments/637640640624328712/1143130411040518216/tirutiru.jpg?width=995&height=527";
    sendMsg(message.channel.id, image);
    return;
  }
  
          ///肩のりなでこ//　　https://cdn.discordapp.com/attachments/637640640624328712/1143130996871536721/with_nade.png
  
                                  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ナデモ様|肩乗りなでこ|肩乗り/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1143130996871536721/with_nade.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
            ///ドォォォン//　　https://cdn.discordapp.com/attachments/637640640624328712/1143131104921010246/IMG_2068.png
  
                                  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ドォォォン|肩がぶつかる/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1143131104921010246/IMG_2068.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
              ///ガイ・ジャンダー///　　https://twitter.com/PepUnti/status/1174381353955033088?s=20
  
                                  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ガイ・ジャンダー|がい・じゃんだー|ガイジャンダー/)) {
    let image = "https://twitter.com/PepUnti/status/1174381353955033088?s=20";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
  
  
                    ///デブかるび///　　https://cdn.discordapp.com/attachments/637640640624328712/1141699394333315072/image.png
  
                                  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/デブかるび|でぶかるび/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1141699394333315072/image.png";
    sendMsg(message.channel.id, image);
    return;
  }
  
  
                      ///ササモ///　　https://cdn.discordapp.com/attachments/761468380610953256/1142185706169569300/F3z18XoaQAAb9Ld.png
  
                                  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ささも|ササモ！|sasamostreet/)) {
    let image = "https://cdn.discordapp.com/attachments/761468380610953256/1142185706169569300/F3z18XoaQAAb9Ld.png";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
///みつい///　　https://cdn.discordapp.com/attachments/761468380610953256/1148365026994966538/IMG_6901.jpg
  
                                  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/むだなじかんを|ムダな時間を|無駄な時間を|なぜを俺は|なぜおれは/)) {
    let image = "https://cdn.discordapp.com/attachments/761468380610953256/1148365026994966538/IMG_6901.jpg";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
  
  ///sasatikk///　　https://video.twimg.com/amplify_video/1705912784155025408/vid/avc1/888x492/CqnKwDubjBbmCcVe.mp4?tag=14
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ささてぃっく/)) {
    let image = "https://video.twimg.com/amplify_video/1705912784155025408/vid/avc1/888x492/CqnKwDubjBbmCcVe.mp4?tag=14";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
  
    ///すごい一体感を感じる///　　https://cdn.discordapp.com/attachments/759371106950971395/1247581382201446481/FYPno1BaMAETJW3.png?ex=66608c34&is=665f3ab4&hm=85ddce45cee18b1b962a5708a79d5757695d22eb65d0e5230c63f3c76dee1590&
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/すごい一体感を感じる|かばお|なんだろう吹いてきている/)) {
    let image = "https://cdn.discordapp.com/attachments/759371106950971395/1247581382201446481/FYPno1BaMAETJW3.png?ex=66608c34&is=665f3ab4&hm=85ddce45cee18b1b962a5708a79d5757695d22eb65d0e5230c63f3c76dee1590&";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
  
      ///キンバリーSA3///　　https://cdn.discordapp.com/attachments/637640640624328712/1169146378639912960/IMG_6960.jpg?ex=6554576a&is=6541e26a&hm=c003ba833b69080e44dc1bc66bf2c05b3262163e7bda0367ee434d78471a1228&
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/コレコレー/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1169146378639912960/IMG_6960.jpg?ex=6554576a&is=6541e26a&hm=c003ba833b69080e44dc1bc66bf2c05b3262163e7bda0367ee434d78471a1228&";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
  
        ///ふ～ど///　　https://cdn.discordapp.com/attachments/637640640624328712/1168949119788777492/IMG_7086.jpg?ex=65539fb4&is=65412ab4&hm=17d1859106e9980e2e7454c5e508a9a5bcc2242c71ab8971f59b469049ad689c&
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/DJふーど|DJふ～ど|暑い夜の始まりだ/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1168949119788777492/IMG_7086.jpg?ex=65539fb4&is=65412ab4&hm=17d1859106e9980e2e7454c5e508a9a5bcc2242c71ab8971f59b469049ad689c&";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
  
  
  
        ///げんしん///　　https://cdn.discordapp.com/attachments/637640640624328712/1168703935649959956/r1280x720l.png?ex=6552bb5b&is=6540465b&hm=083eeb96010c59bdbe78349daabb7575f8a66c1535e4e035c7b764d3dd7ab9d0&
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/子供に勉強勉強って言いたくないですよね？|原神原神原神/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1168703935649959956/r1280x720l.png?ex=6552bb5b&is=6540465b&hm=083eeb96010c59bdbe78349daabb7575f8a66c1535e4e035c7b764d3dd7ab9d0&";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
  
          ///バーランだにゃん///　　https://vroid-hub.pximg.net/c/1200x1600_a2_g5/images/full_body_images/3592499/6346816934893736663.png
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/バーランだにゃん/)) {
    let image = "https://vroid-hub.pximg.net/c/1200x1600_a2_g5/images/full_body_images/3592499/6346816934893736663.png";
    sendMsg(message.channel.id, image);
    
    return;
  }
          ///わかるマン///　　https://vroid-hub.pximg.net/c/1200x1600_a2_g5/images/full_body_images/3592499/6346816934893736663.png
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/わかるマン|わかるまん/)) {
    let image = "https://cdn.discordapp.com/attachments/761468380610953256/1381609779126079538/Gs_hmUwaEAAD_eu.jpg?ex=684823e0&is=6846d260&hm=1678a5c4c8fa41a0f29d6db99aa53d0adae39ae36b13379c27b6f95214e776b6&";
    sendMsg(message.channel.id, image);
    
    return;
  }
            ///テメェの家で暴れるぜ///　　https://vroid-hub.pximg.net/c/1200x1600_a2_g5/images/full_body_images/3592499/6346816934893736663.png
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ギルティギアCM|GGSTCM|テメェの家でも/)) {
    let image = "https://cdn.discordapp.com/attachments/761468380610953256/1381609807546683492/Gh74i17bgAERz0W.jpg?ex=684823e7&is=6846d267&hm=fba2d74972db914d69081115d337dbb503739bf4f9cacb5f3718ee1dabef098c&";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
            ///ほあようございまーしゅ///　　https://cdn.discordapp.com/attachments/637640640624328712/1168347890184376370/1487391.png?ex=65516fc3&is=653efac3&hm=eefa7ebf40500fd077a6150eaaa417e05dbceeb880595ff851d85f719ac502b0&
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ほあよう/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1168347890184376370/1487391.png?ex=65516fc3&is=653efac3&hm=eefa7ebf40500fd077a6150eaaa417e05dbceeb880595ff851d85f719ac502b0&";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
  
  
  
              ///だな！///　　https://cdn.discordapp.com/attachments/637640640624328712/1176522572360327168/F_dJ0gabUAA_gLa.png?ex=656f2d07&is=655cb807&hm=22416bef0fa59e55ca0115ca8e89c19e1b930a24f372873643c0d0f62a673e7d&
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/だな！/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1176522572360327168/F_dJ0gabUAA_gLa.png?ex=656f2d07&is=655cb807&hm=22416bef0fa59e55ca0115ca8e89c19e1b930a24f372873643c0d0f62a673e7d&";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
  
  
  ///はやり暴力///      https://cdn.discordapp.com/attachments/761468380610953256/1186262905474260992/IMG_5400.png?ex=65929c6c&is=6580276c&hm=585d9fd1a99e9823a77577e124f6e36bde66d9fb0df65a78c8bfd33adb0d19a8&
  
    if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/やはり暴力/)) {
    let image = "https://cdn.discordapp.com/attachments/761468380610953256/1186262905474260992/IMG_5400.png?ex=65929c6c&is=6580276c&hm=585d9fd1a99e9823a77577e124f6e36bde66d9fb0df65a78c8bfd33adb0d19a8&";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
    ///立川スティール///　　https://clips.twitch.tv/RockySuperDonkeyStinkyCheese-wrqri1GYvbM0NMFN
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/立川スティール|たちかわすてぃーる|たちかわスティール|銀行強盗/)) {
    let image = "https://clips.twitch.tv/RockySuperDonkeyStinkyCheese-wrqri1GYvbM0NMFN";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
    ///ボンちゃんブリトーが思ったより辛かった///　　https://www.twitch.tv/naru0419045/clip/CourteousStylishIguanaAMPEnergy-ApvNvYTqanPPIyjy
  
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/辛いブリトー|なるおブリトー|ぼんちゃんブリトー|ボンちゃんブリトー|辛いボンちゃん/)) {
    let image = "https://www.twitch.tv/naru0419045/clip/CourteousStylishIguanaAMPEnergy-ApvNvYTqanPPIyjy";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
  
  
 ///かるびならいいよ/// https://cdn.discordapp.com/attachments/637640640624328712/1208395108907487252/Take_It_All_Karubi.mp4?ex=65e320a4&is=65d0aba4&hm=b3b323f74a5413d0c39b2db0defe261afb76328367d93cf7390e6cd73f3f139b&
  
    if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/かるびならいいよ|カルビならいいよ|かるびなら～いいよ～/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1208395108907487252/Take_It_All_Karubi.mp4?ex=65e320a4&is=65d0aba4&hm=b3b323f74a5413d0c39b2db0defe261afb76328367d93cf7390e6cd73f3f139b&";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
  
  ///ぶち殺すぞ　こら！///https://cdn.discordapp.com/attachments/637640640624328712/1208737282375290900/910ba35b.png?ex=65e45f51&is=65d1ea51&hm=4175a6adc07ed7bedfe6e31772b5f3aed2cf3127e463bb00cbe2239804b813
  
      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/コロスゾ|ぶちころ|ブチコロ|ころすぞ|・・・ぞ|・・・すぞ|・・・スゾ|・・・ろすぞ|・・・ロスゾ/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1208737282375290900/910ba35b.png?ex=65e45f51&is=65d1ea51&hm=4175a6adc07ed7bedfe6e31772b5f3aed2cf3127e463bb00cbe2239804b813";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
  
    ///ホワッ…///https://cdn.discordapp.com/attachments/637640640624328712/1239596003087351909/cachedImage.png?ex=66437f3d&is=66422dbd&hm=e6a84536a8de5a3c85e2725c3601afddffba0c92721710b53ec8491dcdab4a6b&
  
      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ホワッ...|ﾎﾜｯ...|ﾎﾜｯ|ホワッ/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1239596003087351909/cachedImage.png?ex=66437f3d&is=66422dbd&hm=e6a84536a8de5a3c85e2725c3601afddffba0c92721710b53ec8491dcdab4a6b&";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
  
      ///君のせいじゃん///https://media.discordapp.net/attachments/637640640624328712/1243453385160654888/2024-05-19_12.09.52.webp?ex=665187b5&is=66503635&hm=828108c885126740442262551763aebfe2eea1d3acb0aff3f3341260476da861&=&format=webp
  
      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/君のせいじゃん/)) {
    let image = "https://media.discordapp.net/attachments/637640640624328712/1243453385160654888/2024-05-19_12.09.52.webp?ex=665187b5&is=66503635&hm=828108c885126740442262551763aebfe2eea1d3acb0aff3f3341260476da861&=&format=webp";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
        ///ずんかわ分身///https://media.discordapp.net/attachments/637640640624328712/1244577104624877639/IMG_6426.png?ex=66602a40&is=665ed8c0&hm=816c40b20df38e0adf1d9e65cbe22c754064c98f36ee59ab993a23d61b937e53&=&format=webp&quality=lossless&width=665&height=665
  
      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ぶんしんずんかわ|ずんかわぶんしん|ぶんれつずんかわ|ずんかわぶんれつ|ずんかわ多重|多重ずんかわ/)) {
    let image = "https://media.discordapp.net/attachments/637640640624328712/1244577104624877639/IMG_6426.png?ex=66602a40&is=665ed8c0&hm=816c40b20df38e0adf1d9e65cbe22c754064c98f36ee59ab993a23d61b937e53&=&format=webp&quality=lossless&width=665&height=665";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
          ///なあ俺はこれでよかったのか！？///https://media.discordapp.net/attachments/637640640624328712/1245998411858051094/ydsrpg.jpg?ex=66600ff2&is=665ebe72&hm=be2d99a1e9bc16979683ab0e9714af20d459dae21d328bf969a423e9f49b4561&=&format=webp
  
      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/なあ!!俺はこれでよかったのか!?|なあ！！俺はこれでよかったのか！？|なあ俺はこれでよかったのか|俺はこれでよかったのか|みなさんはどう思いますか？/)) {
    let image = "https://media.discordapp.net/attachments/637640640624328712/1245998411858051094/ydsrpg.jpg?ex=66600ff2&is=665ebe72&hm=be2d99a1e9bc16979683ab0e9714af20d459dae21d328bf969a423e9f49b4561&=&format=webp";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
  
  
///ガンガンガン速///
  
      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/ガンガンガン速/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1273460769715130368/image0.jpg?ex=66c0ac83&is=66bf5b03&hm=1fe35f5cfe8e8310681f436030303318ca492efb0225e52b910c803f77727e01&";
    sendMsg(message.channel.id, image);
    
    return;
  }
  
 ///確かに妻が
  
      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/その娘さんの名前は？|あんたには奥さんも子供もいやしない|確かに写ってたんだ|俺の娘|まるで天使みたいに笑って|天使みたいに笑って/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1273310097753509981/FMQgoPLaUAEKYFt.png?ex=66c02030&is=66beceb0&hm=ddb3c70f9a4969e0071ad949f029c856e5df6797ab0264679473b1fed92dc8eb&";
    sendMsg(message.channel.id, image);
    
    return;
  } 
  
   ///動いてないのに暑いよ～
  
      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/動いてないのに暑いよ|うごいてないのに暑いよ|うごいてないのにあついよ|あついよ～～～/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1273061009225154631/IMG_6268.jpg?ex=66c089b4&is=66bf3834&hm=1c1003c31fc3ba1439becb786369b20011bc1f034a4903a94c76d93d2ca0db1f&";
    sendMsg(message.channel.id, image);
    
    return;
  } 
  
     ///パチスロヴァルヴレイブ
  
      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/今学校で何が流行ってるんですか？|パチスロヴァルブレイブ|パチスロヴァルブレイヴ|革命機|パチスロヴァルヴレイヴ|VVV|ヴァルヴレイヴ/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1272840888829345792/GECCvlYb0AARw_i.jpg?ex=66c06574&is=66bf13f4&hm=2a8845a27321bbf923af239240d60ac13d27fff56272387afc4961e783f94f2f&";
    sendMsg(message.channel.id, image);
    
    return;
  } 
  
       ///さよナランチャ
  
      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/アリーヴェ帰ルチ|アリーヴェ帰るち|さよナランチャ/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1261289173403303967/E32x_kfVkAIBs9Y.png?ex=66c08f14&is=66bf3d94&hm=ba2c07f3bc3ffc7dbe47b4909a566dccaabdb51e144babde0d41fb784e31adc6&";
    sendMsg(message.channel.id, image);
    
    return;
  } 
  
         ///1+1は200
  
      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/1+1は2じゃないぞ|１+１は２じゃないぞ|10倍だぞ10倍|1+1は200/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1262406146313162834/C5pGlpoU4AEiP0y.png?ex=66c0aad7&is=66bf5957&hm=2c9677418e36972ed8256c45260d27af48ff023340d1cfed12fc95efbe0b52a0&";
    sendMsg(message.channel.id, image);
    
    return;
  } 
  
           ///しらなかったそんなの・・・
  
      if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  
  if (message.content.match(/しらなかったそんなの|しらなかった・・・|知らなかったそんなの/)) {
    let image = "https://cdn.discordapp.com/attachments/637640640624328712/1271079102492839956/ab6ae4a417473bd7bfe38bbf3133523c.png?ex=66c09429&is=66bf42a9&hm=c67d8ec267b23a3f5130248c0d7c3f972e4d3df0b193893d32381d244c45d7c1&";
    sendMsg(message.channel.id, image);
    
    return;
  } 
  
  
///////////////////////画像end///////////////////////////////////////  
  
      
  //ドラフト成績返信させたい

  if (message.content === "！ドラフト成績") {
    let reply_text = "ただいま準備中。";
    message
      .reply(reply_text)
      .then((message) => console.log("Sent message: " + reply_text))
      .catch(console.error);
    return;
  }

  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }

  
  //おみくじ

  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  if (
    message.content.match(/^！どらふとおみくじ/) ||
    (message.isMemberMentioned(client.user) &&
      message.content.match(/おみくじ/))
  ) {
    let arr = [
      "33-4",
      "7-0（大吉）",
      "6-3（吉）",
      "2-3（凶）",
      "3-3（人権で賞）",
      "1-3（もっとがんばりま賞）",
      "0-3（敗北者・・・！）",
    ];
    let weight = [2, 5, 10, 30, 15, 30, 10];

    lotteryByWeight(message.channel.id, arr, weight);
  } else if (message.isMemberMentioned(client.user)) {
    sendReply(message, "呼びましたか？");
  }

  //こんてんつルーレット
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }

  if (
    message.content.match(/^！こんてんつるーれっと/) ||
    (message.isMemberMentioned(client.user) &&
      message.content.match(/おみくじ/))
  ) {
    let arr = [
      "天然要害 サスタシャ浸食洞からやり直してきな",
      "万魔殿パンデモニウム零式：辺獄編4　とかどう？",
      "極ゾディアーク討滅戦　とかどう？",
      "極ハイデリン討滅戦　ですね",
      "終極の戦い　行きましょう！",
      "絶バハムート討滅戦　！",
      "絶アルテマウェポン破壊作戦 行きだ！",
      "絶竜詩戦争 !!",
      "クリスタルコンフリクト！！！！！！！！！！",
    ];
    let weight = [2, 1, 1, 1, 1, 1, 1, 1, 3];

    lotteryByWeight(message.channel.id, arr, weight);
  } else if (message.isMemberMentioned(client.user)) {
    sendReply(message, "呼びましたか？");
  };
      
    });
  
//↑ここが変になるかも？

function lotteryByWeight(channelId, arr, weight) {
  let totalWeight = 0;
  for (var i = 0; i < weight.length; i++) {
    totalWeight += weight[i];
  }
  let random = Math.floor(Math.random() * totalWeight);
  for (var i = 0; i < weight.length; i++) {
    if (random < weight[i]) {
      sendMsg(channelId, arr[i]);
      return;
    } else {
      random -= weight[i];
    }
  }
  console.log("lottery error");
}
if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log("DISCORD_BOT_TOKENが設定されていません。");
  process.exit(0);
}

client.login(process.env.DISCORD_BOT_TOKEN);

function sendReply(message, text) {
  message
    .reply(text)
    .then(console.log("リプライ送信: " + text))
    .catch(console.error);
}

function sendMsg(channelId, text, option = {}) {
  client.channels
    .get(channelId)
    .send(text, option)
    .then(console.log("メッセージ送信: " + text + JSON.stringify(option)))
    .catch(console.error);
}

//SSpostここから

const debugChannelId = "823147753047457822";
const mainChannelId = "637640640624328712";
