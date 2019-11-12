/* 
Colin Morris-Moncada
CSE 322 Web Page Programming
Lecture 10 "Canvas Javascript Application Code Only"
Bit from end of Lecture 9
*/ 


// Defines a locally scoped function
(function(){
	// application object
	window.a ={};
	const canvas = document.getElementById('game');
	const ctx    = canvas.getContext('2d');

	
	// Text Constructor
	function Text(text, x, y, color, font){
		this.text  = text  || '' 	      ;
		this.x	   = x     || 0		      ;
		this.y     = y     || 0		      ;
		this.color = color || "#000000"   ;
		this.font  = font  || "24px serif";
	}

	// Text attachment of Draw Method
	Text.prototype.draw = function(dt){
		ctx.fillStyle   = this.color;
		ctx.font        = this.font;
		ctx.fillText(this.text, this.x, this.y);
	}


	// Box Constructor
	function Box(x, y, w, h, color) {
		this.x     = x     || 0            ;
    	this.y     = y     || 0            ;
    	this.w     = w     || 100          ;
    	this.h     = h     || 50           ;
    	this.color = color || "#000000"    ;
  	}

  	// Box attachment of Draw Method
	Box.prototype.draw = function(dt){
		ctx.fillStyle = this.color; 
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}

	// Missile Constructor
	function Missile() {
		this.x = 0     ;
		this.y = 100   ;
		this.w = 50    ;
		this.h = 50    ;
  	}

	// Missile attachment of Draw Method
	Missile.prototype.draw = function(dt){ 
		this.x += 200 * dt; 
		ctx.fillStyle = '#000000'; 
		ctx.fillRect  (this.x, this.y, this.w, this.h);
	}

	// Set's t to initial
	let t = 0; 

	// Array of objects                                                
	const objs = [];



	function loop(millis){
		// computes elapsed time since last frame
		const dt = millis / 1000 -t;
		t = millis / 1000;
		
	
	//clear viewport
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// draw game objects
		for (let i = 0; i < objs.length; ++i){
			const o = objs[i];
			o.draw(dt);
		}

	//continue loop
	requestAnimationFrame(loop);
	} 

	// start loop
	requestAnimationFrame(function(millis){
		t = millis/1000;
		requestAnimationFrame(loop);
    });

// Attach to (a) to make them globally scoped 
 	a.objs     = objs     ;
  	a.Text     = Text     ;
  	a.Box      = Box      ;
  	a.Missile  = Missile  ;


// end of locally scoped function
})();
