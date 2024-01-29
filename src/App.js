// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import InfiniteScroll from "./infintiscroll";

function App() {
  

  return (
    <div className="App">
      {/* {books && (
        <div className="books">
          {books.map((book, index) => (
            <div key={index}>
              <h2>{book.name}</h2>
            </div>
          ))}
        </div>
      )} */}
      {/* <h1>Test</h1> */}
      <InfiniteScroll></InfiniteScroll>
    </div>
  );
}
export default App;
