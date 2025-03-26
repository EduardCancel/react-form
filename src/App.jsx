import { useState } from "react";


const articles = [
  {
    id: 1,
    title: "Article 1",
    description: "Article 1"
  },
  {
    id: 2,
    title: "Article 2",
    description: "Article 2"
  },
  {
    id: 3,
    title: "Article 3",
    description: "Article 3"
  },
  {
    id: 4,
    title: "Article 4",
    description: "Article 4"
  },
  {
    id: 5,
    title: "Article 5",
    description: "Article 5"
  }
]

export function App() {
  return (
    <>
      <header className="bg-light p-5 border rounded-2">
        <h1>Articles</h1>
      </header>
    </>
  )
}