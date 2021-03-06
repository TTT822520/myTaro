import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtIcon } from 'taro-ui'
import { List  ,CardItem,TabBar} from '~/components'

import './index.scss'
const groupUrl = Taro.baseUrl+"/img/user/group10.png";
@connect((user) => ({...user}))
class Index extends Component {
    config = {
        navigationBarTitleText: '个人中心',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white'
    }

    componentWillReceiveProps (nextProps) {
        // console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidMount () { 
        console.log(this.refs)
    }

    componentDidHide () { 

    }
    state = {
        user:{
            type:"vip"
        }
    }
    handle({item,index}){
        this.props.dispatch({type:"router/navigateTo",payload:{url:item.url}})
        console.log(item,index,this.props.user);
    }

    render () {
        const hederList = [{title:"我的订单",url:"/pages/order/index",custom:false}]
        const data = [{icon:groupUrl,title:"待付款",url:"/pages/order/index?type=1"},
        {icon:groupUrl,title:"待发货",url:"/pages/order/index?type=3"},
        {icon:groupUrl,title:"待收货",url:"/pages/order/index?type=4"},
        {icon:groupUrl,title:"待评价",url:"/pages/order/index?type=5"},
        {icon:groupUrl,title:"退货售后"}];
        const servrListItem =  [
            [{icon:groupUrl,title:"我的账户"},
            {icon:groupUrl,title:"我的会员卡"},
            {icon:groupUrl,title:"我的优惠券"},
            {icon:groupUrl,title:"在线客服"}],
            [{icon:groupUrl,title:"宝贝收藏"},
            {icon:groupUrl,title:"项目收藏"},
            {icon:groupUrl,title:"地址管理"},
            {icon:groupUrl,title:"系统公告"}],
            [{icon:groupUrl,title:"意见反馈"},
            {icon:groupUrl,title:"视频指南"},
            {icon:groupUrl,title:"敬请期待"}]
        ]
        const servrList = [{title:"我的服务",navigateType:1}]
        return (
        <View className='auth-container'>
            <View className="header">
                <View className="auth-con">
                    <View className="auth-con-top">
                    <View className="auth-pic"></View>
                        <View className="auth-info">
                            <View className="auth-top">
                                <View className="left">
                                    <View className="name">{this.state.user.name ? 'Ricardo.M.Lu' : '立即登陆'}</View>
                                    {
                                        this.state.user.name && <View className={`auth-l  ${this.state.user.type == 'vip' ? 'auth-l-vip' : 'auth-l-ordinary'}`}></View> 
                                        
                                    }
                                    {
                                        !this.state.user.name && <View className="no-login">登录查看更多详细内容</View>
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="auth-bottom">
                        <Text className="auth-money">账户余额：50020.50 元</Text>
                        <AtIcon className='at-icon at-icon-chevron-right'></AtIcon>
                    </View>
                </View>
            </View>
            {
                this.state.user.type != 'vip' && <View className="uplaod-info">
                    <View className='info-des'>升级美璟会员，尊享会员权益</View>
                    <View className="info-btn base-btn">了解详情</View>
                </View>
            }
            <List  list={hederList} handleClick={(parmas) => this.handle(parmas)}></List>
            
            <View className="order-con mg-b">
                <CardItem list={data} ref="CardItem"></CardItem>
            </View>
            <List list={servrList} ></List>
            <View className="order-con">
                {servrListItem.map((item,index) => {
                    return (
                        <View  className="server-con" key={index}>
                            <CardItem className="order-con-item" list={item} num = {4} key={index}></CardItem>
                        </View>
                    )
                })}
                
            </View>
        </View>
        )
    }
}
export default Index
