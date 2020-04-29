### ON DEVELOPMENT...

---

# Primo.js
Simple Native/Pure JavaScript Library Without Any Library or Framework.


## Why Primo.js?
- Native/Pure JavaScript without any library or framework.
- Open-Source.
- Easy to use, edit, and handle.
- Readable code.
- Only one file to include.
- Small file size.
- CDN available with GitHub to be instantly updated.


## Usage
### CDN
Paste this code in ```<head>```.
```html
<script src="https://m-primo.github.io/Primo.js/src/Primo.min.js"></script>
```


## Example
### Document -class-, doc -variable-
#### Selectors:
* .selector = class
* #selector = id
* @selector = name
* selector = element
* this = current element

#### Examples:
* toggle element by class selector with name (toggler_test) -> doc('.toggler_test').toggle()
* change text of an element (this) -> doc(this).text = 'new text'
* get text of an element (this) -> doc(this).text

### eMath -class-, math -variable-
#### Examples:
* random integer from 1 to 99 -> math.randInt(1, 99)
* find maximum number of (1,2,3,484,11,22,78,1544,222) -> math.findMax(1,2,3,484,11,22,78,1544,222)
* random numbers, from dice game -> math.dice()
* get factorial of 5 -> math.factorial(5)

---

To find more, please check the [documentation](docs/documentation.md) & html test pages:
* [main test source](test/primojs.html) - [main test view](https://m-primo.github.io/Primo.js/test/primojs.html)
* [minified test source](test/mintest.html) - [minified test view](https://m-primo.github.io/Primo.js/test/mintest.html)
* [cdn test source](test/cdntest.html) - [cdn test view](https://m-primo.github.io/Primo.js/test/cdntest.html)

don't forget to check the console.


## Changelog
* Version 1 -> closed-source, 'Primo JavaScript Library V1.0'.
* Version 2 -> open-source, 'Primo JS Library'.
* Version 3 -> open-source, 'Primo.js'.

(Time in UTC)
* Created                 [   Sep 07, 2017 22:26    ]
* Fully changed           [   May 10, 2019 14:19    ]
* Open Source             [   May 16, 2019 08:26    ]
* Version 3               [   Jun 22, 2019 05:18    ]
* Last source update      [   Oct 23, 2019 16:04    ]


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## Copyright
(C) Primo

https://primodpd.blogspot.com

https://mp-primo.blogspot.com

https://mp-primo.blogspot.com/primo

https://github.com/m-primo/Primo.js

Open-Source, MIT License

Primo.js


## License
[MIT](https://choosealicense.com/licenses/mit/)
