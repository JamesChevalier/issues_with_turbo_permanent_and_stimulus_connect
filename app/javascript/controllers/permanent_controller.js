import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log('Permanent connect:', document.getElementById('item'))
  }
}
