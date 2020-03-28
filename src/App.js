import React,{Component,Fragment} from 'react';
import {HashRouter,Link,Route} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import User from './pages/user/user'
import Admins from './pages/administrator/adminis'
import Bdata from './pages/admin/bdata'
import BookCheck from './pages/book/bookCheck'
import Books from './pages/book/books'
class App extends Component{
  render(){
    return(
      <Fragment>
        <HashRouter>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' render={()=>{
            return( 
              <Admin>
                <Route path='/admin/bdata' component={Bdata}></Route> 
                <Route path='/admin/administrator' component={Admins}></Route>
                <Route path='/admin/bookCheck' component={BookCheck}></Route>
                <Route path='/admin/books' component={Books}></Route>
              </Admin>
            )
          }}></Route>
        </HashRouter>
      </Fragment>
    )
  }
}

export default App;
