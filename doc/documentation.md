* Between brackets ([data_type argument = value]), optional argument 'argument' of data type 'data_type' with default value 'value'.
* Example of an element in this documentation:

## property_name -> Property Name
### ```return_data_type property_name(data_type argument_1, [data_type argument_2 = value])``` -> Usage 
```property_name('value_1', 'value_2')``` -> Simple Example

Short description of property. -> Description


---

## go
### ```void go(string url, [bool newWindow = false])```
```go('https://google.com', true)```

Go to another url.


## reload
### ```void reload()```
```reload()```

Reload the page.


## warn
### ```void warn(string url, string msg)```
```warn('delete.php?id=1', 'Are you sure you want to delete this')```

Warn the user about an action.


## debug
### ```void debug(mixed msg)```
```debug('this message will show in console')```

Type in console.


## isElement
### ```bool isElement(mixed o)```
```isElement(this)```

Check if that is element.


## scrollWindowBy
### ```void scrollWindowBy(double x, double y)```
```scrollWindowBy(100, 25)```

Scroll by x, y.


---

# eMath [math]
### ```math.property```
```math = (new eMath())```

Mathematics.

## factorial
### ```int factorial(int k)```
```math.factorial(5)```

Get factorial of a number.


## fibonacci
### ```int fibonacci(int k)```
```math.fibonacci(5)```

Get fibonacci of a number.


## rand
### ```double rand()```
```math.rand()```

Generate random number.


## randInt
### ```int randInt(int min, int max)```
```math.randInt(1, 99)```

Generate random integer from min to max.


## randFloat
### ```float randFloat(float min, float max)```
```math.randFloat(0.1, 0.9)```

Generate random float from min to max.


## dice
### ```int dice()```
```math.dice()```

Generate random integer as a dice game.


## findMax
### ```dobule findMax([double, ...])```
```math.findMax(1,2,3,484,11,22,78,1544,222)```

Find the maximum number from all the arguments.


## sumAll
### ```double sumAll([double, ...])```
```math.sumAll(1,2,3,484,11,22,78,1544,222)```

Get the summation of all numbers from all the arguments.


## subAll
### ```double subAll([double, ...])```
```math.subAll(1,2,3,484,11,22,78,1544,222)```

Get the subtraction of all numbers from all the arguments.


## divAll
### ```double divAll([double, ...])```
```math.divAll(1,2,3,484,11,22,78,1544,222)```

Get the division of all numbers from all the arguments.


## mulAll
### ```double mulAll([double, ...])```
```math.mulAll(1,2,3,484,11,22,78,1544,222)```

Get the multiplication of all numbers from all the arguments.


# Document(selector) [doc(selector)]
### ```doc(selector).property```
```doc = function(e){return (new Document(e))}```

Selectors and main methods/properties.

**Selectors:**
* .selector = class
* #selector = id
* @selector = name
* selector = element
* this = current element


## html
### ```void html = string html```
```doc(this).html = '<p>this is new html</p>'```

Set html of an element.


## html
### ```string html```
```doc('.x').html```

Get html of an element.


## text
### ```void text = string txt```
```doc('.y').text = 'new text'```

Set text of an element.


## text
### ```string text```
```doc('.t').text```

Get text of an element.


## delete
### ```void delete()```
```doc(this).delete()```

Remove an element.


## hide
### ```void hide()```
```doc('@change_email').hide()```

Hide an element.


## show
### ```void show([string display = 'block'])```
```doc('@change_email').show('inline-block')```

Show an element, you can set the display, default is block.


## toggle
### ```void toggle([string display = 'block'])```
```doc('#content').toggle()```

Toggle (show and hide) an element, you can set the display, default is block.


## process
### ```void process([bool selfStyle = false])```
```doc(this).process()```

If you make a process, make this on button, if you set the arugment to true, you can set a css class with the current button's class and disable, like if the button's class is 'btn' so you can set the class 'btn.disable'.


## loadingDots
### ```void loadingDots()```
```doc('.loading_txt').loadingDots()```

This will put three loading dots at the end of the text.


---

*April 29, 2020 22:30 UTC*