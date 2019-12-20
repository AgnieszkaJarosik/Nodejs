module.exports = {
  Quote: class Quote {
    constructor(id, text, author='anonim', category='') {
      this.id = id;
      this.text = text;
      this.author = author;
      this.category = category;
      this.counter = 0;
    }
  }
};
