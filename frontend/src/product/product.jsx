import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import ProductForm from './productForm'
import ProductList from './productList'
import ProductButton from './productButton'

const URL = 'http://localhost:3003/api/products'

const initialProduct = {
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
}

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {  
            product: { ...initialProduct },
            list: [],
            show: false 
        }

        //Eventos que consogem API
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.refreshProduct()

        this.toggleComponent = this.toggleComponent.bind(this)
    }

    toggleComponent() {
        const { show } = this.state
        this.setState({ show : !show })
    }

    handleChange(key, value) {
        let product = this.state.product
        product[key] = value
        this.setState({...this.state, product})
    }

    handleAdd() {
        axios.post(URL, this.state.product)
			.then(resp => this.refreshProduct())
    }

    refreshProduct(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-description${search}`)
            .then((resp => this.setState({...this.state, product: { ...initialProduct }, list: resp.data})))
    }

    handleRemove(product) {
        axios.delete(`${URL}/${product._id}`)
            .then(resp => this.refreshProduct())
    }
    
    handleEdit(product) {
        this.setState({...this.state, product: product})
    }

    handleSearch() {
        this.refreshProduct(this.state.description)
    }

    handleClear() {
        this.refreshProduct()
    }

    render() {
        return (
            <div>
                <PageHeader name='Produto' small='Cadastro'></PageHeader>
                <div className="containerCard">
                    <div className="productButton">
                        <button className={'btn btn-dark cad'}
                            onClick={this.toggleComponent}>Cadastrar novo produto</button>
                    </div>
                    <br />
                    { this.state.show && <ProductForm product={this.state.product}
                                            handleChange={this.handleChange}
                                            handleSearch={this.handleSearch}
                                            handleAdd={this.handleAdd}
                                            handleClear={this.handleClear}/>}
                </div>
                <hr style={{borderColor: '#000'}}/>
                <br />
                <div>
                    <h3>Lista de produtos</h3>
                </div>
                <br />
                <ProductList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleEdit={this.handleEdit} />
            </div>
        )
    }
}