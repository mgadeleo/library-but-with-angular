angular.module('libraryApp').component('bookList', {
  templateUrl: "booklist.html",
  controller: function bookListController() {
    this.books = [
      {
        title: "Danielita es muy bella",
        author: "Arden Loo",
        pages: "69",
        haveRead: "yes"
      }, {
        title: "Nardito es un imbecil",
        author: "Lone Road",
        pages: "420",
        haveRead: "no"
      }
    ];
  }
});
