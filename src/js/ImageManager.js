import Image from './Image';

export default class ImageManager {
  constructor(container) {
    this.form = container.querySelector('form');
    this.title = this.form.querySelector('[name=add-title]');
    this.url = this.form.querySelector('[name=add-url]');
    this.error = this.form.querySelector('.add-error');
    this.imagesContainer = container.querySelector('.images-container');
  }

  init() {
    this.form.addEventListener('submit', (event) => this.onSubmit(event));
  }

  onSubmit(event) {
    event.preventDefault();
    this.image = new Image(
      this.title.value,
      this.url.value,
      (element) => this.addImage(element),
    );
  }

  addImage(element) {
    if (element) {
      this.imagesContainer.appendChild(element);
      this.error.classList.remove('show');
      this.title.value = '';
      this.url.value = '';
    } else {
      this.error.classList.add('show');
    }
  }
}
