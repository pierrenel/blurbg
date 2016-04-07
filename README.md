# blurbg

## Instructions

returns a blurred gif data uri of a a supplied size (default 16):

`brew install graphicsmagick`

then

`SIZE=8 node index.js`

which returns a gif data uri.

set css in the format:

`
background-image:url(data:image/gif;base64,R0lGODlhCAAFAPUnACctKSs9KyA0MCo2NCk+PSY9Qi9BKTVFKTtLNC1MTjRNSjlNSjdTTkJIPEdYM0ReMU1TOFtbIFJfPlRvLlhnNV92OmdrKWR6L2BxPWV6MlBZRlldR2VvTGN8TGp5UG+CNIlzO4mVNKGfOKOuMra4Ory/N5STXMbGOgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAIAAUAAAYlQE2H4jgYBoSNRwJBBACCBYMDaiQKisdHZIlUMKbJJRMinUqjIAA7);
background-size: cover;
`

### Via

[Dominant Colors for Lazy-Loading Images](https://manu.ninja/dominant-colors-for-lazy-loading-images)