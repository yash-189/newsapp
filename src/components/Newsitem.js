import React from 'react'


const Newsitem = (props) => {
    return (
        <>
        <div className='container my-5'>
            
               
               
                <div className="col-md">
                    
                    <div className="card h-100 ">
                    <div className='d-flex position-absolute'>
                    <span className="badge rounded-pill bg-primary">{props.author}</span>
                    </div>
                        <img src={props.imgUrl} className="card-img-top " alt="image not available"/>
                            <div className="card-body">
                                <h5 className="card-title">{props.title}....</h5>
                                <p className="card-text">"{props.description}...."</p>
                                
                            </div>
                            <a href={props.newsUrl} target= "_blank" className="btn btn-primary">Read more</a>
                            <div className="card-footer">
                                <small className="text-muted">`{new Date(props.date).toGMTString()}`</small>
                            </div>
                  
                </div>
            </div>
            </div>
        </>
    )
}

export default Newsitem