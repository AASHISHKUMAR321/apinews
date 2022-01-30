

async function Register(url,data){

    try{
        let response=await fetch(url,{

            method:'POST',
            body:data,
            headers:{
                "Content-Type":"application/json",
            }
        })

        let data=response.json();
        return data;
    }

    catch(err){
        console.log(err);
    }
}

export default Register;