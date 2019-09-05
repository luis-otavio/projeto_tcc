import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import MaterialForm from './materialForm'
import MaterialList from './materialList'

const URL = 'http://localhost:3003/api/materials'

export default class Material extends Component {
    constructor(props) {
        super(props)
        this.state = {  material: {
                            mat_tipo: '',
                            mat_nome: '',
                            mat_custo: '',
                        },
                        list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.refreshMaterial()
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
            .then(resp => this.setState({...this.state, mat_tipo, list: resp.data})
        )
    }

    handleRemove(material) {
        axios.delete(`${URL}/${material._id}`)
            .then(resp => this.refreshMaterial(this.state.material.mat_nome))
    }

    handleEdit(material) {
        this.setState({...this.state, material: material})
        
    }

    handleSearch() {
        this.refreshMaterial(this.state.material.mat_nome)
    }

    render() {
        return (
            <div>
                <PageHeader name='Materia Prima' small='Cadastro'></PageHeader>
                <hr style={{borderColor: '#000'}}/>
                <MaterialForm material={this.state.material}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleAdd={this.handleAdd} />
                <br />
                <MaterialList list={this.state.list} 
                    handleRemove={this.handleRemove} 
                    handleEdit={this.handleEdit}/>
            </div>
        )
    }
}