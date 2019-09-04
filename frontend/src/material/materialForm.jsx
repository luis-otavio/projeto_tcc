import React from 'react'
import Grid from '../template/grid'
import IconButtton from '../template/iconButton'

export default props => (
     <div role='form' className='materialForm'>

        <Grid cols='12 4 2'>
            <div>
                <label>Tipo de material</label>
                <select id='mat_tipo' className='form-control'
                    placeholder='Tipo'
                    onChange={props.handleChangeMatTipo}
                    value={props.mat_tipo}>
                        <option value="">Selecione</option>
                        <option value="couro">Couro</option>
                        <option value="metal">Metal</option>
                        <option value="forro">Forro</option>
                        <option value="ziper">Zíper</option>
                </select>
            </div>
        </Grid>

        <Grid cols='12 4 4'>
            <div>
                <label>Descrição do material</label>
                <input id='mat_nome' className='form-control'
                    placeholder='Descrição'
                    onChange={props.handleChangeMatNome}
                    value={props.mat_nome}></input>
            </div>
        </Grid>

        <Grid cols='12 2 2'>
            <div>
                <label>Preço custo</label>
                <input id='mat_custo' className='form-control'
                    placeholder='R$ 0,00'
                    onChange={props.handleChangeMatCusto}
                    value={props.mat_custo}></input>
            </div>
        </Grid>

        <Grid cols='12 1 4'>
            <br />
            <button className={'btn btn-success'}
                onClick={props.handleAdd}>
                <i className={'fa fa-plus'}> Cadastrar </i>
            </button>
            <button className={'btn btn-info'}
                onClick={props.handleSearch}>
                <i className={'fa fa-search'}> Pesquisar </i>
            </button>
        </Grid>
     </div>
)