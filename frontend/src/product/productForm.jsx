import React from 'react'
import Grid from '../template/grid'
import IconButtton from '../template/iconButton'

export default props => (
    <div role='form' className='productForm'>
        
        <Grid cols='12 9 9'>
            <div>
                <label>Descrição do produto</label>
                <input id='description' className='form-control'
                    placeholder={'Descrição'}
                    onChange={(e) =>{ props.handleChange('description', e.target.value)}}
                    value={props.product.description}></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Modelo</label>
                <input id='modelo' className='form-control'
                    placeholder={'Modelo'}
                    onChange={(e) =>{ props.handleChange('modelo', e.target.value)}}
                    value={props.product.modelo}></input>
            </div>
        </Grid>
        
        <Grid cols='12 9 7'>
            <div>
                <label>Couro</label>
                <input id='couro' className='form-control'
                    onChange={(e) =>{ props.handleChange('couro', e.target.value)}}
                    value={props.product.couro}></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Valor custo</label>
                <input id='qt_couro' className='form-control'
                    placeholder={'R$ 0,00'} disabled></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Qtde. Couro</label>
                <input id='qt_couro' className='form-control'
                    placeholder={'0.000'}
                    onChange={(e) =>{ props.handleChange('qt_couro', e.target.value)}}
                    value={props.product.qt_couro}></input>
            </div>
        </Grid>

        <Grid cols='12 9 7'>
            <div>
                <label>Metal</label>
                <input id='metal' className='form-control'
                    onChange={(e) =>{ props.handleChange('metal', e.target.value)}}
                    value={props.product.metal}></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Valor custo</label>
                <input id='qt_couro' className='form-control'
                    placeholder={'R$ 0,00'} disabled></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Qtde. Metal</label>
                <input id='qt_metal' className='form-control'
                    placeholder={'0.000'}
                    onChange={(e) =>{ props.handleChange('qt_metal', e.target.value)}}
                    value={props.product.qt_metal}></input>
            </div>
        </Grid>

        <Grid cols='12 9 7'>
            <div>
                <label>Forro</label>
                <input id='forro' className='form-control'
                    onChange={(e) =>{ props.handleChange('forro', e.target.value)}}
                    value={props.product.forro}></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Valor custo</label>
                <input id='qt_couro' className='form-control'
                    placeholder={'R$ 0,00'} disabled></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Qtde. Forro</label>
                <input id='qt_forro' className='form-control'
                    placeholder={'0.000'}
                    onChange={(e) =>{ props.handleChange('qt_forro', e.target.value)}}
                    value={props.product.qt_forro}></input>
            </div>
        </Grid>

        <Grid cols='12 9 7'>
            <div>
                <label>Ziper</label>
                <input id='ziper' className='form-control'
                    onChange={(e) =>{ props.handleChange('ziper', e.target.value)}}
                    value={props.product.ziper}></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Valor custo</label>
                <input id='qt_couro' className='form-control'
                    placeholder={'R$ 0,00'} disabled></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Qtde. Ziper</label>
                <input id='qt_ziper' className='form-control'
                    placeholder={'0.000'}
                    onChange={(e) =>{ props.handleChange('qt_ziper', e.target.value)}}
                    value={props.product.qt_ziper}></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Valor montagem</label>
                <input id='vl_montagem' className='form-control'
                    placeholder={'R$ 0.00'}
                    onChange={(e) =>{ props.handleChange('vl_montagem', e.target.value)}}
                    value={props.product.vl_montagem}></input>
            </div>

        </Grid>
        
        <Grid cols='12 9 2'>
            <div>
                <label>Valor tear</label>
                <input id='vl_tear' className='form-control'
                    placeholder={'R$ 0.00'}
                    onChange={(e) =>{ props.handleChange('vl_tear', e.target.value)}}
                    value={props.product.vl_tear}></input>
            </div>
        </Grid>
        <Grid cols='12 9 6'>
            <div className="totalProduct">
                <h2>Total: R$ 0,00</h2>
            </div>
        </Grid>
        <Grid cols='12 9 12'>
            <br /><br />
            <div className="col-12">
                <button className={'btn btn-info'}
                    onClick={props.handleSearch}>
                    <i className={'fa fa-search'}> Pesquisar </i>
                </button>
                <button className={'btn btn-success buttonSalvar'}
                    onClick={props.handleAdd}>
                    <i className={'fa fa-save'}> Salvar </i>
                </button>
                <button className={'btn btn-danger'}
                    onClick={props.handleClear}>
                    <i className={'fa fa-close'}> Cancelar </i>
                </button>
            </div>
            <br />
        </Grid>
    </div>
)