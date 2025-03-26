import { useState } from "react";




export function App() {

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

  const [tasks, setTasks] = useState(articles)






  return (
    <>
      <div className="container">
        <h1 className="text-center">
          My Articles
        </h1>

        <div className="card">
          <div className="card-body">
            {
              articles.map(article => (
                <h3 key={article.id}>
                  {article.title}
                </h3>
              ))
            }

          </div>
        </div>

      </div>
    </>
  )
}

export default App;