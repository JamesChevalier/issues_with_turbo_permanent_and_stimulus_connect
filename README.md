# README

## Setup

- `bundle`
- `yarn`
- `bin/dev`

## View The Issue

- Visit http://localhost:3000/yes
- Click the link to visit the 'no' page
- See the error in the browser console
- Click the link to visit the 'yes' page
- See the error in the browser console

The same behavior can be seen by starting with the 'no' page.

If the connect function is delayed, the error will not occur (confirmed with `delayed_controller.js` and its browser console output).

The error will not occur for the Stimulus controller that's connected to the initial rendering (`permanent_controller.js`).

## Verify The Issue

- Uncomment `debugger` in `hide_controller.js`
- Refresh the page while on the 'yes' page
- Click the link to go to the 'no' page
- Run `document.getElementById('item')` in the browser console ... it will return null
- Then run `document` & navigate into the html->body ... you will see `<meta name="turbo-permanent-placeholder" content="container">`

## Secondary Issue/Question

I notice the `delayed_controller.js` doubles up its browser console output, and I don't know why.

## Background Info

I use this approach to keep a single instance of Mapbox GL JS on the page throughout a user's visit.

If your journey starts on a page with a map, then that `permanent_controller.js` does all the work to initialize the map.

If your journey starts on a page without a map, then it does not initialize a map & `hide_controller.js` ensures the `hidden` class is present.
Whenever you do navigate to a page with a map on it, there's a controller that initializes the map if it isn't already initialized and removes the `hidden` class.
