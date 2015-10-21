define([ 'jquery', 'classie', 'snapsvg-min', 'handlebars' ], function($,
		classie, Snap, handlebars) {

	return {
		detailMeet : function(meetNo) {

			$(".trigger1").click(
					function() {
						$(".element2").toggle(
								$.getJSON(contextRoot
										+ '/json/meet/detail.do?meetNo=' + 1,
										function(result) {
											var data = result.data;
											$('#MeetNo').val(data.meetNo);
											$('#MemberNo').val(data.memberNo);
											$('#MeetName').val(data.meetName);
											$('#MeetDate').val(data.meetDate);
											$('#MemberName').val(data.memberName);
											console.log(data);
										}));
						$(".element1").toggle();
					});
		},

		init : function() {
			var moduleObj = this;
			$.getJSON(contextRoot + '/json/meet/list.do', function(result) {

				var tbody = $('#listTable tbody');
				$('.data-row').remove();

				// handlebars 라이브러리를 이용하여 테이블 tr 태그 생성
				var source = $('#meetlist').html();
				var template = handlebars.compile(source);
				var content = template(result);
				console.log(result);
				$('#listTable tbody').html(content);

				function SVGCollapser(el, options) {
					this.el = el;
					this.init();
				}

				SVGCollapser.prototype.init = function() {
					this.trigger = this.el.querySelector('button.trigger');
					this.shapeEl = this.el.querySelector('span.morph-shape');

					var s = Snap(this.shapeEl.querySelector('svg'));
					this.pathEl = s.select('path');
					this.paths = {
						active : this.shapeEl.getAttribute('data-morph-active')
								.split(';')
					};
					this.stepsTotal = this.paths.active.length;

					this.initEvents();
				};

				SVGCollapser.prototype.initEvents = function() {
					this.trigger.addEventListener('click', this.collapse
							.bind(this));
				};

				SVGCollapser.prototype.collapse = function() {
					var self = this, pos = 0, nextStep = function(pos) {
						if (pos > self.stepsTotal - 1) {
							return;
						}
						self.pathEl.stop().animate({
							'path' : self.paths.active[pos]
						}, pos === 0 ? 200 : 150,
								pos === 0 ? mina.easeinout : mina.easeout,
								function() {
									nextStep(pos);
								});
						pos++;
					};

					nextStep(pos);

					setTimeout(function() {
						classie.add(self.el, 'box--close');
					}, 350);
				};

				function SVGExpander(el, options) {
					this.el = el;
					this.init();
				}

				SVGExpander.prototype.init = function() {
					this.trigger1 = this.el.querySelector('button.trigger1');
					this.shapeEl = this.el.querySelector('span.morph-shape');

					var s = Snap(this.shapeEl.querySelector('svg'));
					this.pathEl = s.select('path');
					this.paths = {
						reset : this.pathEl.attr('d'),
						open : this.shapeEl.getAttribute('data-morph-open'),
						close : this.shapeEl.getAttribute('data-morph-close')
					};

					this.isOpen = false;
					this.initEvents();
				};

				SVGExpander.prototype.initEvents = function() {
					this.trigger1.addEventListener('click', this.toggle
							.bind(this));
				};

				SVGExpander.prototype.toggle = function() {
					var self = this;

					if (this.isOpen) {
						this.pathEl.stop().animate({
							'path' : this.paths.close
						}, 250, mina.easeout, function() {
							self.pathEl.stop().animate({
								'path' : self.paths.reset
							}, 800, mina.elastic);
						});
						setTimeout(function() {
							classie.remove(self.el, 'box--sizeup');
						}, 250);
					} else {
						this.pathEl.stop().animate({
							'path' : this.paths.open
						}, 250, mina.easeout, function() {
							self.pathEl.stop().animate({
								'path' : self.paths.reset
							}, 800, mina.elastic);
						});
						setTimeout(function() {
							classie.add(self.el, 'box--sizeup');
						}, 250);
					}
					this.isOpen = !this.isOpen;
				};

				[].slice.call(document.querySelectorAll('.box--collapser'))
						.forEach(function(el) {
							new SVGCollapser(el);
						});
				new SVGExpander(document.getElementById('expander'));
			});

		}

	}

});
