import React from 'react'
import Grid from '../template/grid'
import IconButtton from '../template/iconButton'

export default props => (
    <div role='form' className='productForm'>
        
        <Grid cols='12 9 6'>
            <div>
                <label>Descrição do produto</label>
                <input id='description' className='form-control'
                    placeholder={'Descrição'}
                    onChange={props.handleChangeDescription}
                    value={props.description}></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Modelo</label>
                <input id='modelo' className='form-control'
                    placeholder={'Modelo'}
                    onChange={props.handleChangeModelo}
                    value={props.modelo}></input>
            </div>
        </Grid>
        
        <Grid cols='12 9 6'>
            <div>
                <label>Couro</label>
                <input id='couro' className='form-control'
                    
                    onChange={props.handleChangeCouro}
                    value={props.couro}></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Qtde. Couro</label>
                <input id='qt_couro' className='form-control'
                    placeholder={'0.000'}
                    onChange={props.handleChangeQtCouro}
                    value={props.qt_couro}></input>
            </div>
        </Grid>

        <Grid cols='12 9 6'>
            <div>
                <label>Metal</label>
                <input id='metal' className='form-control'
                    
                    onChange={props.handleChangeMetal}
                    value={props.qt_metal}></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Qtde. Metal</label>
                <input id='qt_metal' className='form-control'
                    placeholder={'0.000'}
                    onChange={props.handleChangeQtMetal}
                    value={props.qt_metal}></input>
            </div>
        </Grid>

        <Grid cols='12 9 6'>
            <div>
                <label>Forro</label>
                <input id='forro' className='form-control'
                    
                    onChange={props.handleChangeForro}
                    value={props.forro}></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Qtde. Forro</label>
                <input id='qt_forro' className='form-control'
                    placeholder={'0.000'}
                    onChange={props.handleChangeQtForro}
                    value={props.qt_forro}></input>
            </div>
        </Grid>

        <Grid cols='12 9 6'>
            <div>
                <label>Ziper</label>
                <input id='ziper' className='form-control'
                    
                    onChange={props.handleChangeZiper}
                    value={props.ziper}></input>
            </div>
        </Grid>

        <Grid cols='12 9 2'>
            <div>
                <label>Qtde. Ziper</label>
                <input id='qt_ziper' className='form-control'
                    placeholder={'0.000'}
                    onChange={props.handleChangeQtZiper}
                    value={props.qt_ziper}></input>
            </div>
        </Grid>

        <Grid cols='12 9 5'>
            <div>
                <label>Valor montagem</label>
                <input id='vl_montagem' className='form-control'
                    placeholder={'R$ 0.00'}
                    onChange={props.handleChangeVlMontagem}
                    value={props.vl_montagem}></input>
            </div>

        </Grid>
        

        <Grid cols='12 9 3'>
            <div>
                <label>Valor tear</label>
                <input id='vl_tear' className='form-control'
                    placeholder={'R$ 0.00'}
                    onChange={props.handleChangeVlTear}
                    value={props.vl_tear}></input>
            </div>
        </Grid>

        <Grid cols='12 3 6'>
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