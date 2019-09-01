import React from 'react'
import Grid from '../template/grid'
import IconButtton from '../template/iconButton'

export default props => (
     <div role='form' className='materialForm'>

        <Grid cols='5 4 2'>
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

        <Grid cols='6 4 5'>
            <input id='mat_name' className='form-control'
                placeholder='Descrição materia prima'
                onChange={props.handleChange}
                value={props.description}></input>
        </Grid>

        <Grid cols='4 2 2'>
            <input id='mat_value' className='form-control'
                placeholder='R$ 0,00'
                onChange={props.handleChange}
                value={props.description}></input>
        </Grid>

        <Grid cols='2 1 2'>
            <button className={'btn btn-default'}
                onClick={props.handleAdd}>
                <i className={'fa fa-plus'}> Cadastrar </i>
            </button>
        </Grid>
     </div>
)