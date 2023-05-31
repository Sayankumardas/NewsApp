import React from 'react';
import Axios from 'axios';
class TopNews extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            category : 'National',
            subcategory: 'Entertainment',
            isLoaded: false
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
 changeCategory(cat){
    //to-do
    this.setState({
      category:cat
    })
    this.change(cat,this.state.subcategory)
 }
 changeSubCategory(subcat){
  //to-do
  this.setState({
    subcategory:subcat
  })
  this.change(this.state.category,subcat);
}
change(cat, subcat){
   //to-do
   console.log(cat+""+subcat)
   Axios.post("http://localhost:8080/news-app/api/getNews/"+cat+"/"+subcat+"").then(response=>{
    console.log(response.data)
    this.setState({
      news:response.data
    })
   })
   console.log(this.state.news);
}
    render(){
        const{news,category,subcategory} = this.state;
    return (
        <div className="row mt-5">
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
    <h6>Category: {category}</h6>
        <button className="badge badge-dark" onClick={()=>this.changeCategory('National')}  id="national">National</button>
        <button className="badge badge-dark" onClick={()=>this.changeCategory('International')} id="international">International</button>
          <hr/>
        <h6>SubCategory: {subcategory} </h6>
        <button className="badge badge-dark" onClick={()=>this.changeSubCategory('Entertainment')} id="entertainment">Entertainment</button>
        <button className="badge badge-dark" onClick={()=>this.changeSubCategory('Technology')} id="technology">Technology</button>
        <button className="badge badge-dark" onClick={()=>this.changeSubCategory('Business')} id="business">Business</button>
      </div>
    </div>
  </div>
  <div key={news.id} className="col-sm-9">
  {news.map((news)=>(
  <div key={news.id} className="col-sm-9">
      <div >
        <div className="card">
         <div className="card-body">
  <h5 className="card-title" id="newsTitle">{news.title}</h5>
            <small className="text-muted" id="newsCreatedAt">Created on {news.date}, </small>
            <small className="text-muted" id="newsCategory">Category: {news.category}, </small>
            <small className="text-muted" id="newsSubCategory">SubCategory: {news.subcategory}, </small>
  <small className="text-muted" id="newsAuthor">Author: {news.author}</small>
         </div>
      </div>  
    </div>
  </div>))}</div>
</div>
    );}
}

export default TopNews;