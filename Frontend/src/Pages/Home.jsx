import { useEffect,useState } from "react"

import ArticleForm from "../components/ArticleForm"
import ArticleDetails from "../components/ArticleDetails"
const Home =() =>{
    const [article,setArticles] = useState(null)

    useEffect(()=>{
        const fetchArticle =async()=>{
            const response = await fetch('http://localhost:4000/api/book/article')
            const json = await response.json()

            if(response.ok){
                setArticles(json)
            }
        }
        fetchArticle()
    },[])
    console.log(article)
    return(
        <div className="home">
            <div className="articles">
                {article &&  article.map((article, index)=>(
                    <ArticleDetails key={article._id} article={article}/>
                ))}
            </div>
            <ArticleForm />
            
        </div>
    )
}

export default Home