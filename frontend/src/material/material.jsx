import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import MaterialForm from './materialForm'
import MaterialList from './materialList'

export default class Material extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Matéria-Prima' small='Cadastro'></PageHeader>
                <MaterialForm />
                <MaterialList />
            </div>
        )
    }
}