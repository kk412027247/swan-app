import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import {bindActionCreators} from 'redux'
import {add, minus, asyncAdd} from '../../actions/counter'
import './index.scss'

class Index extends Component {

  constructor(props) {
    super(props);
    console.log(props.counter.num)
  }

  config = {
    navigationBarTitleText: '首页'
  };

  render() {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.minus}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

const mapStateToProps = ({counter}) => ({counter});
const mapDispatchToProps = (dispatch) => bindActionCreators({add, minus, asyncAdd}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Index)
