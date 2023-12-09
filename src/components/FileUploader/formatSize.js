const formatSize = (size) => {
    let result = size / Math.pow(2, 10) > 1000 ? size / Math.pow(2, 20) : size / Math.pow(2, 10)
    let unit = size / Math.pow(2, 10) > 1000 ? 'MB' : 'KB'
    return `${parseFloat(result).toFixed(2)} ${unit}`
}

export default formatSize