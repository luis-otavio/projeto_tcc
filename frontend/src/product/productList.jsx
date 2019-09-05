import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(product => (
            <tr key={product._id}>
                <td>{product.description}</td>
                <td>R$ </td>
                 <td>
                    <button className={'btn btn-danger'}
                        onClick={() => props.handleRemove(product)}>
                        <i className={'fa fa-trash-o'}> Apagar </i>
                    </button>
                    <button className={'btn btn-warning'}
                        onClick={() => props.handleEdit(product)}>
                        <i className={'fa fa-pencil'}> Editar </i>
                    </button>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição do produto</th>
                    <th>Custo final</th>
                    <th className='tableActions'></th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}