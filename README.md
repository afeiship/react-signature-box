# react-media-lfixed-rauto
> Media left fixed right auto layout.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    align: PropTypes.string,
    gap: PropTypes.string,
    justify: PropTypes.string,
    aside: PropTypes.element,
    elements: PropTypes.array,
  };

  static defaultProps = {
    align: 'normal',
    justify: 'space-between',
    gap: '10px',
    elements: [],
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-media-lfixed-rauto --save
// import : import ReactMediaLfixedRauto from 'react-media-lfixed-rauto'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-media-lfixed-rauto">
      <ReactMediaLfixedRauto ref='rc' aside={
        <img src="http://cms-bucket.nosdn.127.net/e99ac4afe74d4375b321d50178772d9620180306123403.png" width="94" />
      }
      elements={[
        <h1 style={{ fontSize:'14px'}} className="title">金正恩:要由朝鲜民族自己谱写祖国统一新历史</h1>,
        <p style={{ fontSize:'12px', lineHeight: '16px', color:'#999'}} > <em style={{ float: 'right'}}>2018-03-06 13:06:36</em> <span>新闻 &nbsp; 10分钟前</span></p>
      ]}
      />
      <ReactMediaLfixedRauto ref='rc' aside={
        <img src="http://cms-bucket.nosdn.127.net/e86633e3eeff4e0aa4ac103934c6989f20180305191752.png" width="94" />
      }
      elements={[
        <h1 style={{ fontSize:'14px'}} className="title">政府工作报告提取消流量漫游费 三运营商:立即行动</h1>,
        <p style={{ fontSize:'12px', lineHeight: '16px', color:'#999'}} > <em style={{ float: 'right'}}>2018-03-06 13:06:36</em> <span>新闻 &nbsp; 10分钟前</span></p>
      ]}
      />

      <ReactMediaLfixedRauto ref='rc'
      style={{ minHeight:'60px'}}
      elements={[
        <h1 style={{ fontSize:'14px'}} className="title">政府工作报告提取消流量漫游费 三运营商:立即行动</h1>,
        <p style={{ fontSize:'12px', lineHeight: '16px', color:'#999'}} > <em style={{ float: 'right'}}>2018-03-06 13:06:36</em> <span>新闻 &nbsp; 10分钟前</span></p>
      ]}
      />
      </div>
    );
  }
}

```

## customize style:
```scss
// customize your styles:
$react-media-lfixed-rauto-options:(
);

@import '~node_modules/react-media-lfixed-rauto/style.scss';
```
