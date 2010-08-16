----
/**
 * This file is part of jQuery Syntax Highlighter
 * Copyright (C) 2010 Benjamin Arthur Lupton
 * http://www.balupton.com/projects/jquery-syntaxhighligher
 *
 * jQuery Syntax Highlighter is free software; You can redistribute it and/or modify it under the terms of
 * the GNU Affero General Public License version 3 as published by the Free Software Foundation.
 * You don't have to do anything special to accept the license and you don’t have to notify
 * anyone which that you have made that decision.
 * 
 * jQuery Syntax Highlighter is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See your chosen license for more details.
 * 
 * You should have received along with jQuery Syntax Highlighter:
 * - A copy of the license used.
 *   If not, see <http://www.gnu.org/licenses/agpl-3.0.html>.
 * - A copy of our interpretation of the license used.
 *   If not, see <http://github.com/balupton/jquery-syntaxhighligher/blob/master/COPYING.txt>.
 * 
 * @version 1.0.1-beta
 * @date August 16, 2010
 * @since 0.1.0-dev, July 23, 2010
 * @category jquery-plugin
 * @package jquery-syntaxhighligher {@link http://www.balupton/projects/jquery-syntaxhighligher}
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 * @license GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
 * @example Visit {@link http://www.balupton.com/projects/jquery-syntaxhighligher} for more information.
 */
----

Installation & Usage:
1. Refer to the (demo/index.html) or http://www.balupton.com/projects/jquery-syntaxhighligher if the demo is not included.

Todo:
1. Could use Sparkle BalClass but no necessary yet.

Known Issues:
1. IE ignores newlines in all elements. This is known bug with IE: http://www.quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

----

Changelog:

v1.0.1-beta, August 16, 2010
- Now uses a local copy of prettify which contains a fix to only prettify something once.
- Fixed some issues with IE and newlines
- Set tab width to 4 instead of 8

v1.0.0-beta, August 16, 2010
- Now uses Google's Prettify instead of Alex's Syntax Highlighter v3. There were just too many issues with Alex's and I couldn't fix them all. This fixes the IE error for all users.
- Added themes.
- Re-did nearly all the wording on the demo page to reflect the new syntax highlighter direction and features.

v0.2.1-beta, August 15, 2010
- Fixed an issue with IE and wraplines.

v0.2.0-beta, July 28, 2010
- Updated licensing information. Still using the same license, as it is the best there is, but just provided some more information on it to make life simpler.
- Fixed autoloading.

v0.1.0-dev, July 23, 2010
- Initial Release

----