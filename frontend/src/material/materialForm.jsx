import React from 'react'
import Grid from '../template/grid'
import IconButtton from '../template/iconButton'

export default props => (
     <div role='form' className='materialForm'>

        <Grid cols='6 4 5'>
            <input id='mat_name' className='form-control'
                placeholder='Descrição matéria-prima'
                onChange={props.handleChange}
                value={props.description}></input>
        </Grid>

        <Grid cols='5 4 3'>
            <select id='mat_type' className='form-control'
                placeholder='Tipo'
                onChange={props.handleChange}
                value={props.description}>
                    <option value="">Selecione o tipo</option>
                    <option value="couro">Couro</option>
                    <option value="metal">Metal</option>
                    <option value="forro">Forro</option>
                    <option value="ziper">Zíper</option>
            </select>
        </Grid>

        <Grid cols='4 2 2'>
            <input id='mat_value' className='form-control'
                placeholder='Valor R$'
                onChange={props.handleChange}
                value={props.description}></input>
        </Grid>

        <Grid cols='2 1 2'>
            <IconButtton style='primary' icon='plus'
                onClick={props.handleAdd}></IconButtton>
        </Grid>
     </div>
)