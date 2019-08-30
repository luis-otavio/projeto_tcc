import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import ProductForm from './productForm'
import ProductList from './productList'

export default class Product extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Produtos' small='Cadastro'></PageHeader>
                <ProductForm />
                <ProductList />
            </div>
        )
    }
}