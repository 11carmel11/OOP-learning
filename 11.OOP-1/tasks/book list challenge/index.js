class Book {
  constructor(genre, author) {
    this.genre = genre;
    this.author = author;
    this.read = false;
    this.date = "";
  }
}

class BookList {
  constructor(red, toRead, next, last, current) {
    this.red = red;
    this.toRead = toRead;
    this.nextToRead = next;
    this.lastRed = last;
    this.currentReading = { current };
    this.list = [];
  }
  add(obj) {
    this.list.push(obj);
    this.toRead++;
  }
  finishCurrentBook() {
    this.red++;
    this.toRead--;
    this.currentReading.read = true;
    this.currentReading.date = `${Date().split(" ")[2]}.${
      Date().split(" ")[1]
    }.${Date().split(" ")[3]}`;
    this.lastRed = this.currentReading;
    this.currentReading = this.nextToRead;
    this.nextToRead = this.list[this.list.indexOf(this.currentReading) + 1];
  }
}
