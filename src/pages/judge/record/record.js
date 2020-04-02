import React,{ Component } from "react";
import { List, Avatar} from 'antd';
import style from './index.module.less'
class JudgeRecord extends Component {
  state = {
    initLoading: true,
    loading: false,
    data: [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ],
  }
  componentDidMount() {
  
  }
  render() {
    let {data} = this.state
    return (
      <List
      className={style.box}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item >
          <List.Item.Meta
            avatar={<Avatar src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585828828764&di=fdeb9f6822858dc94057b28e5eed6c65&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10111%2F715%2Fw450h265%2F20200225%2F1a39-ipzreiv8636505.jpg" />}
            title={item.title}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item> 
     )}
    />)
  }
}
export default JudgeRecord