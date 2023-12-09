import React from 'react'
import useFileUpload from './hook'
import FileUploaderItem from './FileUploaderItem'
import EmptyTemplate from './EmptyTemplate'
import Header from './Header'
import { Button } from 'primereact/button'


const FileUploader = () => {
    const { getInputProps, getRootProps, images, removeImage, clearItems, uploadImages, completeUpload } = useFileUpload()
    return (
        <>
            <div className="file-uploader">
                <div className='p-fileupload p-fileupload-advanced p-component'>
                    <Header getRootProps={getRootProps} clearItems={clearItems} getInputProps={getInputProps} />
                    <div {...getRootProps()} className='p-fileupload-content'>
                        <input {...getInputProps()} />
                        {
                            images.length ? images.map((item, index) => {
                                return <FileUploaderItem {...item} key={index} removeImage={removeImage} />
                            }) : <EmptyTemplate />
                        }
                    </div>
                </div>
                <Button
                    outlined
                    label='upload'
                    icon={'pi pi-fw pi-cloud-upload'}
                    className='upload'
                    onClick={uploadImages}
                />

            </div>
            <div className="container">
                {
                    completeUpload &&
                    <>
                        <div className="components">
                            <img src="/assets/1/1.jpg" alt="" />
                            <img src="/assets/1/2.jpg" alt="" />
                            <img src="/assets/1/3.jpg" alt="" />
                        </div>
                        <div className="main-img">
                            <img src="/assets/1/result.jpg" alt="" />
                        </div>
                        <div className="components">
                            <img src="/assets/2/1.jpg" alt="" />
                            <img src="/assets/2/2.jpg" alt="" />
                        </div>
                        <div className="main-img">
                            <img src="/assets/2/result.jpg" alt="" />
                        </div>
                    </>

                }
            </div>
        </>


    )
}

export default FileUploader
