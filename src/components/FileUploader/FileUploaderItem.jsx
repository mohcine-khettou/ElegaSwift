
import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag'
import { memo } from 'react'
import formatSize from './formatSize'


const FileUploaderItem = ({ name, image, size, removeImage, id }) => {
    const handleButtonClick = (e) => {
        e.stopPropagation()
        removeImage(id)
    }
    return (
        <>
            <div className="flex align-items-center flex-wrap py-3" onClick={(e) => e.stopPropagation()}>
                <div className="flex align-items-center" style={{ width: '60%' }}>
                    <img alt={name} role="presentation" src={image} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={formatSize(size)} severity="warning" className="px-3 py-2" />
                <Button
                    type="button"
                    icon="pi pi-times"
                    className="p-button-outlined p-button-rounded p-button-danger ml-auto"
                    onClick={handleButtonClick} />
            </div>
        </>

    )
}

export default FileUploaderItem
