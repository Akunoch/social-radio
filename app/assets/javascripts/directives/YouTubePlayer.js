App.directive('myYoutubeplayer', function() {
    return {
    restrict: 'EA',
    replace:true,
    template: '<div id="ytplayer"></div>',
    scope:{
      'videoid':'='
    },
    link: function(scope, element, attrs){ 
       //récupérer les dimensions de l'espace 
       console.log("in the directive")
       scope.$watch('videoid', function() {

        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        console.log(firstScriptTag.parentNode.insertBefore(tag, firstScriptTag))
        // Replace the 'ytplayer' element with an <iframe> and
        // YouTube player after the API code downloads.
        var player;
        function onYouTubePlayerAPIReady() {
          player = new YT.Player('ytplayer', {
            height: '390',
            width: '640',
            playerVars : {
              'autoplay':1
            }
          })};
          console.log(player)
      });
}}});  