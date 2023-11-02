const main=document.querySelector(".main-section");
async function Data(){
    
    const response = await fetch("https://yoga-api-nzy4.onrender.com/v1/categories");
    const data= await response.json();
    
    



    
}
Data();


