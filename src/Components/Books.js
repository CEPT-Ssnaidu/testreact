import React from 'react'
// import BookListdfg from './BookListdfg';
import BookListdfg from './BooksListdfg';

export default function Books() {

    return (
        <div className="BookListdfgs">
          <BookListdfg
            image="https://m.media-amazon.com/images/I/41TevK0zP6L._SX310_BO1,204,203,200_.jpg"
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
          />
          <BookListdfg
            image="https://m.media-amazon.com/images/I/41TevK0zP6L._SX310_BO1,204,203,200_.jpg"
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@me.com"
          />
          <BookListdfg
            image="https://m.media-amazon.com/images/I/41TevK0zP6L._SX310_BO1,204,203,200_.jpg"
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
          />
          <BookListdfg
            image="https://m.media-amazon.com/images/I/41TevK0zP6L._SX310_BO1,204,203,200_.jpg"
            name="Pumpkin"
            phone="(0800) CAT KING"
            email="pumpkin@scrimba.com"
          />
        </div>
    ); 

}
