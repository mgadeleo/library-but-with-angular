//Here we define the module for the app
angular.module('libraryApp', []);

angular.module('libraryApp').controller('bookController', function(){
  this.book = {};

  this.addBook = function(book) {
    bookListController.books.push(this.book);
  };
})
