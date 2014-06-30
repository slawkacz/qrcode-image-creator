# qrcode-image-creator.js

<a href='http://slawkacz.github.com/qrcode-image-creator'>qrcode-image-creator.js</a>
is javascript qrcode images generation*.
It allow you to easily add qrcode to your webpages.
It is standalone, less than 4k after minify+gzip, no image download.
It doesnt rely on external services which go on and off, or add latency while loading.
It is based on a <a href='http://www.d-project.com/qrcode/index.html'>library</a>
which build qrcode in various language. <a href='http://slawkacz.github.com/qrcode-image-creator'>qrcode-image-creator.js</a> wraps
it to make it easy to include in your own code.

Show, dont tell, here is a <a href='https://github.com/slawkacz/qrcode-image-creator/blob/master/examples/basic.html'>example</a>

## How to Use It

Let me walk you thru it. First include it in your webpage with the usual script tag
    
    <script type="text/javascript" src="qrcode-image-creator.min.js"></script>

Create instance of qrImageCreator, and pass text parametr with your text to encode

    var qrImageCreator = new qrImageCreator({text:'test text'});

Then call create method, which return base64 string;

    var imgSrc = qrImageCreator.create();

Now whe you have base64 image string, you can create image with this src:

    var imgEl = document.createElement('img);
    imgEl.src = imgSrc;
    docuemnt.body.appendChild(imgEl);

This is it. see it <a href='examples/basic.html'>live</a>.

You can set the height and width of the generated qrcode:

    new qrImageCreator({width: 64,height: 64,text: "size doesn't matter"});

## Conclusion
<a href='http://slawkacz.github.com/qrcode-image-creator'>qrcode-image-creator.js</a> is available on github
<a href='https://github.com/slawkacz/qrcode-image-creator'>here</a>
under <a href='https://github.com/slawkacz/qrcode-image-creator/blob/master/MIT-LICENSE.txt'>MIT license</a>.
If you hit bugs, fill issues on github.
Feel free to fork, modify and have fun with it :)
