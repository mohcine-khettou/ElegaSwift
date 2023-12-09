const url = 'http://localhost:5000/api/v1/products/uploads'
const fetchUpload = async (images) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            body: images,
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        return error
    }
}

export default fetchUpload