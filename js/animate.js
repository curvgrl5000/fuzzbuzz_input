/**
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */
;(function(window) {

	'use strict';

	// taken from mo.js demos
	function isIOSSafari() {
		var userAgent;
		userAgent = window.navigator.userAgent;
		return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
	};

	// taken from mo.js demos
	function isTouch() {
		var isIETouch;
		isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
		return [].indexOf.call(window, 'ontouchstart') >= 0 || isIETouch;
	};
	
	// taken from mo.js demos
	var isIOS = isIOSSafari(),
		clickHandler = isIOS || isTouch() ? 'touchstart' : 'click';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function Animocon(el, options) {
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );

		this.checked = false;

		this.timeline = new mojs.Timeline();
		
		for(var i = 0, len = this.options.tweens.length; i < len; ++i) {
			this.timeline.add(this.options.tweens[i]);
		}

		var self = this;
		this.el.addEventListener(clickHandler, function() {
			if( self.checked ) {
				self.options.onUnCheck();
			}
			else {
				self.options.onCheck();
				self.timeline.start();
			}
			self.checked = !self.checked;
		});
	}

	// grid items:
	var items = [].slice.call(document.querySelectorAll('.grid > .grid__item'));

	function init() {
		/* Icon Unicorn */
		var el1 = items[0].querySelector('button.icobutton'), el1SVG = el1.querySelector('svg');
		var translationCurve17 = mojs.easing.path('M0,100 C0,72 10,-0.1 50,0 C89.6,0.1 100,72 100,100');
		new Animocon(el1, {
			tweens : [
				// burst animation (line1)
				new mojs.Burst({
					parent: el1,
					duration: 600,
					shape : 'circle',
					x: '65%',
					y: '40%',
					childOptions: { 
						radius: {20:0},
						type: 'line',
						stroke: '#bf62a6',
						strokeWidth: 2
					},
					radius: {40:120},
					angle: 70,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation (line2)
				new mojs.Burst({
					parent: el1,
					duration: 600,
					shape : 'circle',
					x: '65%',
					y: '40%',
					childOptions: { 
						radius: {20:0},
						type: 'line',
						stroke: '#f28c33',
						strokeWidth: 2
					},
					radius: {40:120},
					angle: 74,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation (line3)
				new mojs.Burst({
					parent: el1,
					duration: 600,
					shape : 'circle',
					x: '65%',
					y: '40%',
					childOptions: { 
						radius: {20:0},
						type: 'line',
						stroke: '#f5d63d',
						strokeWidth: 2
					},
					radius: {40:120},
					angle: 78,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation (line4)
				new mojs.Burst({
					parent: el1,
					duration: 600,
					shape : 'circle',
					x: '65%',
					y: '40%',
					childOptions: { 
						radius: {20:0},
						type: 'line',
						stroke: '#79c267',
						strokeWidth: 2
					},
					radius: {40:120},
					angle: 82,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation (line5)
				new mojs.Burst({
					parent: el1,
					duration: 600,
					shape : 'circle',
					x: '65%',
					y: '40%',
					childOptions: { 
						radius: {20:0},
						type: 'line',
						stroke: '#78c5d6',
						strokeWidth: 2
					},
					radius: {40:120},
					angle: 86,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation (circles)
				new mojs.Burst({
					parent: el1,
					duration: 1600,
					shape : 'circle',
					x: '65%',
					y: '40%',
					fill: ['#bf62a6','#f28c33','#f5d63d','#79c267','#78c5d6'],
					childOptions: { 
						radius: {'rand(20,5)':0},
						delay: [0,350,200,150,400]
					},
					radius: {20:50},
					degree: 20,
					angle: 70,
					isSwirl: true,
					swirlSize: 4,
					count: 4,
					opacity: 0.6,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 800,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
					onUpdate: function(progress) {
						var translationProgress = translationCurve17(progress);
							el1SVG.style.WebkitTransform = el1SVG.style.transform = 'translate3d(' + -20 * translationProgress + '%,0,0)';	
					}
				})
			],
			onCheck : function() {
				el1SVG.style.fill = '#CA7AA8';
			},
			onUnCheck : function() {
				el1SVG.style.fill = '#808183';
			}
		});
		/* End Unicorn*/
	}
	
	init();

})(window);