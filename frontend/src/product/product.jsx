import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import ProductForm from './productForm'
import ProductList from './productList'

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {  description: '', 
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
                        list: [] }

        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.handleChangeModelo = this.handleChangeModelo.bind(this)
        this.handleChangeCouro = this.handleChangeCouro.bind(this)
        this.handleChangeQtCouro = this.handleChangeQtCouro.bind(this)
        this.handleChangeMetal = this.handleChangeMetal.bind(this)
        this.handleChangeQtMetal = this.handleChangeQtMetal.bind(this)
        this.handleChangeForro = this.handleChangeForro.bind(this)
        this.handleChangeQtForro = this.handleChangeQtForro.bind(this)
        this.handleChangeZiper = this.handleChangeZiper.bind(this)
        this.handleChangeQtZiper = this.handleChangeQtZiper.bind(this)
        this.handleChangeVlMontagem = this.handleChangeVlMontagem.bind(this)
        this.handleChangeVlTear = this.handleChangeVlTear.bind(this)

        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {
        console.log(this.state.description)
    }

    handleChangeDescription(a) {
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
    }

    render() {
        return (
            <div>
                <PageHeader name='Produtos' small='Cadastro'></PageHeader>
                <ProductForm description={this.state.description}
                    handleChangeDescription={this.handleChangeDescription}
                    handleChangeModelo={this.handleChangeModelo}
                    handleChangeCouro={this.handleChangeCouro}
                    handleChangeQtCouro={this.handleChangeQtCouro}
                    handleChangeMetal={this.handleChangeMetal}
                    handleChangeQtMetal={this.handleChangeQtMetal}
                    handleChangeForro={this.handleChangeForro}
                    handleChangeQtForro={this.handleChangeQtForro}
                    handleChangeZiper={this.handleChangeZiper}
                    handleChangeQtZiper={this.handleChangeQtZiper}
                    handleChangeVlMontagem={this.handleChangeVlMontagem}
                    handleChangeVlTear={this.handleChangeVlTear}

                    handleAdd={this.handleAdd}
                />
                <br />
                <ProductList />
            </div>
        )
    }
}