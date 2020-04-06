# mozarts-ghost

Empty project.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

## Running

```sh
node dist/bundle.js
```

## Credits
Inspired by [The Net](https://www.youtube.com/watch?v=hoWEYBSlctc)
Made with [createapp.dev](https://createapp.dev/)


```js
function theNet(el, url) {
  el.style.fontFamily = 'serif'
  el.style.cursor = 'default'
  el.textContent = 'Π'
  el.title = 'so, what do you make of all this?'
  el.addEventListener('click', e => {
    if (e.ctrlKey && e.shiftKey) {
      window.location = url
    }
  })
}
```