import React,{Component,Fragment} from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import User from './pages/user/user'
import Admins from './pages/administrator/adminis'
import Bdata from './pages/admin/bdata'
import './reset.less'
import BookCheck from './pages/book/bookCheck'
import BookAdd from './pages/book/bookAdd'
import BookUpdate from './pages/book/bookUpdate'
import Books from './pages/book/books'
import Lunhui from './pages/soulManage/lunHui'
import Hell from './pages/soulManage/hell'
import HellAdd from './pages/soulManage/hellAdd'
import HellUpdate from './pages/soulManage/hellUpdate'
import Equipment from './pages/judge/judgeEquipment'
import EquipAdd from './pages/judge/equipAdd'
import Money from './pages/money/money'
import Log from './pages/log/log'
import TokenModel from './components/TokenModel';
class App extends Component{
  render(){
    return(
      <Fragment>
        <HashRouter>
          <Switch>
          <Redirect exact from='/' to='/login'></Redirect>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' render={()=>{
            return( 
              <Admin>
                
                <Route path='/admin/bdata' component={Bdata}></Route> 
                <Route path='/admin/administrator' component={Admins}></Route>
                <Route path='/admin/bookCheck' component={BookCheck}></Route>
                <Route path='/admin/books' component={Books}></Route>
                <Route path='/admin/bookAdd' component={BookAdd}></Route>
                <Route path='/admin/bookUpdate/:id' component={BookUpdate}></Route>
                <Route path='/admin/lunHui' component={Lunhui}></Route>
                <Route path='/admin/hell' component={Hell}></Route>
                <Route path='/admin/hellAdd' component={HellAdd}></Route>
                <Route path='/admin/hellUpdate/:id' component={HellUpdate}></Route>
                <Route path='/admin/judgeEquipment' component={Equipment}></Route>
                <Route path='/admin/equipAdd' component={EquipAdd}></Route>
                <Route path='/admin/money' component={Money}></Route>
                <Route path='/admin/log' component={Log}></Route>
              </Admin>
            )
          }}></Route>
          <TokenModel></TokenModel>
          </Switch>
        </HashRouter>
      </Fragment>
    )
  }
}

export default App;
