var gm = require('gm');

var size = process.env.SIZE?process.env.SIZE:16;

gm('bg.png')
    .resize(size,size)
    .toBuffer('GIF', function (error, buffer) {
        console.log('data:image/gif;base64,' + buffer.toString('base64'));
    });