import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import ProductForm from './productForm'
import ProductList from './productList'

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {
        console.log(this.state.description)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }

    render() {
        return (
            <div>
                <PageHeader name='Produtos' small='Cadastro'></PageHeader>
                <ProductForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                <ProductList />
            </div>
        )
    }
}