# Spotify/LastFM OBS Overlay


> ### Warning: This is a very experimental solution. And breaks time to time.
> A solution that allows you to show your current song on [LastFM](https://www.last.fm/)/[Spotify](https://www.spotify.com/) as an overlay in [OBS](https://obsproject.com/) with no login, local software or api keys needed, just set a username.


### How 2 use
#### Example:
use the `username` query parameter to set your username
```
https://overlay.x3.lol/?username=arcanuwu
```
or alternatively
```
https://ndzn.github.io/lastfm-obsoverlay/?username=arcanuwu
```

#### Config options:
##### `delay` (default: `3000`) to set the delay between the visual track change.
<!-- ##### `key` (default: `null`) to set the LastFM API key. (not needed if you use the public hosted API) (not implemented yet) -->

### Themes
#### Default:
```
https://overlay.x3.lol/
```
#### Square:
```
https://overlay.x3.lol/square/
```
More soon™️

#### This uses [https://github.com/ndzn/lastfm-websocket/](https://github.com/ndzn/lastfm-websocket/) as a public API. It may get rate limted by LastFM at any time.