import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import ProductForm from './productForm'
import ProductList from './productList'

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {
        
    }

    render() {
        return (
            <div>
                <PageHeader name='Produtos' small='Cadastro'></PageHeader>
                <ProductForm handleAdd={this.handleAdd}/>
                <ProductList />
            </div>
        )
    }
}