import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // uncomment this line:
    // debugger
    // refresh the browser page while on the 'no' page
    // click the link to go to the 'yes' page
    // in the browser console, run document.getElementById('item') ... it will return null
    // in the browser console, run document & navigate into the html->body ... you will see <meta name="turbo-permanent-placeholder" content="container">

    console.log('Show connect:', document.getElementById('item'))
    document.getElementById('item').classList.remove('hidden')
  }
}
