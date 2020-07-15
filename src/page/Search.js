import React,{Component} from "react";
import {Button, Col, Input, Row} from "antd";


export default class Search extends Component{
    constructor() {
        super();
    }
    handleClick() {
        const search = document.getElementById('search').value
        this.props.searchItem(search)
    }
    render() {
        return (
            <Row>
                <Col span={12}>
                    <Input placeholder={'请输入要搜索的商品'} id='search'/>
                </Col>
                <Col span={12}>
                    <Button type='primary' onClick={() => this.handleClick()} style={{marginLeft:10}}>搜索</Button>
                </Col>
            </Row>
        );
    }
}
