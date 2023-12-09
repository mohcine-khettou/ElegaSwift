import { Button } from 'primereact/button'
import React from 'react'

const Header = ({ clearItems, getRootProps, getInputProps }) => {
    return (
        <div className={'p-fileupload-buttonbar'} style={{ backgroundColor: 'transparent', display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Button {...getRootProps()} rounded className='custom-choose-btn p-button-rounded p-button-outlined p-button-icon-only' icon={'pi pi-fw pi-images'}>
                <input {...getInputProps()} />
            </Button>
            <Button onClick={clearItems} rounded outlined icon={'pi pi-fw pi-times'} severity='danger' />
        </div>
    )
}

export default Header
