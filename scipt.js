const txtData = document.getElementById('txt_field')
const lowerCaseData = document.getElementById("lowerCase");
const upperCaseData = document.getElementById("upperCase")
const trim = document.getElementById("trim")

const changeTransformation = () =>{

    lowerCaseData.innerHTML = txtData.value.toLowerCase();
    upperCaseData.innerHTML = txtData.value.toUpperCase();
    trim.innerHTML= txtData.value.split(" ").join("");
}