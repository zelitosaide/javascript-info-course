// Don’t take width/height from CSS
// So why not to read the width of an element with getComputedStyle, like
// this?
// Why should we use geometry properties instead? There are two reasons:
// 1. First, CSS width/height depend on another property: box-sizing that
//    defines “what is” CSS width and height. A change in box-sizing for CSS
//    purposes may break such JavaScript.
// 2. Second, CSS width/height may be auto, for instance for an inline element:
