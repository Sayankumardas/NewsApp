import React from 'react';
import { Route, Switch, Redirect, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import AllNews from './components/AllNews';
import AddNews from './components/AddNews';
import TopNews from './components/TopNews';
import ViewNews from './components/ViewNews';
import UpdateNews from './components/UpdateNews';

function App() {
  return (
    <div className = "test">
      <BrowserRouter>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/news-app">News App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" id ='home' to="/">Home</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" id ='allNews' to="/allNews">All News</Link>
      </li>
      <li className="nav-item active">
      <Link className="nav-link" id ='addNews' to="/addNews">Add News</Link>
     </li>
      <li className="nav-item active">
      <Link className="nav-link" id ='topNews' to="/topNews">Top News</Link>
        </li>
    </ul>
  </div>
</nav>
<div className="container">
<Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/allNews" component={AllNews} />
        <Route exact path="/addNews" component={AddNews} />
        <Route exact path="/topNews" component={TopNews} />
        <Route exact path="/viewNews/:id" component={ViewNews} />
        <Route exact path="/updateNews/:id" component={UpdateNews} />
        </Switch> 
</div>

      </BrowserRouter>
</div>
  );
}

export default App;
