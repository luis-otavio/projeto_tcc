import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import ProductForm from './productForm'
import ProductList from './productList'

const URL = 'http://localhost:3003/api/products'

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {  product: {
                            description: '', 
                            modelo: '',
                            couro: '',
                            qt_couro: '',
                            metal: '',
                            qt_metal: '',
                            forro: '',
                            qt_forro: '',
                            ziper: '',
                            qt_ziper: '',
                            vl_montagem: '',
                            vl_tear: '',
                        },
                        list: [] }

        this.handleChange = this.handleChange.bind(this)

        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleEdit = this.handleEdit.bind(this)

        this.refreshProduct()
    }

    handleAdd() {
        axios.post(URL, this.state.product)
			.then(resp => this.refreshProduct())
    }

    /*handleChangeDescription(a) {
        this.setState({...this.state, description: a.target.value })
    }
    handleChangeModelo(b) {
        this.setState({...this.state, modelo: b.target.value })
    }
    handleChangeCouro(c) {
        this.setState({...this.state, couro: c.target.value })
    }
    handleChangeQtCouro(d) {
        this.setState({...this.state, qt_couro: d.target.value })
    }
    handleChangeMetal(e) {
        this.setState({...this.state, metal: e.target.value })
    }
    handleChangeQtMetal(f) {
        this.setState({...this.state, qt_metal: f.target.value })
    }
    handleChangeForro(g) {
        this.setState({...this.state, forro: g.target.value })
    }
    handleChangeQtForro(h) {
        this.setState({...this.state, qt_forro: h.target.value })
    }
    handleChangeZiper(i) {
        this.setState({...this.state, ziper: i.target.value })
    }
    handleChangeQtZiper(j) {
        this.setState({...this.state, qt_ziper: j.target.value })
    }
    handleChangeVlMontagem(k) {
        this.setState({...this.state, vl_montagem: k.target.value })
    }
    handleChangeVlTear(l) {
        this.setState({...this.state, vl_tear: l.target.value })
    }*/

    handleChange(key, value) {
        let product = this.state.product
        product[key] = value
        this.setState({...this.state, product})
    }

    refreshProduct(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-description${search}`)
            .then((resp => this.setState({...this.state, description, list: resp.data})))
    }

    handleRemove(product) {
        axios.delete(`${URL}/${product._id}`)
            .then(resp => this.refreshProduct(this.state.product.description))
    }
    
    handleEdit(product) {
        this.setState({...this.state, product: product})
        
    }

    handleSearch() {
        this.refreshProduct(this.state.description)
    }

    render() {
        return (
            <div>
                <PageHeader name='Produtos' small='Cadastro'></PageHeader>
                <ProductForm product={this.state.product}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleAdd={this.handleAdd}
                    />
                <br />
                <ProductList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleEdit={this.handleEdit} />
            </div>
        )
    }
}