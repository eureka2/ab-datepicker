# ab-datepicker 
ab-datepicker is an accessible datepicker based on the example of the Open AJAX Alliance Accessibility Tools Task Force : http://www.oaa-accessibility.org/examplep/datepicker1/
and Inspired by http://wet-boew.github.io/wet-boew/demos/datepicker/datepicker-fr.html

## Dependencies
* [jQuery](https://jquery.com/)
* [Bootstrap](http://getbootstrap.com/)

## Demo
[Online Demo](http://eureka2.github.io/ab-datepicker/)

## Keyboard interaction
* <kbd>Left</kbd> Move focus to the previous day. Will move to the last day of the previous month, if the current day is the first day of a month.
* <kbd>Right</kbd> Move focus to the next day. Will move to the first day of the following month, if the current day is the last day of a month.
* <kbd>Up</kbd> Move focus to the same day of the previous week. Will wrap to the appropriate day in the previous month.
* <kbd>Down</kbd> Move focus to the same day of the following week. Will wrap to the appropriate day in the following month.
* <kbd>PgUp</kbd> Move focus to the same date of the previous month. If that date does not exist, focus is placed on the last day of the month.
* <kbd>PgDn</kbd> Move focus to the same date of the following month. If that date does not exist, focus is placed on the last day of the month.
* <kbd>Ctrl+PgUp</kbd> Move focus to the same date of the previous year. If that date does not exist (e.g leap year), focus is placed on the last day of the month.
* <kbd>Ctrl+PgDn</kbd> Move focus to the same date of the following year. If that date does not exist (e.g leap year), focus is placed on the last day of the month.
* <kbd>Home</kbd> Move to the first day of the month.
* <kbd>End</kbd> Move to the last day of the month
* <kbd>Tab</kbd> / <kbd>Shift+Tab</kbd> If the datepicker is in model mode, navigate between calander grid and close/previous/next selection buttons, otherwise move to the field following/preceding the date textbox associated with the datepicker
* <kbd>Enter</kbd> / <kbd>Space</kbd> Fill the date textbox with the selected date then close the datepicker widget.

## ARIA 1.0 Markup
* ARIA 1.0: [aria-activedescendant]
* ARIA 1.0: [aria-atomic]
* ARIA 1.0: [aria-controls]
* ARIA 1.0: [aria-haspopup]
* ARIA 1.0: [aria-hidden]
* ARIA 1.0: [aria-invalid]
* ARIA 1.0: [aria-labelledby]
* ARIA 1.0: [aria-live]
* ARIA 1.0: [aria-readonly]
* ARIA 1.0: [aria-selected]
* ARIA 1.0: [role=&quot;application&quot;]
* ARIA 1.0: [role=&quot;button&quot;]
* ARIA 1.0: [role=&quot;columnheader&quot;]
* ARIA 1.0: [role=&quot;grid&quot;]
* ARIA 1.0: [role=&quot;gridcell&quot;]
* ARIA 1.0: [role=&quot;heading&quot;]

## Browser Compatibility
* osx: Chrome 10.0+
* osx: Firefox 3.6+
* osx: Opera 11.0+
* osx: Safari 5.0+
* win: Chrome 10.0+
* win: Firefox 3.6+
* win: Internet Explorer 8.0+
* win: Opera 11.0+
* win: Safari 5.0+


## Copyright and license

Copyright 2015 Eureka2 - Jacques Archimède. Code released under the [MIT license](https://github.com/eureka2/ab-datepicker/blob/master/LICENSE). 