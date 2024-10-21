import { useState } from "react";

const ArticleForm = () => {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Author, setAuthor] = useState("");
  const [error, setError] = useState(null);

  const handleArticle = async (e) => {
    e.preventDefault();

    const article = { Title, Content, Author };

    const response = await fetch("http://localhost:4000/api/book/article", {
      method: "POST",
      body: JSON.stringify(article),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setContent("");
      setAuthor("");
      console.log("new workout added", json);
      location.reload();
    }
  };

  return (
    <form className="Form" onSubmit={handleArticle}>
      <fieldset>
        <legend>Post Your Article</legend>
        <label htmlFor="title">Article Title:</label>
        <input
          id="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={Title}
          placeholder="Enter the title of your article"
        />
        <br />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          onChange={(e) => setContent(e.target.value)}
          value={Content}
          rows="6"
          placeholder="Write the content of your article here"
        />
        <br />
        <label htmlFor="author">Author:</label>
        <input
          id="author"
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          value={Author}
          placeholder="Enter the author's name"
        />
        <br />
        <button type="submit">POST</button>
      </fieldset>
    </form>
  );
};

export default ArticleForm;
