const _submit = document.querySelector('#submit i')
const loader = document.querySelector('#submit #submitSpinner')
document.querySelector('#submit').onclick = (e) => {
    document.querySelector('#submit1').click()
}
function myformSubmit(e){
 e.preventDefault();
   window.start_loading(_submit,loader)
    const form = e.srcElement
    let data = Array.from(new FormData(form))
                  .reduce((r,[k,v])=>{r[k]=v;return r},{})
//     let select = {project : document.querySelector('#customSelect').value}
//     if(select.project == ""){
//     alert("Please select enquiry type?")
// window.stop_loading(_submit,loader)
//         return
        
// }
    data = {...data}


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify(data);
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
 
fetch("https://cors-anywhere.herokuapp.com/"+form.getAttribute('action'), requestOptions)
  .then(response => response.json())
  .then(result => {
console.log(JSON.stringify(result,null,2))
window.location.href = "/contact-success/index.html"
})
  .catch(error => console.error('error', error))
    .finally(()=> window.stop_loading(_submit,loader))
;
  return false;
}