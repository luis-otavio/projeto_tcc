import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(material => (
            <tr key={material._id}>
                <td>{material.mat_tipo}</td>
                <td>{material.mat_nome}</td>
                <td>R$ {material.mat_custo}</td>
                <td>
                    <button className={'btn btn-danger'}
                        onClick={() => props.handleRemove(material)}>
                            <i className={'fa fa-trash-o'}></i> Apagar
                    </button>
                    <button className={'btn btn-warning'}
                        onClick={() => props.handleEdit(material)}>
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
                    <th><h4><b>Tipo</b></h4></th>
                    <th><h4><b>Descrição</b></h4></th>
                    <th><h4><b>Custo</b></h4></th>
                    <th className='tableActions'></th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}