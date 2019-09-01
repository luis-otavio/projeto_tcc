import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(product => (
            <tr key={product._id}>
                <td>{product.description}</td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(product)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='tableProduct'>
            <thead>
                <tr>
                    <th>Descrição do produto</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}