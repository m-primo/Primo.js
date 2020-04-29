/*
****************************************************************************
**************************************************************
*************************************************
//  Primo.js
//  Simple Native/Pure JavaScript Library Without Any Library or Framework.
//  -----------------------------------------------------------------
//  Version 1:
//  DO NOT LOOK AT IT, THIS IS JUST A NOTICE FOR VERSION ONE
//  - This is just a simple JavaScript library for my personal use.
//  - Anyone has this library, got it by me or maybe robbed it!
//  -----------------------------------------------------------------
//  Tutorial/Usage:
//      -> Selector:
//          => '.': class
//          => '#': id
//          => '@': name
//          => '': element
//          => this: current element
//  -----------------------------------------------------------------
//  Examples:
//      -> To [Toggle] an element, with class 'toggler_test':
//          => doc('.toggler_test').toggle()
//      -> To [Change] the text of the current element, to 'new text':
//          => doc(this).text = 'new text'... also to get the text, use doc(this).text
//  -----------------------------------------------------------------
//      (C) Primo
//      https://primodpd.blogspot.com
//      https://mp-primo.blogspot.com
//      https://mp-primo.blogspot.com/primo
//      https://github.com/m-primo/Primo.js
//      MIT License
//      Primo JavaScript Library
//      Primo.js
//      Version 1 -> closed-source, 'Primo JavaScript Library V1.0'
//      Version 2 -> open-source, 'Primo JS Library'
//      Version 3 -> open-source, 'Primo.js'
//      Time in UTC.
//      Created         [   Sep 07, 2017 22:26    ]
//      Fully changed   [   May 10, 2019 14:19    ]
//      Open Source     [   May 16, 2019 08:26    ]
//      Version 3       [   Jun 22, 2019 05:18    ]
//      Last update     [   Oct 23, 2019 16:04    ]
*************************************************
**************************************************************
****************************************************************************
*/

// ---------------------------------------------------
// Start Functions
// ---------------------------------------------------

// Go to another url
// void go(string, bool)
function go(url, newWindow = false) {
    newWindow ? window.open(url) : window.location.href = url;
}

// Reload the page
// void reload()
function reload() {
    window.location.href = window.location.href;
}

// Warn the user about an action
// Most used when the admin want to delete a record
// warn('delete.php?id=1', 'Are you sure you want to delete this record?')
// void warn(string, string)
function warn(url, msg) {
    confirm(msg) ? window.location.href = url : '';
}

// Type in console
// void debug(any)
function debug(msg) {
    console.log(msg);
}

// Check if that is element
// bool isElement(any)
function isElement(o) {
    return (typeof HTMLElement === 'object' ? o instanceof HTMLElement : o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string');
}

// Scroll
// void scrollWindowBy(double, double)
function scrollWindowBy(x, y) {
    window.scrollBy(x, y);
}

// ---------------------------------------------------
// End Functions
// ---------------------------------------------------


// ---------------------------------------------------
// Start Classes
// ---------------------------------------------------

class eMath {
    constructor() {
        this.factorial = function(k) {
            return ((k >= 1) ? (k * factorial(k - 1)) : (1));
        };
        this.fibonacci = function(k) {
            return ((k >= 3) ? (fibonacci(k - 1) + fibonacci(k - 2)) : (1));
        };
        this.rand = function() {
            return Math.random();
        };
        this.randInt = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        this.randFloat = function(min, max) {
            return (Math.random() * (max - min) + min).toFixed(4);
        };
        this.dice = function() {
            return (Math.floor(Math.random() * (98)) + (Math.random())).toFixed(2);
        };
        this.findMax = function() {
            var max = -Infinity;
            for(var i = 0; i < arguments.length; i++) {
                if(arguments[i] > max) {
                    max = arguments[i];
                }
            }
            return max;
        };
        this.sumAll = function() {
            var sum = 0;
            for(var i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            return sum;
        };
        this.subAll = function() {
            var sub = 0;
            for(var i = 0; i < arguments.length; i++) {
                sub -= arguments[i];
            }
            return sub;
        };
        this.divAll = function() {
            var div = 0;
            for(var i = 0; i < arguments.length; i++) {
                if(arguments[i] != 0) {
                    div /= arguments[i];
                }
            }
            return div;
        };
        this.mulAll = function() {
            var mul = 0;
            for(var i = 0; i < arguments.length; i++) {
                mul *= arguments[i];
            }
            return mul;
        };
    }
} var math = (new eMath());

class Document {
    constructor(elem) {
        this.elem = elem;
        this.elm = '';
        this.type = '';
        if(isElement(this.elem)) {
            this.elm = [];
            this.elm.push(this.elem);
            this.type = 'element';
        } else {
            if(this.elem.startsWith('#', 0)) {
                this.elem = this.elem.replace('#', '');
                this.elm = [];
                this.elm.push(document.getElementById(this.elem));
                this.type = 'id';
            } else if(this.elem.startsWith('.', 0)) {
                this.elem = this.elem.replace('.', '');
                this.elm = [];
                for(var i = 0; i < document.getElementsByClassName(this.elem).length; i++) {
                    this.elm.push(document.getElementsByClassName(this.elem)[i]);
                }
                this.type = 'class';
            } else if(this.elem.startsWith('@', 0)) {
                this.elem = this.elem.replace('@', '');
                this.elm = [];
                for(var i = 0; i < document.getElementsByName(this.elem).length; i++) {
                    this.elm.push(document.getElementsByName(this.elem)[i]);
                }
                this.type = 'name';
            } else {
                this.elm = [];
                for(var i = 0; i < document.getElementsByTagName(this.elem).length; i++) {
                    this.elm.push(document.getElementsByTagName(this.elem)[i]);
                }
                this.type = 'tag';
            }
        }
        // debug(this.elem);
        // debug(this.elm);
        // debug(this.type);
    }

    set html(html) {
        for(var i = 0; i < this.elm.length; i++) {
            this.elm[i].innerHTML = html;
        }
    }
    get html() {
        for(var i = 0; i < this.elm.length; i++) {
            return this.elm[i].innerHTML;
        }
    }

    set text(txt) {
        for(var i = 0; i < this.elm.length; i++) {
            this.elm[i].innerText = txt;
        }
    }
    get text() {
        for(var i = 0; i < this.elm.length; i++) {
            return this.elm[i].innerText;
        }
    }
    
    delete() {
        for(var i = 0; i < this.elm.length; i++) {
            this.elm[i].remove();
        }
    }

    hide() {
        for(var i = 0; i < this.elm.length; i++) {
            this.elm[i].style.display = 'none';
        }
    }

    show(display = 'block') {
        for(var i = 0; i < this.elm.length; i++) {
            this.elm[i].style.display = display;
        }
    }

    toggle(display = 'block') {
        for(var i = 0; i < this.elm.length; i++) {
            this.elm[i].style.display == 'none' ? this.elm[i].style.display = display : this.elm[i].style.display = 'none';
        }
    }

    process(selfStyle = false) {
        for(var i = 0; i < this.elm.length; i++) {
            this.elm[i].innerHTML = 'Processing...';
            if(selfStyle) {
                this.elm[i].setAttribute('style', 'opacity: 0.7; cursor: not-allowed;');
                this.elm[i].setAttribute('class', this.elm[i].getAttribute('class') + ' disable');
            } else {
                this.elm[i].setAttribute('style', 'opacity: 0.7; cursor: not-allowed; background-color: red; color: white; border: 1px solid #000;');
            }
            this.elm[i].setAttribute('disabled', 'disabled');
        }
    }
    
    loadingDots() {
        for(var i = 0; i < this.elm.length; i++) {
            var theEl = this.elm[i];
            for(var j = 1; j <= 3; j++) {
                setTimeout(function(){
                    theEl.innerText += '.';
                }, j * 500);
            }
        }
    }
    
} var doc = function(e){return (new Document(e))};

// ---------------------------------------------------
// End Classes
// ---------------------------------------------------
