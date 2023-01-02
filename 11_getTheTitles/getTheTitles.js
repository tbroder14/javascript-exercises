const getTheTitles = function(books) {      
    let myBooks = books
    let book1 = [myBooks[0].title]
    let book2 = [myBooks[1].title]
    let book = book1.concat(book2)
    console.log(book)

    // const iterator = myBooks.values();
    // for (const letter of iterator) {
    //     console.log(letter)
    //     // console.log(Object.values(myBooks));
    // }
    // let myBooks = books.find(({ title }) => title === '');
    // console.log(myBooks)
    // myBooks.filter(books => books.title); 

    // let car = cars.find(car => car.color === "red")
    // for (let i=0; i < myBooks.length; i++) {
        
    //     console.log(Object.values(myBooks));
    // } 
    return book
      
}  

// Do not edit below this line
module.exports = getTheTitles;

