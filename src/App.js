import React,{Component,Fragment} from 'react';
import {HashRouter,Link,Route} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import User from './pages/user/user'
import Admins from './pages/administrator/adminis'
class App extends Component{
  render(){
    return(
      <Fragment>
        <HashRouter>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' render={()=>{
            return( 
              <Admin>
                <Route path='/admin/user' component={User}></Route> 
                <Route path='/admin/administrator' component={Admins}></Route>
              </Admin>
            )
          }}></Route>
        </HashRouter>
      </Fragment>
    )
  }
}

export default App;