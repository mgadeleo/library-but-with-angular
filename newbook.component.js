angular.module('libraryApp').component('newBook', {
  templateUrl: 'newbook.html',
  controller: function bookController() {
    this.book = {};

    this.addBook = function(book) {
      books.push(this.book);
    };
  }
});
