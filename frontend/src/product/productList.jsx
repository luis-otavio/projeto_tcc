import React from 'react'
import IconButton from '../template/iconButton'
import './productList.css'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(product => (
            <tr key={product._id}>
                <td>{product.description}</td>
                <td>R$ 62,28</td>
                 <td>
                    <button className={'btn btn-danger'}
                        onClick={() => props.handleRemove(product)}>
                        <i className={'fa fa-trash-o'}></i> Apagar
                    </button>
                    <button className={'btn btn-warning'}
                        onClick={() => props.handleEdit(product)}>
                        <i className={'fa fa-pencil'}></i> Editar
                    </button>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th><h4><b>Descrição do produto</b></h4></th>
                    <th><h4><b>Custo final</b></h4></th>
                    <th className='tableActions'></th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}