let audio = document.getElementById("audio");
audio.ontimeupdate = function () {
  current_time();
};
const play_music = () => {
  $("#play").on("click", () => {
    $(".button_play_pause").html("");
    let str = `  <button class="button_pause" id="pause">
                <i class="fa fa-pause-circle fa-5x"></i>
                </button>`;
    $(".button_play_pause").append(str);
    audio.play();
    current_time(audio.ontimeupdate);
    pause_music();
  });
};

const pause_music = () => {
  $("#pause").on("click", () => {
    let str = `  <button class="button_pause" id="play">
      <i class="fa fa-play-circle fa-5x"></i>
      </button>`;
    $(".button_play_pause").html("");
    $(".button_play_pause").append(str);
    audio.pause();
    play_music();
  });
};

const checkApprox = (num1, num2, epsilon = 0.04) => {
  return Math.abs(num1 - num2) < epsilon;
};

const current_time = () => {
  for (let i = 0; i <= lyric.length; i++) {
    if (Math.ceil(lyric[i].k[0].times) === Math.ceil(audio.currentTime)) {
      if (audio.currentTime <= Math.ceil(lyric[i].subject)) {
        $(".lyric_print").html("");
        for (let j = 0; j <= lyric[i].k.length - 1; j++) {
          console.log(lyric[i].k[j].lyric.length);
          let str = ` <span id=span_${j}>${lyric[i].k[j].lyric}</span> `;
          $(".lyric_print").append(str);
          setTimeout(function () {
            $(`#span_0`).css("color", "red");
            setTimeout(function () {
              $(`#span_1`).css("color", "red");
              setTimeout(function () {
                $(`#span_2`).css("color", "red");
                setTimeout(function () {
                  $(`#span_3`).css("color", "red");
                  setTimeout(function () {
                    $(`#span_4`).css("color", "red");
                    setTimeout(function () {
                      $(`#span_5`).css("color", "red");
                      setTimeout(function () {
                        $(`#span_6`).css("color", "red");
                        setTimeout(function () {
                          $(`#span_7`).css("color", "red");
                          setTimeout(function () {
                            $(`#span_8`).css("color", "red");
                            setTimeout(function () {
                              $(`#span_9`).css("color", "red");
                              setTimeout(function () {
                                $(`#span_10`).css("color", "red");
                                setTimeout(function () {
                                  $(`#span_11`).css("color", "red");
                                }, 300);
                              }, 300);
                            }, 300);
                          }, 300);
                        }, 300);
                      }, 300);
                    }, 300);
                  }, 300);
                }, 300);
              }, 300);
            }, 300);
          }, 100);
        }
      }

      pause_music();
      play_music();
    }
  }
};

const allScript = () => {
  play_music();
  current_time();
};
allScript();
