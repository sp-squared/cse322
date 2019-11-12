/* 
Colin Morris-Moncada
CSE 322 Web Page Programming
Lecture 11 "Canvas Javascript Application Code Only"
*/ 


// Defines a locally scoped function
(function(){
	// application object
	window.a ={};
	const canvas = document.getElementById('game');
	const ctx    = canvas.getContext('2d', {alpha:false});

	
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
		this.y += 100 * dt;
		if(this.y > canvas.height){
			a.objs  = a.objs.filter(function(item) {return item !== this; });
			enemies = a.enemies.filter(function(item) {return item !== this; });

		}else{
			ctx.fillStyle = this.color; 
			ctx.fillRect(this.x, this.y, this.w, this.h);	
		}
	}

	// Missile Constructor
	function Missile(y) {
		this.x = 0     ;
		this.y = y     ;
		this.w = 50   ;
		this.h = 20    ;
  	}

	// Missile attachment of Draw Method
	Missile.prototype.draw = function(dt){ 
		this.x += 200 * dt; 
		ctx.fillStyle = '#000000'; 
		ctx.fillRect  (this.x, this.y, this.w, this.h);
		for (let i = 0; i < a.enemies.length; i++)
			let e = a.enemies[i];
			
			// Collision detection
			if (
				e.x < this.x + this.w   &&
				e.x + e .w > this.x     &&
				e.y  < this.y + this.h  &&
				e.y + e .h > this.y 
				){
				// Remove box from loop

				}

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
	//ctx.fillStyle = 'white';
	//ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.clearRect(0,0, canvas.width, canvas.height);

	// draw game objects
		for (let i = a.objs.length -1 ; i >= 0; --i){
			const o = a.objs[i];
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
