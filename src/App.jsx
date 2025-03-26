import React, { useState } from "react";
import articles from "./data/articles";


export default function App() {
  const [newArticle, setNewArticle] = useState('');
  const [articleList, setArticleList] = useState(articles);

  function handleFormSubmit(e) {
    e.preventDefault();


    setArticleList([...articleList, newArticle]);


    setNewArticle('');
  }

  return (
    <>
      <h1 className="text-center">My Articles</h1>

      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              name="new_article"
              id="new_article"
              placeholder="Enter Article Title"
              value={newArticle}
              onChange={e => setNewArticle(e.target.value)}
            />
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>

        <ul className="list-group">
          {articleList.map((article, index) => (
            <li key={`article-${index}`} className="list-group-item d-flex justify-content-between align-items-center">
              {article}
              <button className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}




