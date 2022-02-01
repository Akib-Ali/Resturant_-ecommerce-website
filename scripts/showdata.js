async function getData(url){

    try{
    
        
        let res = await fetch(url)
    
        let data = await res.json()
    
        return data
    
    
    }catch(err){
    
        console.log("error:", err)
    }
    
    
    
    
    
}
    
    function appenddata(data,location){
    
        console.log(data)
    
   // data.forEach((categories)=>{

   data.forEach((elem)=>{
    
    
        let smalldiv = document.createElement("div")
        smalldiv.setAttribute("class","particul_dish_div")
    
        let p = document.createElement("p")
        p.setAttribute("class","dishpara")
        p.innerText =elem.strCategory;

    
        let img = document.createElement("img")
        img.setAttribute("class","dishimage")


        if(elem.strCategoryThumb !=undefined){

            img.src =elem.strCategoryThumb;
        }
        else{
            img.src =elem.strMealThumb;
        }
    
        img.src =elem.strCategoryThumb;
    
        smalldiv.append(img, p)
    
        location.append(smalldiv)
    })
    }
 
    
    export{getData,appenddata}









    // iind search page function


    