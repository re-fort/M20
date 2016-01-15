jQuery( function() {
		var num = Math.floor(Math.random() * 20);
		var id;

		switch (num){
			case 0:
				id = "_CStX2JS3tk";
				break;
			case 1:
				id = "CVB6p4kjqSw";
				break;
			case 2:
				id = "q6XFjhOTsoM";
				break;
			case 3:
				id = "59ANA8WLkwI";
				break;
			case 4:
				id = "Te0_xzD2UR0";
				break;
			case 5:
				id = "U6V25H5sfkE";
				break;
			case 6:
				id = "nVlW8HaSBTQ";
				break;
			case 7:
				id = "LkhAbSj8XK0";
				break;
			case 8:
				id = "TJbDgWYu734";
				break;
			case 9:
				id = "BJP3bJngPHc";
				break;
			case 10:
				id = "rNNPeC2vydM";
				break;
			case 11:
				id = "6AMiiU5BlIw";
				break;
			case 12:
				id = "1XmH0CHArxM";
				break;
			case 13:
				id = "FgDtR3TGODQ";
				break;
			case 14:
				id = "zZRKqyY_43s";
				break;
			case 15:
				id = "WZ6PYUGG128";
				break;
			case 16:
				id = "iP6OGJQNpZQ";
				break;
			case 17:
				id = "RPWZ3Hc6dlw";
				break;
			case 18:
				id = "JHFPznfPp8E";
				break;
			case 19:
				id = "jIxXKd5Uots";
				break;
			};

		var html = '<a id="bgndVideo" class="player" data-property="{videoURL:' + "'" + id + "'" + ',containment:' + "'body', showControls:true, autoPlay:true, loop:true, vol:50, mute:true, startAt:0,  stopAt:150, opacity:0.5, addRaster:true, quality:" + "'hd720'" + ', optimizeDisplay:true}"' + '></a>'

		$("#background").append(html);

		var myPlayer = jQuery( "#bgndVideo" ).YTPlayer( {
			onReady: function( player ) {
				YTPConsole.append( player.id + " player is ready" );
				YTPConsole.append( "<br>" );
			}
		} );
		
		var YTPConsole = jQuery( "#eventListener" );
	} );