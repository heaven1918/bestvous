import React,{Component,Fragment} from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import loadable from './utils/loadable'
import './reset.less'
import TokenModel from './components/TokenModel';
const Login = loadable(()=>import('./pages/login/login'))
// import Admin from './pages/admin/admin'
const Admin = loadable(()=>import('./pages/admin/admin'))
// import Admins from './pages/administrator/adminis'
const Admins = loadable(()=>import('./pages/administrator/adminis'))
// import Bdata from './pages/admin/bdata'
const Bdata = loadable(()=>import('./pages/admin/bdata'))
// import BookCheck from './pages/book/bookCheck'
const BookCheck = loadable(()=>import('./pages/book/bookCheck'))
// import BookAdd from './pages/book/bookAdd'
const BookAdd = loadable(()=>import('./pages/book/bookAdd'))
// import BookUpdate from './pages/book/bookUpdate'
const BookUpdate = loadable(()=>import('./pages/book/bookUpdate'))
// import Books from './pages/book/books'
const Books = loadable(()=>import('./pages/book/books'))
// import Lunhui from './pages/soulManage/lunHui'
const Lunhui = loadable(()=>import('./pages/soulManage/lunHui'))
// import Hell from './pages/soulManage/hell'
const Hell = loadable(()=>import('./pages/soulManage/hell'))
// import HellAdd from './pages/soulManage/hellAdd'
const HellAdd = loadable(()=>import('./pages/soulManage/hellAdd'))
// import HellUpdate from './pages/soulManage/hellUpdate'
const HellUpdate = loadable(()=>import('./pages/soulManage/hellUpdate'))
// import Equipment from './pages/judge/judgeEquipment'
const Equipment = loadable(()=>import('./pages/judge/judgeEquipment'))
// import EquipAdd from './pages/judge/equipAdd'
const EquipAdd = loadable(()=>import('./pages/judge/equipAdd'))
// import JudgeRecord from './pages/judge/record/record'
const JudgeRecord = loadable(()=>import('./pages/judge/record/record'))
// import Money from './pages/money/money'
const Money = loadable(()=>import('./pages/money/money'))
// import Log from './pages/log/log'
const Log = loadable(()=>import('./pages/log/log'))
class App extends Component{
  render(){
    return(
      <Fragment>
        <HashRouter>
          <Switch>
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
                <Route path='/admin/judgeRecord' component={JudgeRecord}></Route>
                <Route path='/admin/money' component={Money}></Route>
                <Route path='/admin/log' component={Log}></Route>
              </Admin>
            )
          }}></Route>
          <Redirect exact from='/*' to= '/login' />
          </Switch>
          <TokenModel></TokenModel>
        </HashRouter>
      </Fragment>
    )
  }
}

export default App;
