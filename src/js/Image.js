export default class Image {
  constructor(name, url, addToDOMCallback) {
    this.name = name;
    this.url = url;
    this.addToDOM = addToDOMCallback;
    this.create();
  }

  create() {
    this.element = document.createElement('div');
    this.element.classList.add('image-container');
    this.element.innerHTML = `    
      <img src="${this.url}" alt="нет картинки" height="100">
      <h1 class="image-title">${this.name}</h1>      
      <div class="image-close">
        <p>x</p>
      </div>
    `;

    const image = this.element.querySelector('img');

    image.addEventListener('load', () => {
      this.addToDOM(this.element);
    });

    image.addEventListener('error', () => {
      this.addToDOM(null);
      delete this;
    });

    const closeButton = this.element.querySelector('.image-close');

    closeButton.addEventListener('click', () => {
      this.element.parentNode.removeChild(this.element);
      delete this;
    });
  }
}
