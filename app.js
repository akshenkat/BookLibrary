
class Library {
    #books;
  
    constructor(initialBooks = []) {
      this.#books = initialBooks;
    }
  
    get allBooks() {
      return this.#books;
    }
  
    addBook(title) {
      if (this.#books.includes(title)) {
        throw new Error(`The book "${title}" already exists in the library`);
      }
      this.#books.push(title);
    }
  
    removeBook(title) {
      const index = this.#books.indexOf(title);
      if (index === -1) {
        throw new Error(`The book "${title}" does not exist in the library`);
      }
      this.#books.splice(index, 1);
    }
  
    hasBook(title) {
      return this.#books.includes(title);
    }
  }
  
  // for example
  
  const myLibrary = new Library(['Book1', 'Book2']);
  console.log(myLibrary.allBooks); // ["Book1", "Book2"]
  myLibrary.addBook('Book3');
  console.log(myLibrary.allBooks); // ["Book1", "Book2", "Book3"]
  console.log(myLibrary.hasBook('Book2')); // true
  
  myLibrary.removeBook('Book1');
  console.log(myLibrary.allBooks); // ["Book2", "Book3"]
