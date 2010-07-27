/**
 * @depends nothing
 * @name core.console
 * @package jquery-sparkle {@link http://www.balupton/projects/jquery-sparkle}
 */

/**
 * Console Emulator
 * We have to convert arguments into arrays, and do this explicitly as webkit (chrome) hates function references, and arguments cannot be passed as is
 * @version 1.0.1
 * @date July 09, 2010
 * @since 0.1.0-dev, December 01, 2009
 * @package jquery-sparkle {@link http://www.balupton/projects/jquery-sparkle}
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 * @license GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
 */
if ( typeof window.console !== 'object' || typeof window.console.emulated === 'undefined' ) {
	// Check to see if console exists
	if ( typeof window.console !== 'object' || typeof window.console.log !== 'function' ) {
		// Console does not exist
		window.console = {};
		window.console.log = window.console.debug = window.console.warn = window.console.trace = function(){};
		window.console.error = function(){
			alert("An error has occured. Please use another browser to obtain more detailed information.");
		};
	}
	else {
		// Console is object, and log does exist
		// Check Debug
		if ( typeof window.console.debug === 'undefined' ) {
			window.console.debug = function(){
				var arr = ['console.debug:']; for(var i = 0; i < arguments.length; i++) { arr.push(arguments[i]); };
			    window.console.log.apply(window.console, arr);
			};
		}
		// Check Warn
		if ( typeof window.console.warn === 'undefined' ) {
			window.console.warn = function(){
				var arr = ['console.warn:']; for(var i = 0; i < arguments.length; i++) { arr.push(arguments[i]); };
			    window.console.log.apply(window.console, arr);
			};
		} 
		// Check Error
		if ( typeof window.console.error === 'undefined' ) {
			window.console.error = function(){
				var arr = ['console.error']; for(var i = 0; i < arguments.length; i++) { arr.push(arguments[i]); };
			    window.console.log.apply(window.console, arr);
			};
		}
		// Check Trace
		if ( typeof window.console.trace === 'undefined' ) {
			window.console.trace = function(){
			    window.console.error.apply(window.console, ['console.trace does not exist']);
			};
		}
	}
	// We have been emulated
	window.console.emulated = true;
}/**
 * @depends jquery
 * @name jquery.appendscriptstyle
 * @package jquery-sparkle {@link http://www.balupton/projects/jquery-sparkle}
 */

/**
 * jQuery Aliaser
 */
(function($){
	
	/**
	 * Append a Stylesheet to the DOM
	 * @version 1.1.0
	 * @date July 23, 2010
	 * @since 1.0.0, June 30, 2010
     * @package jquery-sparkle {@link http://www.balupton/projects/jquery-sparkle}
	 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
	 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
	 * @license GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
	 */
	$.appendStylesheet = $.appendStylesheet || function(url, overwrite){
		// Check
		if ( !(document.body||false) ) {
			setTimeout(function(){
				$.appendStylesheet.apply($,[url,overwrite]);
			},500);
			// Chain
			return $;
		}
		
		// Prepare
		var id = 'stylesheet-'+url.replace(/[^a-zA-Z0-9]/g, '');;
		var $old = $('#'+id);
		if ( typeof overwrite === 'undefined' ) {
			overwrite = false;
		}
		
		// Check
		if ( $old.length === 1 ) {
			if ( overwrite ) {
				$old.remove();
			}
			else {
				// Chain
				return $;
			}
		}
		
		// Create
		var bodyEl = document.getElementsByTagName($.browser.safari ? 'head' : 'body')[0];
		var linkEl = document.createElement('link');
		linkEl.type = 'text/css';
		linkEl.rel = 'stylesheet';
		linkEl.media = 'screen';
		linkEl.href = url;
		linkEl.id = id;
		bodyEl.appendChild(linkEl);
		
		// Chain
		return $;
	};
	
	/**
	 * Append a Script to the DOM
	 * @version 1.1.0
	 * @date July 23, 2010
	 * @since 1.0.0, June 30, 2010
	 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
	 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
	 * @license GNU Affero General Public License version 3 - {@link http://www.gnu.org/licenses/agpl-3.0.html}
	 */
	$.appendScript = $.appendScript || function(url, overwrite){
		// Check
		if ( !(document.body||false) ) {
			setTimeout(function(){
				$.appendScript.apply($,[url,overwrite]);
			},500);
			// Chain
			return $;
		}
		
		// Prepare
		var id = 'script-'+url.replace(/[^a-zA-Z0-9]/g, '');;
		var $old = $('#'+id);
		if ( typeof overwrite === 'undefined' ) {
			overwrite = false;
		}
		
		// Check
		if ( $old.length === 1 ) {
			if ( overwrite ) {
				$old.remove();
			}
			else {
				// Chain
				return $;
			}
		}
		
		// Create
		var bodyEl = document.getElementsByTagName($.browser.safari ? 'head' : 'body')[0];
		var scriptEl = document.createElement('script');
		scriptEl.type = 'text/javascript';
		scriptEl.src = url;
		scriptEl.id = id;
		bodyEl.appendChild(scriptEl);
		
		// Chain
		return $;
	};
	

})(jQuery);/**
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