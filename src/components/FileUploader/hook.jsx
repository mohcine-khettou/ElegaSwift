import { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import readFile from "./readFile";
import fetchUpload from "./api";

const useFileUpload = () => {
    const toast = useRef(null);
    const [totalSize, setTotalSize] = useState(0);
    const [images, setImages] = useState([])
    const [completeUpload, setCompleteUpload] = useState(false)
    const files = useRef([])
    const onDrop = useCallback(async (acceptedFiles, rejectedFiles) => {
        files.current = acceptedFiles
        for (const file of acceptedFiles) {
            const image = await readFile(file)
            setImages((prevImages) => [...prevImages, { id: Date.now(), name: file.name, size: file.size, image }])
        }
    }, [])
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { 'image/*': [] }
    })
    const removeImage = (imageId) => {
        setImages((prevImages) => {
            return prevImages.filter((image) => image.id !== imageId)
        })
    }
    const clearItems = () => {
        setImages([])
    }
    const uploadImages = () => {
        fetchUpload(images.map(image => image.image))
        setCompleteUpload(true)
    }
    return {
        getInputProps,
        getRootProps,
        images,
        removeImage,
        clearItems,
        uploadImages,
        completeUpload
    }
}

export default useFileUpload