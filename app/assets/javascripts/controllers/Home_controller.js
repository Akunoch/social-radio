App.controller('HomeCtrl', ['$scope','Facebook','getuserInfos',function ($scope,Facebook,getuserInfos) {

		$scope.userinfos = getuserInfos.dataObj;

		console.log($scope.userinfos.userID)
		Facebook.api(
		    "/" + $scope.userinfos.userID,
		    function (response) {
		      if (response && !response.error) {
		       $scope.prenom = response.first_name;
		       $scope.nom = response.last_name;
		        /* handle the result */
		      }
		    }
		);


        $scope.sample = [{
			autor : "Adrian Pellegrini",
			likes : [],
			comment : "du gros son !!",
			title : "All day nigga",
			id : "UfQOawFwx6w",
			commentaires : [{
				autor:"Aurélien Pacard",
				date:"01-10-2015",
				content:"Vraiment à chier"				
				},
				{
				autor:"Maxence",
				date:"23-02-2015",
				content:"Pas mal"				
				}]
		},
		{
			autor : "Aurélien Pacard",
			likes : [],
			comment : "A ecouter absolument !",
			title : "Jack Da",
			id : "NsJVVqYF7bM",
			commentaire : null
		}];


	  	$scope.LikesUp = function(){
	  		$scope.likes.push("Aurélien Pacard")
	  		console.log($scope.likes)
	  	}

	  	function shuffle(array) {
		  var currentIndex = array.length, temporaryValue, randomIndex ;

		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {

		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		  }

		  return array;
		}

		$scope.sample = shuffle($scope.sample)



		$scope.videoId = $scope.sample[0].id;
        $scope.autor = $scope.sample[0].autor;
        $scope.likes = $scope.sample[0].likes;
        $scope.comment = $scope.sample[0].comment;
        $scope.title = $scope.sample[0].title;
        $scope.zaten = $scope.sample[0].zaten;
        
        
        $scope.playerVars = {
    		controls: 0,
    		autoplay: 1,
    		rel:0,
    		iv_load_policy:3
		};

		$scope.$on('youtube.player.ended', function ($event, player) {
	    // play it again
	        $scope.autor = $scope.sample[1].autor;
	        $scope.likes = $scope.sample[1].likes;
	        $scope.comment = $scope.sample[1].comment;
	        $scope.title = $scope.sample[1].title;
	        $scope.zaten = $scope.sample[1].zaten;

		    $scope.videoId = $scope.sample[1].id;
		    player.playVideo();
	  	});

    }]);


