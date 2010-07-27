/**
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
	

})(jQuery);