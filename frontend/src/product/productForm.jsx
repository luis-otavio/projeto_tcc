import React from 'react'
import Grid from '../template/grid'
import IconButtton from '../template/iconButton'

export default props => (
    <div role='form' className='productForm'>

        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                placeholder='Descrição do produto'
                onChange={props.handleChange}
                value={props.description}></input>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButtton style='primary' icon='plus'
                onClick={props.handleAdd}></IconButtton>
        </Grid>
    </div>
)