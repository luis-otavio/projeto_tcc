import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import MaterialForm from './materialForm'
import MaterialList from './materialList'

const URL = 'http://localhost:3003/api/materials'

export default class Material extends Component {
    constructor(props) {
        super(props)
        this.state = {  mat_tipo: '',
                        mat_nome: '',
                        mat_custo: '',
                        list: [] }

        this.handleChangeMatTipo = this.handleChangeMatTipo.bind(this)
        this.handleChangeMatNome = this.handleChangeMatNome.bind(this)
        this.handleChangeMatCusto = this.handleChangeMatCusto.bind(this)

        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {
        const mat_tipo = this.state.mat_tipo;
        const mat_nome = this.state.mat_nome;
        const mat_custo = this.state.mat_custo;

        axios.post(URL, {   mat_tipo,
                            mat_nome,
                            mat_custo })
			.then(resp => console.log('Funcionou!!'))
    }

    handleChangeMatTipo(a) {
        this.setState({...this.state, mat_tipo: a.target.value })
    }
    handleChangeMatNome(b) {
        this.setState({...this.state, mat_nome: b.target.value })
    }
    handleChangeMatCusto(c) {
        this.setState({...this.state, mat_custo: c.target.value })
    }

    render() {
        return (
            <div>
                <PageHeader name='Materia Prima' small='Cadastro'></PageHeader>
                <MaterialForm mat_tipo={this.state.mat_tipo}
                    handleChangeMatTipo={this.handleChangeMatTipo}
                    handleChangeMatNome={this.handleChangeMatNome}
                    handleChangeMatCusto={this.handleChangeMatCusto}

                    handleAdd={this.handleAdd}
                />
                <br />
                <MaterialList />
            </div>
        )
    }
}