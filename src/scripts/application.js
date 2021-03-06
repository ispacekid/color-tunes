// Generated by CoffeeScript 1.3.3

$(document).ready(function() {
  $(".playlist").addClass("closed hidden transition transition-height");
  return $(".cover-picker").on("click", "a", function(event) {
    var albumSelected, canvas, coverActive, coverAnchor, coverSelected, image, indicatorPosition, playlistHeight, switchPlaylistToAlbum, togglePlaylistForAlbum,
      _this = this;
    coverAnchor = this;
    coverSelected = coverAnchor.parentNode;
    coverActive = $(".cover-picker .active");
    albumSelected = coverAnchor.href.split('#')[1];
    indicatorPosition = coverSelected.offsetLeft + (coverSelected.offsetWidth / 2) - 15;
    playlistHeight = $(".playlist-inner")[0].getBoundingClientRect().height;
    function loadAlbumInfo(album) {
      var selectedAlbum = TRACK_INFO[album];
      $('.album-tracks').empty();
      $('.playlist-background .background-image').attr("src", selectedAlbum.cover);
      for(var i = 0; i < selectedAlbum.tracks.length; i++) {
        var track = selectedAlbum.tracks[i],
            trackListItem = $('<li>'),
            trackTitleItem = $('<h5>').addClass('track-title').text(track.title),
            trackPlaytimeItem = $('<span>').addClass('track-playtime').text(track.playtime);
        trackListItem.append(trackTitleItem).append(trackPlaytimeItem);
        trackListItem.appendTo('.album-tracks');
      }
      $('.album-artwork').attr("src", selectedAlbum.cover);
      $('.album-title').text(selectedAlbum.title);
      $('.album-artist .artist-name').text(selectedAlbum.artist);
      $('.album-artist .released-on').text("• " + selectedAlbum.release);
      if (selectedAlbum.tracks.length < 11) {
        $(".playlist").height(300);
      } else if (selectedAlbum.tracks.length < 16) {
        $(".playlist").height(350);
      } else {
        $(".playlist").height(400);
      };
      (function launchColorTunesLibrary() {
        var canvas = $('#album-canvas')[0],
            image = new Image();
        image.src = selectedAlbum.cover;
        ColorTunes.launch(image, canvas);
      })();
    };
    togglePlaylistForAlbum = function(album) {
      var isExpanding, targetHeight;
      isExpanding = $(".playlist").hasClass("closed");
      targetHeight = isExpanding ? $(".playlist").height : 0;
      if (isExpanding) {
        $(".playlist").removeClass("hidden");
        $(".playlist-indicator").removeClass("hidden").css("left", indicatorPosition);
      } else {
        $(".playlist").on("webkitTransitionEnd", function() {
          $(".playlist-indicator").addClass("hidden");
          return $(".playlist").addClass("hidden").off("webkitTransitionEnd");
        });
      }
      $(coverSelected).toggleClass("active");
      return $(".playlist").toggleClass("closed expanded").height(targetHeight);
    };
    switchPlaylistToAlbum = function(album) {
      $(coverActive).removeClass("active");
      $(coverSelected).addClass("active");
      return $(".playlist-indicator").css("left", indicatorPosition);
    };
    loadAlbumInfo(albumSelected);
    if (($(coverActive).length === 0) || (coverSelected === coverActive[0])) {
      togglePlaylistForAlbum(albumSelected);
    } else if ($(coverActive).length > 0) {
      switchPlaylistToAlbum(albumSelected);
    }
    coverAnchor.blur();
    event.preventDefault();
  });
});
