import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

export default class Product extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Produtos' small='Cadastro'></PageHeader>
            </div>
        )
    }
}