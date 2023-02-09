let audio = document.getElementById("audio");

//process audio ontimes update
audio.ontimeupdate = function () {
  current_time();
};

//process it's click button Play
const play_music = () => {
  $("#play").on("click", () => {
    //event onclick
    $(".button_play_pause").html(""); //remove all html in class  button_play_pause
    let str = `  <button class="button_pause" id="pause">
                <i class="fa fa-pause-circle fa-5x"></i>
                </button>`;
    $(".button_play_pause").append(str); // append button pause
    audio.play(); //play audio

    current_time(audio.ontimeupdate); // pass an always up-to-date parameter function current_time()
    pause_music(); // call  the function to wait to be activated
  });
};

const pause_music = () => {
  $("#pause").on("click", () => {
    //event onclick
    let str = `  <button class="button_pause" id="play"> 
      <i class="fa fa-play-circle fa-5x"></i>
      </button>`;
    $(".button_play_pause").html(""); //remove all html in class  button_play_pause
    $(".button_play_pause").append(str); // append button play
    audio.pause(); //pause audio
    play_music(); // call  the function to wait to be activated
  });
};

//process Time sub audio
const current_time = () => {
  for (let i = 0; i <= lyrics.length - 1; i++) {
    if (
      Math.ceil(lyrics[i].data[0].times) <= Math.ceil(audio.currentTime) &&
      audio.currentTime <= Math.ceil(lyrics[i].timeEnd)
    ) {
      // condition if time in data  confirm less than or equal to the time on the song and  the time on the song less than or equal times end one row lyric
      $(".lyric_print").html(""); //remove Lyric in html
      $(".lyric_print_pre").html("");
      for (let j = 0; j <= lyrics[i].data.length - 1; j++) {
        let str = ` <span class="after-changed-color" id='span_${j}'>
          ${lyrics[i].data[j].lyric}
        </span> `;
        $(".lyric_print").append(str); //append each element the song
        let str1 = ` <span class="after-changed-color" id='span${i}_${j}'>
          ${lyrics[i + 1].data[j].lyric}
        </span> `;
        $(".lyric_print_pre").append(str1); //append each element the song
        let lyric_replace = lyrics[i].data[j].lyric.split("");
        for (let l = 0; l <= lyric_replace.length; l++) {
          //process sub element the song changed color
          if (
            (lyric_replace.length === l &&
              audio.currentTime.toFixed(3) >=
                Number(lyrics[i].data[j].times).toFixed(3) +
                  Number(
                    Number(
                      Number(
                        Number(lyrics[i].data[j + 1].times) -
                          Number(lyrics[i].data[j].times)
                      ) / Number(lyric_replace.length).toFixed(3)
                    ) * j
                  )) ||
            audio.currentTime.toFixed(3) >= Number(lyrics[i].timeEnd)
          ) {
            {
              // $(`#span_${j}`).animate({color:'red'},100)
              $(`#span_${j}`).removeClass("after-changed-color"); // color red by the time in lyric song === current time
              $(`#span_${j}`).addClass("changed-color"); // color red by the time in lyric song === current time
            }
          }
        }
      }
      pause_music();
      play_music();
    }
  }
};
//event mouseleave
$(".background").on("mouseleave", () => {
  setTimeout(function () {
    $("#audio").addClass("d-none");
    $("#pause").addClass("d-none");
    $("#play").addClass("d-none");
  }, 200);
});

//event mouseenter
$(".background").on("mouseenter", () => {
  setTimeout(function () {
    $("#audio").removeClass("d-none");
    $("#pause").removeClass("d-none");
    $("#play").removeClass("d-none");
  }, 200);
});
const allScript = () => {
  play_music();
};
allScript();
