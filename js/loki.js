var name;
var mybtn = document.getElementById("btn");
mybtn.addEventListener("click", start);
function gameplay() {
  Swal.fire({
    title: '情侶闖關遊戲—尋找愛情之路',
    text: '請輸入角色名字',
    input: 'text',
    inputValue: '小辣椒',
    showLoaderOnConfirm: true,
    confirmButtonText: '我取好了',
    cancelButtonText: '略過',
    showCancelButton: true,
    allowOutsideClick: false
  }).then(function (result) {
    if (result.dismiss === 'cancel') {
      name = "阿明";
      Swal.fire({
        title: `不想輸入?別怕~~我不是死神`,
        text: `那就叫你${name}吧，阿明開始闖關吧`,
        allowOutsideClick: false,
        imageUrl: 'files/00.jpg',
        imageHeight: 300
      }).then(start);
    }
    else {
      name = result.value;
      Swal.fire({
        title: `${name}，這名字聽起來就很可愛！`,
        text: '請開始闖關挑戰',
        allowOutsideClick: false,
        imageUrl: 'files/01.jpg',
        imageHeight: 300
      }).then(start);
    }
  });
}
function start() {
  let mission;
  Swal.fire({
    title: `勇者${name}\n你即將進入了充滿陷阱的迷宮..`,
    text: "一旦選錯路就會馬上GG，你要開始了嗎?",
    confirmButtonText: '出發！',
    cancelButtonText: '先不要..',
    showCancelButton: true,
    allowOutsideClick: false,
    imageUrl: 'files/10.jpg',
    imageHeight: 300,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33'
  }).then((result) => {
    if (result.dismiss === 'cancel') {
      Swal.fire({
        title: `等你準備好挑戰再來吧！`,
        allowOutsideClick: false,
        imageUrl: 'files/11.jpg',
        imageHeight: 300
      });
    }
    else {
      Swal.fire({
        title: `欣賞你的勇氣，開始闖五關吧！`,
        allowOutsideClick: false,
        imageUrl: 'files/12.gif',
        imageHeight: 300
      }).then(function () {
        Swal.fire({//lv1
          title: "第1關—初次相遇",
          text: "要不要參加福興25屆阿！",
          confirmButtonText: '去啦那次不去。',
          cancelButtonText: '不要好累喔，我好懶阿。',
          showCancelButton: true,
          allowOutsideClick: false,
          imageUrl: 'files/20.jpg',
          imageHeight: 300,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        }).then((result) => {
          if (result.dismiss === 'cancel') {
            Swal.fire({
              //B
              title: "GAME OVER",
              text: `因為你錯過如此帥氣又強壯的男朋友啦！`,
              confirmButtonText: "重新來過",
              allowOutsideClick: false,
              imageUrl: "files/21.png",
              imageHeight: 300
            });
          }
          else {
            Swal.fire({ //G
              title: "過關",
              text: "兩人種下愛情不滅的種子。",
              allowOutsideClick: false,
              imageUrl: 'files/22.jpg',
              imageHeight: 300
            }).then(function () {
              Swal.fire({//lv2
                title: "第2關—信任與建立",
                text: "要不要找堯堯來當火車頭阿？",
                confirmButtonText: '不要好了，別人比他適合。',
                cancelButtonText: '好啊！他很適合ㄝ。',
                showCancelButton: true,
                allowOutsideClick: false,
                imageUrl: 'files/30.JPG',
                imageHeight: 300,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
              }).then((result) => {
                if (result.dismiss !== 'cancel') {
                  Swal.fire({
                    //B
                    title: "GAME OVER",
                    text: "因為他才是唯一能讓你印象深刻的人。",
                    confirmButtonText: "重新來過",
                    allowOutsideClick: false,
                    imageUrl: "files/31.gif",
                    imageHeight: 300
                  });
                }
                else {
                  Swal.fire({ //G
                    title: "過關",
                    text: "兩人開始彼此互相幫助、了解",
                    allowOutsideClick: false,
                    imageUrl: 'files/32.jpg',
                    imageHeight: 300
                  }).then(function () {
                    Swal.fire({//lv3
                      title: "第3關—共同目標",
                      text: "我們一起把福興25屆的晚會給辦好吧！",
                      confirmButtonText: '我才不要😁️',
                      cancelButtonText: '當然這不是廢話！',
                      showCancelButton: true,
                      allowOutsideClick: false,
                      imageUrl: 'files/40.png',
                      imageHeight: 300,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33'
                    }).then((result) => {
                      if (result.dismiss !== 'cancel') {
                        Swal.fire({
                          //B
                          title: "GAME OVER",
                          text: "你錯過愛你得的人😢️",
                          confirmButtonText: "重新來過",
                          allowOutsideClick: false,
                          imageUrl: "files/41.gif",
                          imageHeight: 300
                        });
                      }
                      else {
                        Swal.fire({ //G
                          title: "過關",
                          text: "恭喜你成功收穫一段愛情😘️",
                          allowOutsideClick: false,
                          imageUrl: 'files/42.gif',
                          imageHeight: 300
                        }).then(function () {
                          Swal.fire({//lv4
                            title: "第4關—分離和重聚",
                            text: "他為了工作奮鬥，少了陪伴你的時光。",
                            confirmButtonText: '我不要你去。',
                            cancelButtonText: '去吧，我支持你。',
                            showCancelButton: true,
                            allowOutsideClick: false,
                            imageUrl: 'files/50.jpg',
                            imageHeight: 300,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33'
                          }).then((result) => {
                            if (result.dismiss !== 'cancel') {
                              Swal.fire({
                                //B
                                title: "GAME OVER",
                                text: "你成功將他綁在你身邊當小白臉啦😗️",
                                confirmButtonText: "重新來過",
                                allowOutsideClick: false,
                                imageUrl:
                                  "files/51.jpg",
                                imageHeight: 300
                              });
                            }
                            else {
                              Swal.fire({ //G
                                title: "過關",
                                text: "雖然他能陪伴你的時間不多，但是無時無刻都在想你😚️",
                                allowOutsideClick: false,
                                imageUrl: 'files/52.gif',
                                imageHeight: 300
                              }).then(function () {
                                Swal.fire({//lv5
                                  title: "第5關—愛情的勝利",
                                  text: "多益考到700分好難啊！",
                                  confirmButtonText: '沒問題的，我相信金色證書對我來說小意思🙂️',
                                  cancelButtonText: '不行啦，我沒有辦法😢️',
                                  showCancelButton: true,
                                  allowOutsideClick: false,
                                  imageUrl: 'files/60.gif',
                                  imageHeight: 300,
                                  confirmButtonColor: '#3085d6',
                                  cancelButtonColor: '#d33'
                                }).then((result) => {
                                  if (result.dismiss === 'cancel') {
                                    Swal.fire(
                                      {
                                        //B
                                        title:"GAME OVER",
                                        text:"因為你的沒自信，你錯過拿金色證書的機會。",
                                        confirmButtonText:"重新來過",
                                        allowOutsideClick: false,
                                        imageUrl:"files/61.gif",
                                        imageHeight: 300
                                      }
                                    );
                                  }
                                  else {
                                    Swal.fire({ //G
                                      title: "過關",
                                      text: "恭喜你拿到金色證書啦👍️",
                                      allowOutsideClick: false,
                                      imageUrl: 'files/62.jpg',
                                      imageHeight: 300
                                    }).then(function () {
                                      finish(1);
                                    });
                                  }
                                });
                              });
                            }
                          });
                        });
                      }
                    });
                  });
                }
              });
            });
          }
        });
      });
    }
  });
}
function finish(e) {
  if (e) {
    document.body.style.backgroundImage = "url('files/bg2.jpg')";
    mybtn.removeEventListener("click", start);
    mybtn.addEventListener("click", function(){
      window.location.assign("https://frankshen0121.github.io/520.github.io/");
    });
    mybtn.value = "恭喜過關，這是給你的禮物（點我）🥰️" 
    mybtn.style = "width:300px;height:50px";
  }
}
gameplay();
