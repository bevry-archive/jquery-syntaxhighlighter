/**
 * @depends core.console, jquery, jquery.appendscriptstyle
 * @name jquery.syntaxhighlighter
 * @package jquery-syntaxhighlighter {@link http://www.balupton/projects/jquery-syntaxhighlighter}
 */

/**
 * jQuery Aliaser
 */
(function($){
	
	/**
	 * jQuery SyntaxHighlighter
 	 * @version 0.2.0-beta
 	 * @date July 28, 2010
 	 * @since 0.1.0-dev, July 23, 2010
     * @package jquery-syntaxhighlighter {@link http://www.balupton/projects/jquery-syntaxhighlighter}
	 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
	 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
	 * @license GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
	 */
	if ( !($.SyntaxHighlighter||false) ) {
		$.SyntaxHighlighter = {
			// Options
			options: {
				load: true,
				highlight: true,
				debug: false,
				defaults: {},
				config: {
					'wrapLines': true,
					'baseUrl': 'https://bitbucket.org/balupton/syntaxhighlighter/raw/tip/build/output'
				}
			},
			
			// Init
			init: function(params){
				// Prepare
				$.extend(true, this.options, params||{});
				// Load
				if ( this.options.load ) this.load();
				if ( !$.isEmptyObject(this.options.defaults) || !$.isEmptyObject(this.options.config) ) this.configure(this.options.defaults,this.options.config);
				if ( this.options.highlight ) this.highlight();
				if ( this.options.config.wrapLines ) this.wrapLines();
				// Chain
				return this;
			},
			
			// Load
			load: function(){
				// Prepare
				var baseUrl = this.options.config.baseUrl;
				// Append
				$.appendScript(baseUrl+'/scripts/shCore.js');
				$.appendStylesheet(baseUrl+'/styles/shCore.css');
				$.appendStylesheet(baseUrl+'/styles/shThemeDefault.css');
				// Autoload
				this.autoload(baseUrl);
				// Chain
				return this;
			},
			
			// Autoload
			autoload: function(baseUrl){
				// Check SyntaxHighlighter
				if ( typeof SyntaxHighlighter === 'undefined' ) {
					if ( $.SyntaxHighlighter.options.debug ) window.console.debug('$.SyntaxHighlighter.autoload: SyntaxHighlighter is not yet defined. Waiting 1000ms then trying again.');
					setTimeout(function(){
						$.SyntaxHighlighter.autoload.apply($.SyntaxHighlighter, [baseUrl]);
					},1000);
					return;
				}
				
				// Include Autoloader
				$.appendScript(baseUrl+'/scripts/shAutoloader.js'); // will only ever include once
				
				// Check Autoloader
				if ( typeof SyntaxHighlighter.autoloadAllBrushes === 'undefined' ) {
					if ( $.SyntaxHighlighter.options.debug ) window.console.debug('$.SyntaxHighlighter.autoload: Autoloader is not yet defined. Waiting 1000ms then trying again.');
					setTimeout(function(){
						$.SyntaxHighlighter.autoload.apply($.SyntaxHighlighter, [baseUrl]);
					},1000);
					return;
				}
				// Autoload
	        	SyntaxHighlighter.autoloadAllBrushes(baseUrl);
				
				// Chain
				return this;
			},
			
			// Highlight
			highlight: function(params){
				// Check
				if ( typeof SyntaxHighlighter === 'undefined' ) {
					if ( $.SyntaxHighlighter.options.debug ) window.console.debug('$.SyntaxHighlighter.highlight: SyntaxHighlighter is not yet defined. Waiting 1200ms then trying again.');
					setTimeout(function(){
						$.SyntaxHighlighter.highlight.apply($.SyntaxHighlighter, [params]);
					},1200);
					return;
				}
				// Highlight
				SyntaxHighlighter.all(params);
				// Chain
				return this;
			},
			
			// Configure Syntax Highlighter
			configure: function(defaults,config){
				// Check
				if ( typeof SyntaxHighlighter === 'undefined' ) {
					if ( $.SyntaxHighlighter.options.debug ) window.console.debug('$.SyntaxHighlighter.configure: SyntaxHighlighter is not yet defined. Waiting 1100ms then trying again.');
					setTimeout(function(){
						$.SyntaxHighlighter.configure.apply($.SyntaxHighlighter,[defaults,config]);
					},1100);
					return;
				}
				// Fix baseUrl
				var baseUrl = this.options.config.baseUrl;
				if ( baseUrl[baseUrl.length-1] === '/' ) {
					this.options.config.baseUrl = baseUrl.substr(0,baseUrl.length-2);
				}
				delete baseUrl;
				// Configure
				$.extend(SyntaxHighlighter.defaults, defaults||{});
				$.extend(SyntaxHighlighter.config, config||{});
				// Handle
				if ( this.options.config['wrap-lines'] ) this.wrap();
				// Chain
				return this;
			},
			
			// Wrap Lines
			wrapLines: function(){
				// Prepare
				var $els =  $('.syntaxhighlighter');
				// Check
				if ( $els.length === 0 ) {
					if ( $.SyntaxHighlighter.options.debug ) window.console.debug('$.SyntaxHighlighter.wrapLines: There is not yet any syntax highlighted text. Waiting 1300ms then trying again.');
					setTimeout($.SyntaxHighlighter.wrapLines,1300);
					return;
				}
				// Check Styles
				if ( $('#sh-wrap').length === 0 ) {
					// Append Styles
					$('body').append('<style type="text/css" id="sh-wrap">body .syntaxhighlighter .line {white-space: pre-wrap !important;}</style>');
				}
				// Cycle through
				$els.filter(':not(.sh-wrapped)').each(function(){
					// Fetch
					var $sh = $(this).addClass('sh-wrapped'),
						$gutter = $sh.find('td.gutter'),
						$code = $sh.find('td.code')
					;
					// Cycle through lines
					$gutter.children('.line').each(function(i){
						// Fetch
						var $gutterLine = $(this),
							$codeLine = $code.find('.line:nth-child('+(i+1)+')')
						;
						// Fetch height
						var height = $codeLine.height()||0;
						if ( !height ) {
							height = 'auto';
						}
						else {
							height = height += 'px';
						}
						// Copy height over
						$gutterLine.height(height+' !important');
					});
				});
				// Chain
				return this;
			}
		};
	}
	else {
		window.console.warn("$.SyntaxHighlighter has already been defined...");
	}

})(jQuery);