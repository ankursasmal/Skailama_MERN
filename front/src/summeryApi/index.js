 
// const BackendDomin='https://skailama-mern-backend.onrender.com/api'
 const BackendDomin='http://localhost:3000'

const SummeryApi={
    signUp:{
        url:`${BackendDomin}/signup`,
        method:"POST"
    },
    Login:{
        url:`${BackendDomin}/login`,
        method:"POST"
    },
    projects:{
        url:`${BackendDomin}/project`,
        method:"POST"
    
    }, Logout:{
        url:`${BackendDomin}/logout`,
        method:"GET"
    
    }, projects_Edit_Save:{
        url:`${BackendDomin}/project/`,
        method:"GET"
    
    }, save_teanscript:{
        url:`${BackendDomin}/project/`,
        method:"PATCH"
    
    }, Get_projects:{
        url:`${BackendDomin}/project/`,
        method:"GET"
    
    }, Delete_Upload_file:{
        url:`${BackendDomin}/project/`,
        method:"PUT"
    
    }, Upload_Files:{
        url:`${BackendDomin}/project/`,
        method:"PATCH"
    
    },
    Get_allProject:{
        url:`${BackendDomin}/project-list`,
        method:"GET"
    
    }, User_Info:{
        url:`${BackendDomin}/users`,
        method:"GET"
    
    }, 
}
export default SummeryApi;
