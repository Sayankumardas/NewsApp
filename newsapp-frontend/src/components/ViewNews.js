import Axios from 'axios';
import React from 'react';
import {Redirect, Link} from 'react-router-dom';
class ViewNews extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news : null,
            isLoaded : false,
            idDeleted : false
        }
    }
    componentDidMount(){
//to-do
     Axios.post("http://localhost:8080/news-app/api/"+this.props.location.pathname+"").then(response=>{
      this.setState({
        news:response.data,
        isLoaded:true
      })
      
     })
    }

    delete=()=>{
      Axios.post("http://localhost:8080/news-app/api/DeleteNews/"+this.state.news.id).then(response=>{
      window.location.reload(true) 
      alert("Deleted successfully")
     })
//to-do
    }
    render(){
        const{news,isLoaded, isDeleted}=this.state;
        console.log(news);
        if(isDeleted){
    return (
        <Redirect to="/allNews"/>
    )
        }else{
        if(isLoaded){
    return (
        <div>
         <div className="card w-85 m-5">
        <div className="card-body">
          <h5 className="card-title" id="newsTitle">{ news.title }</h5>
          <small className="text-muted" id="newsCreatedAt"
            >Created on { news.date }, </small
          >
          <small className="text-muted" id="newsCategory"
            >Category: { news.category }, </small
          >
          <small className="text-muted" id="newsSubCategory">SubCategory: {news.subcategory }, </small>
          <small className="text-muted" id="newsAuthor">Author: { news.author }</small>
          <p>{ news.description }</p>
        </div>
        <div className="card-footer">
          <Link
            type="button"
            className="btn btn-success"
            id="newsUpdate"
           to= {`/updateNews/${news.id}`}
          >
            Update news
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            id="newsDelete"
            onClick={()=>this.delete()}
          >
            Delete news
          </button>
        </div>
    </div> 
      </div>
    )}else{
return <h1>Loading</h1>;
    }}};
}

export default ViewNews;