import React,{Component} from "react";
import {Button, Card, Row} from "antd";

 class Picframe extends Component{
    // handleClick() {
    //     this.props.addToCart(this.props.index)
    // }
    render() {
        const {
            name,
            index,
            source,
            quantity
        } = this.props
        const popid = name + index
        return (
            <Card bodyStyle={{padding: 0}} style={{width:302,marginTop:10,marginRight:10}}>
                <Row type='flex' align='middle' justify='center'>
                    <img src={source} alt="" style={{cursor: 'pointer',width:300}} data-total='modal' data-target={`#${popid}`}/>
                </Row>
                <Row>
                    <h3>{name}</h3>
                    <h4>剩余库存：{quantity}</h4>
                </Row>
                <Row type='flex' align='middle' justify='center'>
                    <Button type='primary' onClick={() => {this.handleClick()}}>加入购入车</Button>
                </Row>
            </Card>
        );
    }

}
export default Picframe
