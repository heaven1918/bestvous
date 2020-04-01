import React, { Component} from 'react'
import style from './bdata.module.less' 
import { Collapse,Progress  } from 'antd';
import ReactEcharts from 'echarts-for-react'

const { Panel } = Collapse;


class Bdata extends Component{
  mb(){
    return{
      xAxis: {
        type: 'category',
        data: ['0', '2', '3', '4', '5', '6', '7','8','9','10']
    },
    yAxis: {
        type: 'value',
        data: ['0', '50', '100'],
    },
    series: [{
        data: [82, 93, 90, 93, 19, 13, 62],
        type: 'line',
        lineStyle: {
          color: '#00ffcc',
          width: 1
      }
    }]
    }
  }
  render(){
    return(
      <div className={style.content}>
        <div className={style.head}>
        <span className={style.headicon}>
        <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/地府大数据/u245.png?token=eb07fa52e718e3adb3ad434b0bf0522a0f0303bd58bc85575b26846cfe40cf88" alt="loading..."/></span>
        <span className={style.headtext}>地府大数据可视化平台</span>
        </div>
        <div className={style.center}>
          <div className={style.left}>
            <div className={style.top}>
              <h6>地府人数</h6>
              <h1>999999</h1>
            </div>
            <Collapse accordion className={style.middle}>
              <Panel showArrow={false} header="铁磨地狱" key="1" className={style.text}>
                <p>
                  <h6>本层人数</h6>
                  <h6>痛苦值</h6>
                  <h6>物资补给</h6>
                </p>
              </Panel>
              <Panel showArrow={false} header="孤独地狱" key="2">
                <p>
                  <h6>本层人数</h6>
                  <h6>痛苦值</h6>
                  <h6>物资补给</h6>
                </p>
              </Panel>
              <Panel showArrow={false} header="畜生地狱" key="3">
                <p>
                  <h6>本层人数</h6>
                  <h6>痛苦值</h6>
                  <h6>物资补给</h6>
                </p>
              </Panel>
              <Panel showArrow={false} header="剥皮地狱" key="4">
                <p>
                  <h6>本层人数</h6>
                  <h6>痛苦值</h6>
                  <h6>物资补给</h6>
                </p>
              </Panel>
              <Panel showArrow={false} header="沸屎地狱" key="5">
                <p>
                  <h6>本层人数</h6>
                  <h6>痛苦值</h6>
                  <h6>物资补给</h6>
                </p>
              </Panel>
            </Collapse>
            <div className={style.foot}>
              <p>地狱受刑人员性别</p>
              <div>
                <div className={style.male}>
                  <h5>6542</h5>
                  <h6>男人</h6>
                </div>
                <div className={style.female}>
                  <h5>6542</h5>
                  <h6>女人</h6>
                </div>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.top}>
              <div className={style.desc}>
                <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/地府大数据/u299.png?token=51fd883f66cf547a7a0aea01554b0c9f23f5a39d6c64b852e1c9a7257ac97e66" alt=""/>
                <span>地府工作人员业绩统计</span>
              </div>
              <div className={style.stat}>
                <p>统计</p>
                <h1>
                  <b>6542</b>
                  <span>+13%</span>
                </h1>
                <h6>
                  <span>总计</span>
                  <span>今年</span>
                </h6>
                <h5>
                  <span>126</span>
                  <span>-6%</span>
                </h5>
                <h6>
                  <span>分类</span>
                  <span>去年</span>
                </h6>
                <h5>
                  <span>667</span>
                  <span>+23%</span>
                </h5>
                <h6>
                  <span>总计</span>
                  <span>今年</span>
                </h6>
              </div>
            </div>
            <div className={style.middle}>
              <div className={style.desc}>
                <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/地府大数据/u299.png?token=51fd883f66cf547a7a0aea01554b0c9f23f5a39d6c64b852e1c9a7257ac97e66" alt =""/>
                <span>冥币汇率变化</span>
              </div>
              <div className={style.stat}>
                <ReactEcharts option={this.mb()}></ReactEcharts>
              </div>
            </div>
            <div className={style.bottom}>
              <div className={style.desc}>
                <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/地府大数据/u299.png?token=51fd883f66cf547a7a0aea01554b0c9f23f5a39d6c64b852e1c9a7257ac97e66" alt =""/>
                <span>地府运营指标统计</span>
              </div>
              <div className={style.stat}>
              <span>
              <Progress strokeColor='#00ffcc' type="circle" percent={23} width={95} format={percent => `${percent}% 一个指标`}/>

              <Progress strokeColor='#ff9900' type="circle" percent={65} width={95} format={percent => `${percent}% 一个指标`}></Progress>
              </span>
              <span>
              <Progress strokeColor='#00ffcc' type="circle" percent={36} width={95} format={percent => `${percent}% 一个指标`}/>
              <Progress strokeColor='#00ffcc' type="circle" percent={41} width={95} format={percent => `${percent}% 一个指标`}/>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Bdata
