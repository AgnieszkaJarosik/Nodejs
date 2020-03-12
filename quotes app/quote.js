module.exports = {
  Quote: class Quote {
    constructor(id, text, author, category='Inne') {
      this.id = id;
      this.text = text;
      this.author = author;
      this.category = category;
      this.counter = 0;
    }
  }
};
