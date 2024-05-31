function BookData(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        console.log(this.name+" by "+this.author+","+this.pages+","+this.status);
    }
}
const hobbit = new BookData('The Hobbit', 'J.R.R. Tolkien', '295 Pages', 'not read yet');
hobbit.info();