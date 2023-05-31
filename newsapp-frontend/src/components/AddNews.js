import Axios from 'axios';
import React from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';

class AddNews extends React.Component {

  constructor() {
    super();
    this.state = {
      title: String,
      description: String,
      author: String,
      category: 'National',
      subcategory: 'Entertainment',
      isAdded: String
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }
  submit = () => {
    //to-do
    Axios.post("http://localhost:8080/news-app/api/news/addNews",this.state).then((response)=>{
      console.log(response.data)
    })
    this.setState({
      isAdded:"News Added Successfully"
    })
  }
  render() {
    return (
      <div>
        <div className="card mt-5">
          <div className="card-header">
            Add News
          </div>
          <div className="card-body">
            <form onSubmit={this.submit}>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">News Title</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="newsTitle" onChange={this.handleInputChange} name="title" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">News Description</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="newsDescription" onChange={this.handleInputChange} name="description" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">News Author</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="newsAuthor" onChange={this.handleInputChange} name="author" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">News Category</label>
                <div className="col-sm-10">
                  <select className="form-control" value={this.state.category} id="newscategory" onChange={this.handleInputChange} name="category">
                    <option value="National">National</option>
                    <option value="International">International</option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">News SubCategory</label>
                <div className="col-sm-10">
                  <select className="form-control" value={this.state.subcategory} id="newssubcategory" onChange={this.handleInputChange} name="subcategory">
                    <option value="Entertainment">Entertainment</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary" id="addNewsBtn">Add News</button>
                </div>
              </div>
            </form>

            <div className="alert alert-success" role="alert" >
              {this.state.isAdded}
            </div>
          </div>
        </div></div>
    );
  }
}

export default AddNews;