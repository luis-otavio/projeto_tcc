import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import MaterialForm from './materialForm'
import MaterialList from './materialList'

const URL = 'http://localhost:3003/api/materials'

const initialMaterial = {
    mat_tipo: '',
    mat_nome: '',
    mat_custo: '',
}

export default class Material extends Component {
    constructor(props) {
        super(props)
        this.state = {  material: { ...initialMaterial },
                        list: [],
                        show: false 
        },               

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.refreshMaterial()

        this.toggleComponent = this.toggleComponent.bind(this)
    }

    toggleComponent() {
        const { show } = this.state
        this.setState({ show : !show })
    }

    handleAdd() {
        axios.post(URL, this.state.material)
			.then(resp => this.refreshMaterial())
    }

    handleChange(key, value) {
        let material = this.state.material
        material[key] = value
        this.setState({...this.state, material})
    }

    refreshMaterial(mat_nome = '') {
        const search = mat_nome ? `&mat_nome__regex=/${mat_nome}/` : ''
        axios.get(`${URL}?sort=-mat_nome${search}`)
            .then(resp => this.setState({...this.state, material: { ...initialMaterial },list: resp.data})
        )
    }

    handleRemove(material) {
        axios.delete(`${URL}/${material._id}`)
            .then(resp => this.refreshMaterial())
    }

    handleEdit(material) {
        this.setState({...this.state, material: material})
        
    }

    handleSearch() {
        this.refreshMaterial(this.state.mat_nome)
    }

    handleClear() {
        this.refreshMaterial()
    }
    render() {
        return (
            <div>
                <PageHeader name='Matéria Prima' small='Cadastro'></PageHeader>
                <div className="containerCard">
                    <div className="materialButton">
                        <button className={'btn btn-primary cad'}
                            onClick={this.toggleComponent}>
                            <h4>Cadastrar matéria prima</h4></button>
                    </div>
                    <br />
                    { this.state.show && <MaterialForm material={this.state.material}
                                                handleChange={this.handleChange}
                                                handleSearch={this.handleSearch}
                                                handleAdd={this.handleAdd} />}
                </div>
                
                <br />
                <div>
                    <h3>Lista de materiais</h3>
                </div>
                <br />
                <MaterialList list={this.state.list} 
                    handleRemove={this.handleRemove} 
                    handleEdit={this.handleEdit}/>
            </div>
        )
    }
}