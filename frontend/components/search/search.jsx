import React from 'react';

const posts = [
  { id: "1", name: "This first post is about React" },
  { id: "2", name: "This next post is about Preact" },
  { id: "3", name: "We have yet another React post!" },
  { id: "4", name: "This is the fourth and final post" },
];
const Search = () => (
  <form className="the-whole-search-box" action="/" method="get">
    <div className="search-box-homepage-container">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
        className="search-box-home"
        type="text"
        id="header-search"
        placeholder="  e.g. taco, pancake, boba.."
        name="s"
      />
      <input
        className="search-box-home"
        type="text"
        id="header-search"
        placeholder="  City, town.. "
        name="s"
      />
      <button type="submit" className="search-box-submit-bttn-home">
        <img className="submit-icon-petday" src="/petday_img/petday_icon.png" alt="" />
      </button>
    </div>
  </form>
);

export default Search;

