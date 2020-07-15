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
             qty: allQuantity,
             products: allProducts,
             selectProducts: [],
             selectQty: selectQuantity,
             filterProducts: filterProducts
         }
         this.searchItem = this.searchItem.bind(this)
     }
    //搜索商品
     searchItem() {

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
                     {/*<Picframe />*/}
                     <Cart
                        handleRemove={this.handleRemove}
                        selectProducts={this.state.selectProducts}
                        qty={this.state.selectQty}
                        pModel={this.state.products}
                     />
                 </Row>
             </div>
         )
     }
}

export default Shopping;
