import Axios from 'axios';
const FormData1=()=>{
    let formData = new FormData();

const onFileChange = (e) =>{
    console.log(e.target.files[0])
    if(e.target && e.target.files[0]){
        formData.append('file', e.target.files[0]);
    }
}
const SubmitFileData = () =>{
Axios.post(
    'https://v2.convertapi.com/upload',
    {formData}
)
.then(res =>{
    console.log(res)
})
.catch(error =>{
    console.log(error)
})
}
return(
    <div>
        <div>
        <input type="file" name="file_upload" onChange={onFileChange}/>
        </div>
        <div>
            <button onClick={SubmitFileData}>submit</button>       </div>
        </div>
    
)
}
export default FormData1;