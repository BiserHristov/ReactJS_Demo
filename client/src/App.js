import { Component } from 'react'
import { Route, Link, NavLink, Redirect, Switch, Routes, Navigate } from 'react-router-dom'
import * as postService from './services/postServices';

import style from './App.module.css'
import Header from './components/Header/Header';
import Main from './components/Main';
import Menu from './components/Menu';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Alltest from './components/Alltest';
import Test from './components/Test';
import Bundles from './components/Bundles';

// function App() {
//   return (
//     <div className={style.app}>

//       <Header />
//       <div className={style.container}>
//         <Menu />
//         <Main />

//       </div>

//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      selectedPost: null
    }
  }

  componentDidMount() {
    postService.getAll()
      .then(posts => {
        this.setState({
          posts: posts
        })
      })
  }

  onMenuItemClick(id) {
    this.setState({ selectedPost: id })
  }

  getPosts() {
    if (!this.state.selectedPost) {
      return this.state.posts
    } else {
      return [this.state.posts.find(p => p.id == this.state.selectedPost)]

    }
  }

  render() {

    return (
      <div className={style.app}>
        <Header />
        <div className={style.container}>
          <Menu onMenuItemClick={this.onMenuItemClick.bind(this)} />
          <Routes>
            <Route path='/' element={<Main posts={this.getPosts()} />} />
            <Route path='/about' element={<About />} />
            <Route path='/test' element={<Test />} >
              <Route path='all' element={<Alltest />} />
              <Route path='bundles' element={<Bundles />} />
            </Route>
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='*' element={<h1>Error Page</h1>} />

          </Routes>

        </div>
      </div>)
  }
}

export default App;

