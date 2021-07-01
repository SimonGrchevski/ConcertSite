let bands;
let temporaryBand = 0;
const container = document.querySelector('.faturing-bands-container');
const showMoreBtn = document.querySelector('.show-more');

function Tag(tagName, classes, src, alt, child, value) {
  this.tagName = tagName;
  this.classes = classes;
  this.src = src;
  this.alt = alt;
  this.child = child;
  this.value = value;
}

const tags = [{
  tagName: 'article',
  classes: ['band', 'flex'],
  src: '',
  alt: '',
  child: [
    new Tag('section', ['featured-band-img', 'width-35'], '', '', [], ''),
    new Tag('img', ['band-image'], './assets/images/res.jpeg', 'an image of the cover of resistance album of IQ-prog rock band', [], ''),
    new Tag('section', ['featured-band-info-container', 'width-60'], '', '', [], ''),
    new Tag('header', [], '', '', [], ''),
    new Tag('h3', [], '', '', [], 'IQ'),
    new Tag('p', ['introduction', 'clr-primary'], '', '', [], 'A brief introduction to this great band of ours'),
    new Tag('hr', ['band-info-hr'], '', '', [], ''),
    new Tag('div', ['featured-band-histroy'], '', '', [], ''),
    new Tag('p', [], '', '', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil.'),
  ],
  value: [''],
},
{
  tagName: 'article',
  classes: ['band', 'flex'],
  src: '',
  alt: '',
  child: [
    new Tag('section', ['featured-band-img', 'width-35'], '', '', [], ''),
    new Tag('img', ['band-image'], './assets/images/yes-cover.jpeg', 'an image of the cover the album of YES-prog rock band', [], ''),
    new Tag('section', ['featured-band-info-container', 'width-60'], '', '', [], ''),
    new Tag('header', [], '', '', [], ''),
    new Tag('h3', [], '', '', [], 'YES'),
    new Tag('p', ['introduction', 'clr-primary'], '', '', [], 'A brief introduction to this great band of ours'),
    new Tag('hr', ['band-info-hr'], '', '', [], ''),
    new Tag('div', ['featured-band-histroy'], '', '', [], ''),
    new Tag('p', [], '', '', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil.'),
  ],
  value: [''],
},
{
  tagName: 'article',
  classes: ['band', 'flex'],
  src: '',
  alt: '',
  child: [
    new Tag('section', ['featured-band-img', 'width-35'], '', '', [], ''),
    new Tag('img', ['band-image'], './assets/images/pf-cover.jpg', 'an image of the cover of Wish you were here album of Pink Floyd-prog rock band', [], ''),
    new Tag('section', ['featured-band-info-container', 'width-60'], '', '', [], ''),
    new Tag('header', [], '', '', [], ''),
    new Tag('h3', [], '', '', [], 'Pink Floyd'),
    new Tag('p', ['introduction', 'clr-primary'], '', '', [], 'A brief introduction to this great band of ours'),
    new Tag('hr', ['band-info-hr'], '', '', [], ''),
    new Tag('div', ['featured-band-histroy'], '', '', [], ''),
    new Tag('p', [], '', '', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil.'),
  ],
  value: [''],
},
{
  tagName: 'article',
  classes: ['band', 'flex'],
  src: '',
  alt: '',
  child: [
    new Tag('section', ['featured-band-img', 'width-35'], '', '', [], ''),
    new Tag('img', ['band-image'], './assets/images/opeth-cover.jpg', 'an image of the cover of heritage album of Opeth-prog rock band', [], ''),
    new Tag('section', ['featured-band-info-container', 'width-60'], '', '', [], ''),
    new Tag('header', [], '', '', [], ''),
    new Tag('h3', [], '', '', [], 'Opeth'),
    new Tag('p', ['introduction', 'clr-primary'], '', '', [], 'A brief introduction to this great band of ours'),
    new Tag('hr', ['band-info-hr'], '', '', [], ''),
    new Tag('div', ['featured-band-histroy'], '', '', [], ''),
    new Tag('p', [], '', '', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil.'),
  ],
  value: [''],
},
{
  tagName: 'article',
  classes: ['band', 'flex'],
  src: '',
  alt: '',
  child: [
    new Tag('section', ['featured-band-img', 'width-35'], '', '', [], ''),
    new Tag('img', ['band-image'], './assets/images/rush-cover.jpg', 'an image of the cover of album of Rush-prog rock band', [], ''),
    new Tag('section', ['featured-band-info-container', 'width-60'], '', '', [], ''),
    new Tag('header', [], '', '', [], ''),
    new Tag('h3', [], '', '', [], 'Rush'),
    new Tag('p', ['introduction', 'clr-primary'], '', '', [], 'A brief introduction to this great band of ours'),
    new Tag('hr', ['band-info-hr'], '', '', [], ''),
    new Tag('div', ['featured-band-histroy'], '', '', [], ''),
    new Tag('p', [], '', '', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil.'),
  ],
  value: [''],
},
{
  tagName: 'article',
  classes: ['band', 'flex'],
  src: '',
  alt: '',
  child: [
    new Tag('section', ['featured-band-img', 'width-35'], '', '', [], ''),
    new Tag('img', ['band-image'], './assets/images/kingC-cover.jpeg', 'an image of the album cover of King Crimson-prog rock band', [], ''),
    new Tag('section', ['featured-band-info-container', 'width-60'], '', '', [], ''),
    new Tag('header', [], '', '', [], ''),
    new Tag('h3', [], '', '', [], 'King Crimson'),
    new Tag('p', ['introduction', 'clr-primary'], '', '', [], 'A brief introduction to this great band of ours'),
    new Tag('hr', ['band-info-hr'], '', '', [], ''),
    new Tag('div', ['featured-band-histroy'], '', '', [], ''),
    new Tag('p', [], '', '', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil.'),
  ],
  value: [''],
},
{
  tagName: 'article',
  classes: ['band', 'flex'],
  src: '',
  alt: '',
  child: [
    new Tag('section', ['featured-band-img', 'width-35'], '', '', [], ''),
    new Tag('img', ['band-image'], './assets/images/camel-cover.jpeg', 'an image of the album cover of of Camel-prog rock band', [], ''),
    new Tag('section', ['featured-band-info-container', 'width-60'], '', '', [], ''),
    new Tag('header', [], '', '', [], ''),
    new Tag('h3', [], '', '', [], 'Camel'),
    new Tag('p', ['introduction', 'clr-primary'], '', '', [], 'A brief introduction to this great band of ours'),
    new Tag('hr', ['band-info-hr'], '', '', [], ''),
    new Tag('div', ['featured-band-histroy'], '', '', [], ''),
    new Tag('p', [], '', '', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil.'),
  ],
  value: [''],
},
{
  tagName: 'article',
  classes: ['band', 'flex'],
  src: '',
  alt: '',
  child: [
    new Tag('section', ['featured-band-img', 'width-35'], '', '', [], ''),
    new Tag('img', ['band-image'], './assets/images/elp-cover.jpeg', 'an image of the album cover of Emerson Lake and Palmer-prog rock band', [], ''),
    new Tag('section', ['featured-band-info-container', 'width-60'], '', '', [], ''),
    new Tag('header', [], '', '', [], ''),
    new Tag('h3', [], '', '', [], 'Emerson Lake and Palmer'),
    new Tag('p', ['introduction', 'clr-primary'], '', '', [], 'A brief introduction to this great band of ours'),
    new Tag('hr', ['band-info-hr'], '', '', [], ''),
    new Tag('div', ['featured-band-histroy'], '', '', [], ''),
    new Tag('p', [], '', '', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil.'),
  ],
  value: [''],
},
{
  tagName: 'article',
  classes: ['band', 'flex'],
  src: '',
  alt: '',
  child: [
    new Tag('section', ['featured-band-img', 'width-35'], '', '', [], ''),
    new Tag('img', ['band-image'], './assets/images/marillion.jpg', 'an image of the album cover of Marillion-prog rock band', [], ''),
    new Tag('section', ['featured-band-info-container', 'width-60'], '', '', [], ''),
    new Tag('header', [], '', '', [], ''),
    new Tag('h3', [], '', '', [], 'Marillion'),
    new Tag('p', ['introduction', 'clr-primary'], '', '', [], 'A brief introduction to this great band of ours'),
    new Tag('hr', ['band-info-hr'], '', '', [], ''),
    new Tag('div', ['featured-band-histroy'], '', '', [], ''),
    new Tag('p', [], '', '', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil.'),
  ],
  value: [''],
},
{
  tagName: 'article',
  classes: ['band', 'flex'],
  src: '',
  alt: '',
  child: [
    new Tag('section', ['featured-band-img', 'width-35'], '', '', [], ''),
    new Tag('img', ['band-image'], './assets/images/pendragon-cover.jpg', 'an image of the album cover  of Pendragon-prog rock band', [], ''),
    new Tag('section', ['featured-band-info-container', 'width-60'], '', '', [], ''),
    new Tag('header', [], '', '', [], ''),
    new Tag('h3', [], '', '', [], 'Pendragon'),
    new Tag('p', ['introduction', 'clr-primary'], '', '', [], 'A brief introduction to this great band of ours'),
    new Tag('hr', ['band-info-hr'], '', '', [], ''),
    new Tag('div', ['featured-band-histroy'], '', '', [], ''),
    new Tag('p', [], '', '', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil.'),
  ],
  value: [''],
},
];

function generateBands() {
  const articles = [];
  tags.forEach((tag) => {
    const article = document.createElement(tag.tagName);
    article.classList.add(...tag.classes);

    const childElements = [];
    tag.child.forEach((childItem) => {
      const element = document.createElement(childItem.tagName);
      childItem.classes.forEach((childClass) => {
        element.classList.add(childClass);
      });

      element.textContent = childItem.value;
      element.src = childItem.src;
      element.alt = childItem.alt;

      childElements.push(element);
    });

    childElements[0].append(childElements[1]);
    childElements[7].append(childElements[8]);
    childElements[2].append(childElements[3],
      childElements[4], childElements[5],
      childElements[6], childElements[7]);

    article.append(childElements[0], childElements[2]);

    articles.push(article);
  });
  return articles;
}

function populateBands(bands) {
  for (let i = 0; temporaryBand <= bands.length - 1 && i < 4; temporaryBand += 1, i += 1) {
    container.append(bands[temporaryBand].cloneNode(true));
  }
}

function removeBtn(length) {
  if (temporaryBand >= length) showMoreBtn.remove();
}

showMoreBtn.addEventListener('click', () => {
  populateBands(bands);
  removeBtn(bands.length - 1);
});

bands = generateBands();
populateBands(bands);