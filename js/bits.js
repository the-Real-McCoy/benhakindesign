// Will make Preloader screen disapear	
    $(document).ready(function() {
        setTimeout(function(){
        $('body').addClass('loaded');
        }, 3000);
    });

// Will make certain buttons scroll to certain sections when pressed
    $("#letsTalk").click(function() {
        $('html,body').animate({
            scrollTop: $("#projectsScroll").offset().top},
        'slow');
    });

    $("#letsGoMobile").click(function() {
        $('html,body').animate({
            scrollTop: $("#infoScroll").offset().top},
        'slow');
    });

    $("#topbtn").click(function() {
        $('html,body').animate({
            scrollTop: $("#top").offset().top},
        'slow');
    });

    $("#helloBtn").click(function() {
        $('html,body').animate({
            scrollTop: $("#infoScroll").offset().top},
        'slow');
    });

    $("#workBtn").click(function() {
        $('html,body').animate({
            scrollTop: $("#projectsScroll").offset().top},
        'slow');
    });

    $("#scroll-down-mobile").click(function() {
        $('html,body').animate({
            scrollTop: $("#infoScroll").offset().top},
        'slow');
    });

//simply starts listening for touchstart - allows for hover state on touch devices    
    $('h2').on("touchstart",function (){
});


// Glitch effect for header title
class TextGlitch {
	constructor( root ) {
		this._root = root;
		this._elClips = root.querySelectorAll( ".TextGlitch-clip" );
		this._elWords = root.querySelectorAll( ".TextGlitch-word" );
		this._frame = this._frame.bind( this );
		this._unglitch = this._unglitch.bind( this );
		this._frameId = null;
		this._text = "";
		this._textAlt = [];
		Object.seal( this );

		this.setTexts( [
			"Create.",
			"cREAte.",
			"コントロール。",
			"µΞ11Θ ∑θrlb ¡",
			"作成しまコン。",
		] );
	}

	on() {
		if ( !this._frameId ) {
			this._frame();
		}
	}
	off() {
		clearTimeout( this._frameId );
		this._frameId = null;
		this._unglitch();
	}
	setTexts( [ text, ...alt ] ) {
		this._text = text;
		this._textAlt = alt;
	}

	// private:
	// .....................................................................
	_frame() {
		this._glitch();
		setTimeout( this._unglitch, 20 + Math.random() * 200 );
		this._frameId = setTimeout( this._frame, 5000 + Math.random() * 500 );
	}
	_glitch() {
		this._addClipCSS();
		this._textContent( this._randText() );
		this._root.classList.add( "TextGlitch-blended" );
	}
	_unglitch() {
		this._removeClipCSS();
		this._textContent( this._text );
		this._root.classList.remove( "TextGlitch-blended" );
	}
	_textContent( txt ) {
		this._elWords.forEach( el => el.textContent = txt );
	}

	// CSS clip-path, to cut the letters like an overflow:hidden
	// .....................................................................
	_addClipCSS() {
		const clips = this._elClips,
			clip1 = this._randDouble( .1 ),
			clip2 = this._randDouble( .1 );

		clips.forEach( el => {
			const x = this._randDouble( .4 ),
				y = this._randDouble( .05 );

			el.style.transform = `translate(${ x }em, ${ y }em)`;
		} );
		clips[ 0 ].style.clipPath = `inset( 0 0 ${ .6 + clip1 }em 0 )`;
		clips[ 1 ].style.clipPath = `inset( ${ .4 - clip1 }em 0 ${ .3 - clip2 }em 0 )`;
		clips[ 2 ].style.clipPath = `inset( ${ .7 + clip2 }em 0 0 0 )`;
	}
	_removeClipCSS() {
		this._elClips.forEach( el => {
			el.style.clipPath =
			el.style.transform = "";
		} );
	}

	// Switch some chars randomly
	// .....................................................................
	_randText() {
		const txt = Array.from( this._text );

		for ( let i = 0; i < 6; ++i ) {
			const ind = this._randInt( this._text.length );

			txt[ ind ] = this._textAlt[ this._randInt( this._textAlt.length ) ][ ind ];
		}
		return txt.join( "" );
	}

	// rand utils
	// .....................................................................
	_randDouble( d ) {
		return Math.random() * d - d / 2;
	}
	_randInt( n ) {
		return Math.random() * n | 0;
	}
}

const elTitle = document.querySelector( "#title" );
const glitch = new TextGlitch( elTitle );

glitch.on();



// ...............................
function mouseIn() {
	$('.natours-img').addClass('show');
  }
  
  function mouseOut() {
	$('.natours-img').removeClass('show');
  }
  
  $('.natours-hover').hover(mouseIn, mouseOut);







  


