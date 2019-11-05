/* 
Colin Morris-Moncada
CSE 322 Web Page Programming
Lecture 9 "Canvas Javascript Application Code Only"
*/ 


// Defines a locally scoped function
(function(){
	// application object
	window.a ={};
	const canvas = document.getElementById('game');
	const ctx    = canvas.getContext('2d');
	
	function Text(text, x, y, color, font){
		this.text  = text  || '' 	      ;
		this.x	   = x     || 0		      ;
		this.y     = y     || 0		      ;
		this.color = color || "#000000"   ;
		this.font  = font  || "12px serif";
	}


	Text.prototype.draw = function(dt){
		ctx.fillStyle = this.color;
		ctx.font = this.font;
		ctx.fillText(this.text, this.x, this.y);
	}

	function Box(x, y, w, h, color) {
		this.x     = x     || 0            ;
    	this.y     = y     || 0            ;
    	this.w     = w     || 100          ;
    	this.h     = h     || 50           ;
    	this.color = color || "#000000"    ;
  	}

	Box.prototype.draw = function(t){
			ctx.fillStyle = this.color;
			ctx.fillRect = (this.x, this.y, this.w, this.h);
	}









	// Defines two game objects of text
	const t1 = new Text("Hi!", 100, 60, 'orange', '30px Arial');
	const t2 = new Text("Goodbye!", 200, 60, 'blue', );
	const t3 = new Text("House!", 300, 60, '30px Arial');
	const b1 = new Box (400, 60,6, 6);

	// Set's t to initial
	let t = 0;
	
	function loop(millis){
		// computes elapsed time since last frame
		const dt = millis / 1000 -t;
		t = millis / 1000;
		
	
	//clear viewport
	ctx.fillStyle = 'white';

	// draw game objects
		t1.draw(dt);
		t2.draw(dt);
		t3.draw(dt);
		box.draw(dt);

	//continue loop
	ctx.fillStyle = 'white';
	requestAnimationFrame(loop);
	} 

	// start loop
	requestAnimationFrame(function(millis){t = millis/1000;
		requestAnimationFrame(loop);
	});

// end of locally scoped function
})();
