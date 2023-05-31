import Axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';

class UpdateNews extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title : String,
            description : String,
            author : String,
            date : String,
            category : 'National',
            subcategory : 'Entertainment',
            isLoaded : false,
            isUpdated : false
        }
    }
    componentDidMount(){
//to-do
      const myArr=(this.props.location.pathname).split("/")
      Axios.post("http://localhost:8080/news-app/api/viewNews/"+myArr[2]).then(response=>{
        this.state=response.data
        this.setState({
          title:response.data.title,
          description:response.data.description,
          author:response.data.author,
          category:response.data.category,
          subcategory:response.data.subcategory,
          isLoaded:true
        })
      })
    }
    handleInputChange=(event)=> {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value
        });
    }
  submit = () => {
    //to-do
    const navigate=useHistory();
    Axios.post("http://localhost:8080/news-app/api/"+this.props.location.pathname+"",this.state).then(response=>{
    console.log(response.data)  
    this.setState({
        isUpdated:true
      });    
    });
    navigate.push('/allNews');
  }
    render(){
        const{title,description,author,category,subcategory,isLoaded}=this.state;
        if(isLoaded){
    return (
        <div className="card mt-5">
  <div className="card-header">
    Update News
  </div>
  <div className="card-body">
    <form onSubmit={this.submit}>
      <div className="form-group row">
        <label  className="col-sm-2 col-form-label">News Title</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="newsTitle" placeholder="News Title" onChange={this.handleInputChange} defaultValue={title}  name="title"/>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">News Description</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="newsDescription" placeholder="News Description" onChange={this.handleInputChange} defaultValue={description}  name="description"/>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">News Author</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="newsAuthor" placeholder="News Author" onChange={this.handleInputChange} defaultValue={author}   name="author"/>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">News Category</label>
        <div className="col-sm-10">
          <select className="form-control" id="newscategory" onChange={this.handleInputChange} defaultValue={category}  name="category">
            <option value="National">National</option>
            <option value="International">International</option>
          </select>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">News SubCategory</label>
        <div className="col-sm-10">
          <select className="form-control" id="newssubcategory" onChange={this.handleInputChange} defaultValue={subcategory}  name="subcategory">
            <option value="Entertainment">Entertainment</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
          </select>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary" id="updateNews">Update News</button>
        </div>
      </div>
    </form>
    <div className="alert alert-success" role="alert" >
     {this.state.isUpdated}
    </div>
  </div>
</div>
    );}else{
        return <h1>Loading</h1>;
    }
}
}
export default UpdateNews;