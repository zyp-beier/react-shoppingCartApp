import React, {Component} from 'react';
import 'antd/dist/antd.css'
import {Col, Row} from "antd";
import '../style/Shopping.css'
import ProductsContainer from "./ProductsContainer";

//引入商品搜索
import Search from "./Search";

//引入购物车组件
import Cart from "./Cart";

//引入商品列表
import Picframe from "./Item";

//引入静态数据
import {allProducts,filterProducts,productsModel,allQuantity,selectQuantity} from "./Constants";

 class Shopping extends Component {
     constructor(props) {
         super(props);
         this.state = {
             qty: allQuantity, //商品库存
             products: allProducts, //所有商品
             selectProducts: [],
             selectQty: selectQuantity, //加入购物车的商品数量
             filterProducts: filterProducts //过滤的商品数据
         }
         this.searchItem = this.searchItem.bind(this)
         this.addCart = this.addCart.bind(this)
         this.handleRemove = this.handleRemove.bind(this)
     }
    //搜索商品
     searchItem(itemName) {
         let findItem = false
         //入参为空处理
        if(itemName == ''){
            this.setState({
                filterProducts: productsModel
            });
            console.log('输入为空请重新输入')
        }else{
            //在已有商品中检索
            for(let i=0; i< productsModel.length;i++) {
                if(productsModel[i].name===itemName){
                    const tmpProducts = [];
                    tmpProducts.push(productsModel[i])
                    //已找到商品则跟新状态
                    this.setState({
                        filterProducts: tmpProducts
                    })
                    findItem = true
                    break
                }
            }
            //若未找到商品则提示商品不存在
            if(!findItem){
                this.setState({
                    filterProducts: []
                })
            }
        }
     }

     //加入购物车
     addCart(index) {
         const currentQty = this.state.qty
         const selQty = this.state.selectQty
         const indexNum = index / 1
         //若库存充足，则购物车数量加1
         //若库存不足，则提示用户已售罄
         if(currentQty[indexNum]>0){
            currentQty[indexNum] --
             selQty[indexNum] ++
         }else{
             alert('很抱歉,已售罄')
         }
         const {
             selectProducts,
             products
         } = this.state
         const cart = selectProducts
         const item = products[indexNum]
         cart.push(item.name)
         //更新状态，触发界面更新
         this.setState({
             selectProducts: cart,
             selectQty: selQty,
             qty: currentQty
         })
     }

     //删除商品
     handleRemove(quantity,id) {
         const originalQty = [10,8,15,59,6,20,12,46]
         const selProducts = this.state.selectProducts
         const pname = productsModel[id].name
         for(let i = 0; i< selProducts.length; i++){
             const index = selProducts.indexOf(pname)
             if(index>-1){
                 selProducts.splice(index,1)
             }
         }
        const selQty = this.state.selectQty
         selQty[id] = 0
         const tmpQty = this.state.qty
         tmpQty[id] = originalQty[id]
         //更新购物车状态
         this.setState({
             selectProducts: selProducts,
             selectQty: selQty,
             qty: tmpQty
         })
     }
     render() {
         return (
             <div className={'shopping'}>
                 <Row>
                     <Col>
                         <Search searchItem={this.searchItem}/>
                         <ProductsContainer
                            addCart={this.addCart}
                            products={this.state.filterProducts}
                            qty={this.state.qty}
                         />
                     </Col>
                 </Row>
                 <Row>
                     <Cart
                        handleRemove={this.handleRemove}
                        selectProducts={this.state.selectProducts}
                        selectQty={this.state.selectQty}
                        pModel={this.state.products}
                     />
                 </Row>
             </div>
         )
     }
}

export default Shopping;
