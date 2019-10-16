
<style>
	* {
		/* border:1px solid red; */
	
	}
	/* # symbol matches against id elements */
	#flowerImage {
	/* Height and Width of images  */
		width: 128px;
		height: 128px;
	}
	#container{
		display: grid;
		/* pixel numbers are the starting pixels from left pixels going out from starting point to right*/ 
		grid-template-columns: 150px 150px ;
		
	}
</style>
</head>

<body>
	<h1> My Page </h1>
	<div><a href = "other.html">Other Page</a>

	<!-- Puts the two id's of content and flowerImage in one div container -->
	<div id = "container">
		<!-- Initializaing the flowerImage id and source file -->
		<img id = "flowerImage"src = "flower1.jpg">
		<!-- Initializing div id and content block -->
		<div id = "content">
			Hello out there!
		</div>
	</div>

	<div>
		Hope you come back!
	</div>
<script>
	// An unamed function that will take contents out of global namespace
	(function(){
		// Set variable's equal to id's
		let content            = document.getElementById('content');
		let flowerImage        = document.getElementById('flowerImage');	
		// Initial states of image and div block
		let flowerImageChecked = false;
		content.style.display  = "none";
		// A function to toggle or change the source file of the flowerImage id
		function toggleFlower(){
			if (flowerImageChecked){
				flowerImage.src    = "flower1.jpg";
				flowerImageChecked = false;
				// modify the style attribute of content
				content.style.display = "none";
				}else{
				flowerImage.src    = "flower2.jpg";
				flowerImageChecked = true;
				content.style.display = "block";
				}
			}
		// Calls the toggleFlower function when user clicks inside the floweImage id
		flowerImage.addEventListener('click', toggleFlower);
		
		})();
</script>


</body>
</html>
