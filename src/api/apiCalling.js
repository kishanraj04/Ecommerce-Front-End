import axios from "axios"

export const apiCalling = async (options) => {
    try {
        const response = await axios(options)
        if(response?.data){
            return response.data.products
        }
    } catch (error) {
        return error?.response?.data || "Something went wrong !"
    }
}