let cards;
const container = document.querySelector('.faturing-bands-container');

function Tag(tagName, classes, src, alt,child, value) {
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
    new Tag('section', ['featured-band-img', 'width-35'], '', '',[],''),
    new Tag('img', ['band-image'], './assets/images/res.jpeg', 'an image of the cover of resistance album of IQ-prog rock band',[],''),
    new Tag('section', ['featured-band-info-container', 'width-60'], '', '',[],''),
    new Tag('header', [], '', '',[],''),
    new Tag('h3', [], '', '',[],'IQ'),
    new Tag('p', ['introduction','clr-primary'], '', '',[],'A brief introduction to this great band of ours'),
    new Tag('hr', ['band-info-hr'], '', '',[],''),
    new Tag('div', ['featured-band-histroy'], '', '',[],''),
    new Tag('p', [], '', '',[],'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil.')
  ],
  value: ['']
}
];


function generateCards() {
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
    childElements[2].append(childElements[3], childElements[4], childElements[5], childElements[6], childElements[7]);
    

    article.append(childElements[0], childElements[2]);

    articles.push(article);
  });
  return articles;
}

function populateCards(cards) {
  console.log(cards[0]);
  for (let i = 0; i < 7; i += 1) {
    container.append(cards[0].cloneNode(true));
  }
}

cards = generateCards();
populateCards(cards);