let radios=document.querySelectorAll("input[type='radio']");
let span=document.getElementById('span')
let button=document.querySelector('button');
let form=document.querySelector('form');
window.addEventListener('load ',()=>{
    span.classList.remove('rotate');
});
if(!radios.checked){
console.log("ERROR");
}
form.addEventListener('submit', async (event) => {
    span.classList.add('rotate')
    event.preventDefault();
    let checkArr = [];

    for (let radio of radios) {
        if (radio.checked) {
            checkArr.push({ status: radio.className, gmail: radio.value });
        }
    }

    try {
        let response = await axios.post('/data', checkArr);
       
            if (response.data.redirect) {
            window.location.href = response.data.redirect; 
           }
     
       
    } catch (err) {
        console.log(err);
    }
    finally{
        span.classList.remove('rotate');

    }

});
