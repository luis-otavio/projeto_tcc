import React from 'react'
import Grid from '../template/grid'
import IconButtton from '../template/iconButton'

export default props => (
     <div role='form' className='materialForm'>

        <Grid cols='12 4 3'>
            <div>
                <label>Tipo de material</label>
                <select id='mat_tipo' className='form-control'
                    placeholder={'Tipo'}
                    onChange={(e) =>{ props.handleChange('mat_tipo', e.target.value)}}
                    value={props.material.mat_tipo}>
                        <option value="">Selecione</option>
                        <option value="Couro">Couro</option>
                        <option value="Metal">Metal</option>
                        <option value="Forro">Forro</option>
                        <option value="Ziper">Zíper</option>
                </select>
            </div>
        </Grid>

        <Grid cols='12 4 6'>
            <div>
                <label>Descrição do material</label>
                <input id='mat_nome' className='form-control'
                    placeholder={'Descrição'}
                    onChange={(e) =>{ props.handleChange('mat_nome', e.target.value)}}
                    value={props.material.mat_nome}></input>
            </div>
        </Grid>

        <Grid cols='12 2 2'>
            <div>
                <label>Preço custo</label>
                <input id='mat_custo' className='form-control'
                    placeholder={'R$ 0,00'}
                    onChange={(e) =>{ props.handleChange('mat_custo', e.target.value)}}
                    value={props.material.mat_custo}></input>
            </div>
        </Grid>

        <Grid cols='12 9 12'>
            <br /><br />
            <div className="col-12 material">
                <button className={'btn btn-default'}
                    onClick={props.handleSearch}>
                    <i className={'fa fa-search'}></i> Pesquisar
                </button>
                <button className={'btn btn-success buttonSalvar'}
                    onClick={props.handleAdd}>
                    <i className={'fa fa-save'}></i> Salvar
                </button>
                <button className={'btn btn-danger'}
                    onClick={props.handleClear}>
                    <i className={'fa fa-close'}></i> Cancelar
                </button>
            </div>
            <br />
        </Grid>
     </div>
)