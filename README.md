---
permalink: /index.html
---
## Gif Reverser
### What?
A cilent side GIF reverser to reverse your GIFs at the client side, hopefully leaving you with a reversed GIF.

### Where?
[Here](https://dumbboi.github.io/GifReverser/)

### Why?
I've seen a few sites that reverse GIFs by decoding the file. I wanted to see if it was possible to perform reversal without decoding. Did it work? eh.

### How?
A GIF is divided into multiple chunks, with the last chunks representing the frames in the GIF. These chuncks start with bytes '''21 F9''' and end with a '''00'''. I simply copied all the chunks from the orignal GIF, reversed the image chunks (frames) and returned the binary string.
<p align = 'center'>
  <img src = 'https://github.com/DumbBoi/GifReverser/blob/master/resources/GIF%20Guide.png'>
</p>
Here are a few links that might be useful to understand GIF structure:

-[What's In A GIF](http://giflib.sourceforge.net/whatsinagif/bits_and_bytes.html)

-[LZW Example](https://www.youtube.com/watch?v=8uFqfZOiwMc)

### Why this is stupid?
Other methods decode the GIF for a reason. A frame in a GIF may or may not be completely filled, meaning that a frame might rely on what was displayed on the previous frame. A frame might also require the background to be completely empty. Simply inverting the sequence of the frames does not take this into account.
