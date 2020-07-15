import React,{Component} from "react";
import {Button, Card, Row} from "antd";
import EmptyCart from "./EmptyCart";

export default class Cart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showCart: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }
    //单击事件
    handleClick() {
        setTimeout(()=> {
           this.setState({
               showCart: !this.state.showCart
           })
        },0)
    }
    //从购物车删除
    handleRemove(product,index) {
        this.props.handleRemove(product,index)
        setTimeout(() => {
            this.setState({
                showCart: !this.state.showCart
            })
        },100)
        setTimeout(() => {
            this.setState({
                showCart: !this.state.showCart
            })
        },200)
    }
    render() {
        const {
            showCart
        } = this.state
        const {
            selectProducts, //加入购物车商品的name
            selectQty,//加入购物车商品的数量
            pModel
        } = this.props
        let cartItems;
        const len = selectProducts.length
        let totalPrice = 0

        for(let i = 0;i<selectQty.length;i++) {
            totalPrice += pModel[i].price * selectQty[i];
        }

        if(len !== 0) {
            cartItems = selectQty.map((product,index) => {
                if(product===0){
                    return null
                }
                return (
                    <Card key={pModel[index].name}>
                        <Row type='flex'>
                            <img src={pModel[index].path} alt="" style={{cursor: 'pointer', width:150,height:125}}/>
                            <div style={{marginLeft: 10}}>
                                <p>标题: {pModel[index].name}</p>
                                <p>价格: {pModel[index].price}</p>
                                <p>数量: {product}</p>
                                <p>共计:{product * pModel[index].price}</p>
                                <Button
                                    style={{marginTop: 10}}
                                    onClick={() => this.handleRemove(product,index)}
                                >
                                    删除
                                </Button>
                            </div>
                        </Row>
                    </Card>
                )
            })
        }
        return (
            <div style={{padding: '100px 50px 10px'}}   >
                <Button
                    id='popbtn'
                    type='primary'
                    className='btn btn-success'
                    onClick={() => this.handleClick()}
                >
                    我的购物车
                </Button>
                <Row>
                    {showCart && len === 0? <EmptyCart/> : null}
                    {
                        showCart && len !==0 ?<div>
                            <h3>共计：{totalPrice}元</h3>
                            <div>{cartItems}</div>
                        </div> : null
                    }
                </Row>
            </div>
        );
    }

}
