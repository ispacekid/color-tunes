# ColorTunes

ColorTunes is a HTML5 version of the iTunes 12 album view using Javascript and CSS3, which is able to detect the colors in an album cover and generate color scheme for its track list based on the reduced color space. This version of ColorTunes is based on [ColorTunes for iTunes 11](https://github.com/dannvix/ColorTunes), which is developed by [@dannvix](http://fb.me/5ad59707473276e74191bd7d4929b95b) and [@zhusee2](https://twitter.com/zhusee2). It has made serveral improvements and optimizations for iTunes 12. Color palettes generation is based on the [MMCQ (Median Cut Color Quantization) algorithm](http://www.leptonica.com/papers/mediancut.pdf) from the [Leptonica library](http://www.leptonica.com/).

# Demo

Pleade visit [http://spacekid.me/color-tunes](http://spacekid.me/color-tunes).

# Acknowledgements

* [@dannvix](http://fb.me/5ad59707473276e74191bd7d4929b95b): Author of [ColorTunes for iTunes 11](https://github.com/dannvix/ColorTunes).
* [@zhusee2](https://twitter.com/zhusee2): Author of [ColorTunes for iTunes 11](https://github.com/dannvix/ColorTunes).
* [Nick Rabinowitz](http://github.com/nrabinowitz): [JavaScript port](https://gist.github.com/1104622) of the MMCQ algorithm.

# License

Copyright (c) 2015 太空小孩

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.