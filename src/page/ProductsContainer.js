import React,{Component} from "react";
import {Card, Row} from "antd";
import Item from './Item'
import {arrayChunk} from "./utils";


export default function ProductsContainer (props){
    const {
        products,
        qty,
        addCart
    } = props
    const goodsList = arrayChunk(products,3)
    //渲染商品列表
    if(products.length !== 0){
        return (
            <div>
                {
                    goodsList.map((row,rIndex) => (
                        <Row
                            type='flex'
                            key={`row-${rIndex}`}
                        >
                            {row.map((item,index) => (
                                <Item
                                    addToCart={addCart}
                                    quantity={qty[item.index]}
                                    source={item.path}
                                    key={index}
                                    index={item.index}
                                    name={item.name}
                                />
                            ))}
                        </Row>
                    ))
                }
            </div>
        )
    }
    return (
        <div>
            {/*<Row>*/}
            {/*    <Card style={{marginTop:10,width:920}}>*/}
            {/*        抱歉，没有找到商品*/}
            {/*    </Card>*/}
            {/*</Row>*/}
            147258
        </div>
    );
}
