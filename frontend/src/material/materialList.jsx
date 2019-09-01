import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(material => (
            <tr key={material._id}>
                <td>{material.mat_nome}</td>
                <td>{material.mat_custo}</td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(material)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='tableMaterial'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Custo</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}