import axios from "axios"

const loginService = async (body) => {
    try{
        const res = await axios.post("/api/auth/login", 
            {
                username: body.username,
                password: body.password,
              }
        )
        return res
    }
    catch(e){
        console.error(e)
        return e
    }
    
}
const signInService = async (bodyData) => {
    try{
        const res = await axios.post("/api/auth/signup", bodyData)
        console.log(res)
        return res
    }
    catch(e){
        console.error(e)
    }
    
}
const logoutUser = async () => {
    try{
        const res = await axios.post()
        console.log(res)
    }
    catch(e){
        console.error(e)
    }
}

export {loginService,logoutUser,signInService}