//商品不存在异常提示组件
import React,{Component} from "react";
import {Card} from "antd";

class EmptyCart extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Card style={{marginTop:10,width:440}}>
                    <img src="https://gw.alicdn.com/tfs/TB1UmxrwwHqK1RjSZFEXXcGMXXa-658-444.gif" alt="empty-cart" style={{width:400}}/>
                    <h3>您的购物车还是空的快去添加商品吧</h3>
                </Card>
            </div>
        );
    }
}

export default EmptyCart
