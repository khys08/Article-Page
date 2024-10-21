const ArticleDetails = ({ article }) => {
  const deleteHandler = async () => {
    const response = await fetch("http://localhost:4000/api/book/article", {
      method: "DELETE",
      body: JSON.stringify({ _id: article._id }),
      headers: {
        "Content-type": "application/json",
      },
    });

    console.log(JSON.stringify({ _id: article._id }));
    if(response.ok){
      location.reload()
    }
  };

  return (
    <div className="Artdet">
      {/* <p>
        Id: <span>{article._id}</span>
      </p> */}
      <h2>{article.Title}</h2>
      <p>{article.Content}</p>
      <p className="art">- {article.Author}</p>
      <button onClick={deleteHandler}>del</button>
    </div>
  );
};
export default ArticleDetails;
