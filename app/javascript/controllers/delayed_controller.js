import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    setTimeout(function() {
      console.log('Delayed connect:', document.getElementById('item'))
    }, 1000)
  }
}
