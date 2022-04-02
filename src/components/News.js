import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import LoadingBar from 'react-top-loading-bar'


const News = (props) => {

    const [loading, setloading] = useState(false)
    // const [page, setpage] = useState(1)
    // const [totalresults, settotalresults] = useState(0)

    const [data, setData] = useState([])
    const [progress, setProgress] = useState(10)



    useEffect(() => {


        setloading(true)
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=821f87bef3294786b9bd80f81d48fdb0`



        const getData = async () => {

            const Datafetch = await fetch(url);
            const parsedData = await Datafetch.json();
            // const finalData = parsedData
            // console.log(finalData);
            setData(parsedData.articles)
            setloading(false)
            setProgress(100)
        }
        getData();

    }, [])



    return (
        <>

            <div>
                <LoadingBar
                    color='#f11946'
                    progress={progress} />
            </div>
            <div className='container my-5 pt-5 text-center'>
                <h2 className='my-3'>Headlines</h2>
                {loading && <Spinner />}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {data.map((element) => {
                        return <Newsitem key={element.urlToImage} title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 110) : ""} newsUrl={element.url} imgUrl={element.urlToImage} date={element.publishedAt} author={element.author ? element.author : "Unknown"} />
                    })}
    
                </div>

            </div>

        </>
    )
}

export default News