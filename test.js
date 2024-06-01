const addbtn = document.getElementById('addbtn');
const display = document.getElementById('text');
const bookdisplay = document.getElementById('bookdisplay');
const AMemoryCalledEmpire = new Book("A Memory called Empire", "Arkady Martine", 462, "not read yet");
const Dune = new Book("Dune", "Frank Herbert", 800, "read");
const dialogElem = document.getElementById("dialog");
const showBtn = document.getElementById("show");
const closeBtn = document.querySelector(".close");
const form  = document.getElementById('form')
const bookdisplaycontainer = document.getElementById('bookdisplaycontainer');
const myLibrary = [AMemoryCalledEmpire, Dune,];
showBtn.addEventListener("click", () => {
    dialogElem.showModal();
});
closeBtn.addEventListener("click", () => {
    //SDialog won't send the data to the server directly
    event.preventDefault();
    dialogElem.close();
    //Collecting data from the form
    const formData = new FormData(form);
    const bookname = formData.get('bookname');
    const author = formData.get('bookauthor');
    const pages = formData.get('bookpages')
    const readingStatus = formData.get('readingstatus')
    //Checking whether data has been received.
    console.log(bookname);
    console.log(author);
    console.log(pages);
    console.log(readingStatus);
    const newBook = new Book(bookname, author, pages, readingStatus);
    myLibrary.push(newBook);
    displayonScreen(newBook);
    form.reset();
});

// Displaying text
for (let i = 0; i < myLibrary.length; i++) {  // Use myLibrary.length
    displayonScreen(myLibrary[i]);
  }
function displayonScreen(book) {
    var div = document.createElement("div");
    div.id = "displaycard";
    div.classList.add("book-info");

    // Create heading element for the book name
    var heading = document.createElement("h2");
    heading.textContent = book.name;
    heading.classList.add("heading");

    // Create paragraph element for the book info
    var bookInfo = document.createElement("p");
    bookInfo.textContent = `Author: ${book.author}\nPages: ${book.pages} \nReading Status: ${book.status}`;
    bookInfo.style.whiteSpace = "pre-wrap";
    div.classList.add("text");

    // Create remove button
    var removebtn = document.createElement("button");
    removebtn.classList.add('removebtn');
    removebtn.textContent = "Remove";
    div.classList.add("removebutton");

    // Append elements to the div
    div.appendChild(heading);
    div.appendChild(bookInfo);
    div.appendChild(removebtn);

    // Append div to the book display container
    const bookdisplaycontainer = document.querySelector('.bookdisplaycontainer');
    bookdisplaycontainer.appendChild(div);

    // Remove book on button click
    removebtn.addEventListener('click', function() {
        bookdisplaycontainer.removeChild(div);
    });

}
// BookInfo Constructor
function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}