import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom'
class AllNews extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search : null,
            news: [],
        };
    }
    componentDidMount(){
        //to-do
        Axios.get('http://localhost:8080/news-app/api/news').then(response=>{
          this.setState({
            news:response.data
          })
        })
    }

    delete=(id)=>{
     //to-do
     Axios.post("http://localhost:8080/news-app/api/DeleteNews/"+id).then(response=>{
      window.location.reload(true) 
      alert("Deleted successfully")
     })
     
    }

    

    searchSpace=(event)=>{
       //to-do
       this.setState({
        search:event.target.value
       })
      }

render(){
   
const{news}=this.state;
    return (
        <div>
        <div className="card m-5">
  <div className="card-body">
    <input
      onChange={(e)=>this.searchSpace(e)}
      name="searchbar"
      id="searchBar"
      className="form-control"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
  </div>
</div>
{news.filter((item)=>{
      if(this.state.search == null)
          return item
      else if(item.title.toLowerCase().includes(this.state.search.toLowerCase()) || item.author.toLowerCase().includes(this.state.search.toLowerCase())){
          return item
      }
    }).map((item)=>(
<div key={item.id}  className="card w-85 m-5">
  <div className="card-body">
    <h5 className="card-title" id="newsTitle">{ item.title }</h5>
    <small className="text-muted" id="newsCreatedAt">Created on: { item.date }, </small>
    <small className="text-muted" id="newsCategory">Category: { item.category }, </small>
    <small className="text-muted" id="newsSubCategory">SubCategory: { item.subcategory }, </small>
    <small className="text-muted" id="newsAuthor">Author: { item.author }</small>
  </div>
  <div className="card-footer">
    <Link
      type="button"
      className="btn btn-primary"
      id="newsView"
      state={item.id}
      to={`/viewNews/${item.id}`
    }
    >
      View news
    </Link>
    <Link
      type="button"
      className="btn btn-success"
      id="newsUpdate"
      to={`/updateNews/${item.id}`}
    >
      Update news
    </Link>
    <button
      type="button"
      className="btn btn-danger"
      id="newsDelete"
      onClick={() => this.delete(item.id)}
    >
      Delete news
    </button>
  </div>
</div>
))}
</div>
    );
};}

export default AllNews;