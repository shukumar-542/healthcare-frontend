export const modifyPayload = (values : any)=>{
    // const obj = {...data}
    const data = JSON.stringify(values);
    const formData = new FormData()
    formData.append('data', data)
    return formData;
}