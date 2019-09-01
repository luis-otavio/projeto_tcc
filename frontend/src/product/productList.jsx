import React from 'react'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(product => (
            <tr key={product._id}>
                <td>{product.description}</td>
            </tr>
        ))
    }

    return (
        <table className='tableProduct'>
            <thead>
                <tr>
                    <th>Descrição do produto</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}