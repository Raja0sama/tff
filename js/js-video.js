var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player("ytplayer", {
    width: "60%",
    height: "60%",
    videoId: "fu0grHSeDk8",
    playerVars: {
      autoplay: 1,
      showinfo: 0,
      autohide: 1,
      loop: 1,
      start: 5,
      controls: 0,
      modestbranding: 1,
      vq: "hd1080",
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  player.mute();
}
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    player.seekTo(0);
    player.playVideo();
  }
}
function stopVideo() {
  player.stopVideo();
}

console.clear();
