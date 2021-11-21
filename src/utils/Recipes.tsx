import axios from 'axios'

// This does not work on localhost
export const uploadImage = async(image: object) => {
    const data = new FormData()
    data.append("image", image)
    try {
        const response = await axios.post('https://api.imgur.com/3/image', data, {
            headers: {
                Authorization : "Client-ID a7c2fdc2aedce88"
            },
        })
        return response.data.data.link
    } catch (err) {
        return err.message
    }
}