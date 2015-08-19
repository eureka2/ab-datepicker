# ab-datepicker 
ab-datepicker is an accessible datepicker based on the example of the Open AJAX Alliance Accessibility Tools Task Force : [http://www.oaa-accessibility.org/examplep/datepicker1/](http://www.oaa-accessibility.org/examplep/datepicker1/)
and Inspired by [http://wet-boew.github.io/wet-boew/demos/datepicker/datepicker-en.html](http://wet-boew.github.io/wet-boew/demos/datepicker/datepicker-en.html)

## Table of contents
1. [Description](#description)
1. [Dependencies](#dependencies)
1. [Demo](#demo)
1. [Usage](#usage)
1. [Keyboard interaction](#keyboard-interaction)
1. [ARIA 1.0 Markup](#aria-10-markup)
1. [Browser Compatibility](#browser-compatibility)
1. [Copyright and license](#copyright-and-license)

##  Description
This DatePicker widget is a jQuery Plugin which allows the user to select a date and implements the [WAI-ARIA Date Picker design pattern](http://www.w3.org/TR/wai-aria-practices/#datepicker) of W3C. 
	
The calendar portion of the date picker follows a table structure 
where days of the week and calendar day numbers are layed out in HTML table cells where WAI-ARIA semantics for a grid are applied. 
This provides context so an assistive technology can render the day of the week; 
its corresponding numeric calendar day, and week number if necessary. 

The calendar portion can be displayed in a numbers of ways, including as a popup in modal mode.

**[⬆ back to top](#table-of-contents)**

## Dependencies
* [jQuery](https://jquery.com/)
* [Bootstrap](http://getbootstrap.com/)

**[⬆ back to top](#table-of-contents)**

## Demo
[Online Demo](http://eureka2.github.io/ab-datepicker/)

**[⬆ back to top](#table-of-contents)**

## Usage

The datepicker component must be bound to an text input field of your document:
```html
<input class="date form-control" id="date1" type="text" placeholder="d/M/y" title="format: dd/MM/y"/>
```
For better accessibility, define and placeholder attribute and a title with the input format

Add the bootstrap and datepicker css to you page head
```html
<link rel="stylesheet" href="path/to/bootstrap.min.css" type="text/css" />
<link rel="stylesheet" href="path/to/datepicker.css" type="text/css" />
```

Place the javascript to the end of your document:
```html
<script type="text/javascript" src="path/to/jquery.min.js"></script>
<script type="text/javascript" src="path/to/bootstrap.min.js"></script>
<script type="text/javascript" src="path/to/datepicker.min.js"></script>
```
Replace "fr.min.js" by the "locales file" you want.

### Basic usage
Add the JavaScript to the end of your document:
```javascript
    <script type="text/javascript">
    $(document).ready(function() {
    	$('.date').datepicker();	
    });
    </script>
```
![](https://eureka2.github.io/ab-datepicker/datepicker1.png) ![](https://eureka2.github.io/ab-datepicker/datepicker2.png)   ![](https://eureka2.github.io/ab-datepicker/datepicker3.png)

**[⬆ back to top](#table-of-contents)**

## Configuration options
<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
			<th>Default</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>firstDayOfWeek</td>
			<td>Determines the first column of the calendar grid<br>0 = Sunday, 1 = Monday, ....</td>
			<td>Date.dp_locales.firstday_of_week (*)</td>
			<td>firstDayOfWeek: 1</td>
		</tr>
		<tr>
			<td>weekDayFormat</td> 
			<td>Display format of the weekday names - values are 'short' (first letter) or 'narrow' (first two letters)</td>
			<td>short</td>
			<td>weekDayFormat: 'narrow'</td>
		</tr>
		<tr>
			<td>inputFormat</td>
			<td>date input format by the user. Dates and times are formatted according to [CLDR Date Time patterns](http://cldr.unicode.org/translation/date-time)</td>
			<td>Date.dp_locales.short_format (*)</td>
			<td>inputFormat: 'd/M/y'</td>
		</tr>
		<tr>
			<td>outputFormat</td>
			<td>date output format of the datepicker.  Dates and times are formatted according to [CLDR Date Time patterns](http://cldr.unicode.org/translation/date-time)</td>
			<td>Date.dp_locales.short_format (*)</td>
			<td>outputFormat: 'dd/MM/y'</td>
		</tr>
		<tr>
			<td>titleFormat</td>
			<td> Dates and times are formatted according to [CLDR Date Time patterns](http://cldr.unicode.org/translation/date-time)</td>
			<td>Date.dp_locales.full_format (*)</td>
			<td>titleFormat: 'EEEE d MMMM y'</td>
		</tr>
		<tr>
			<td>buttonTitle</td>
			<td></td>
			<td>Date.dp_locales.texts.buttonTitle (*)</td>
			<td>buttonTitle: "Sélectionner une date ..."</td>
		</tr>
		<tr>
			<td>buttonLabel</td>
			<td></td>
			<td>Date.dp_locales.texts.buttonLabel (*)</td>
			<td>buttonLabel: "Cliquez ou appuyez sur la touche Entrée ou la barre d'espace pour ouvrir le calendrier"</td>
		</tr>
		<tr>
			<td>prevButtonLabel</td>
			<td></td>
			<td>Date.dp_locales.texts.prevButtonLabel (*)</td>
			<td>prevButtonLabel: "Aller au mois précédent"</td>
		</tr>
		<tr>
			<td>prevMonthButtonLabel</td>
			<td></td>
			<td>Date.dp_locales.texts.prevMonthButtonLabel (*)</td>
			<td>prevMonthButtonLabel: "Aller à l'année précédente"</td>
		</tr>
		<tr>
			<td>prevYearButtonLabel</td>
			<td></td>
			<td>Date.dp_locales.texts.prevYearButtonLabel (*)</td>
			<td>prevYearButtonLabel: "Aller aux vingt années précédentes"</td>
		</tr>
		<tr>
			<td>nextButtonLabel</td>
			<td></td>
			<td>Date.dp_locales.texts.nextButtonLabel (*)</td>
			<td>nextButtonLabel: "Aller au mois suivant"</td>
		</tr>
		<tr>
			<td>nextMonthButtonLabel</td>
			<td></td>
			<td>Date.dp_locales.texts.nextMonthButtonLabel (*)</td>
			<td>nextMonthButtonLabel: "Aller à l'année suivante"</td>
		</tr>
		<tr>
			<td>nextYearButtonLabel</td>
			<td></td>
			<td>Date.dp_locales.texts.nextYearButtonLabel (*)</td>
			<td>nextYearButtonLabel: "Allez aux vingt années suivantes"</td>
		</tr>
		<tr>
			<td>changeMonthButtonLabel</td>
			<td></td>
			<td>Date.dp_locales.texts.changeMonthButtonLabel (*)</td>
			<td>changeMonthButtonLabel: "Cliquez ou appuyez sur la touche Entrée ou la barre d'espace pour changer le mois"</td>
		</tr>
		<tr>
			<td>changeYearButtonLabel</td>
			<td></td>
			<td>Date.dp_locales.texts.changeYearButtonLabel (*)</td>
			<td>"changeYearButtonLabel: "Cliquez ou appuyez sur la touche Entrée ou la barre d'espace pour changer l'année"</td>
		</tr>
		<tr>
			<td>changeRangeButtonLabel</td>
			<td></td>
			<td>Date.dp_locales.texts.changeRangeButtonLabel (*)</td>
			<td>changeRangeButtonLabel: "Cliquez ou appuyez sur la touche ou sur la barre Entrée pour afficher les vingt années suivantes"</td>
		</tr>
		<tr>
			<td>closeButtonTitle</td>
			<td></td>
			<td>Date.dp_locales.texts.closeButtonTitle (*)</td>
			<td>closeButtonTitle: "Fermer"</td>
		</tr>
		<tr>
			<td>closeButtonLabel</td>
			<td></td>
			<td>Date.dp_locales.texts.closeButtonLabel (*)</td>
			<td>closeButtonLabel: "Fermez le calendrier"</td>
		</tr>
		<tr>
			<td>theme</td>
			<td></td>
			<td>default</td>
			<td>theme: 'green'</td>
		</tr>
		<tr>
			<td>modal</td>
			<td></td>
			<td>false</td>		
			<td>modal: true</td>
		</tr>
	</tbody>
</table>
(*) Default value from the locale file

**[⬆ back to top](#table-of-contents)**

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

**[⬆ back to top](#table-of-contents)**

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

**[⬆ back to top](#table-of-contents)**

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

**[⬆ back to top](#table-of-contents)**

## Copyright and license

Copyright 2015 Eureka2 - Jacques Archimède. Code released under the [MIT license](https://github.com/eureka2/ab-datepicker/blob/master/LICENSE).

**[⬆ back to top](#table-of-contents)** 