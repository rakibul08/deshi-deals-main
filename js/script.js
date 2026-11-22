// sob gula id k dhorar jonne function 
function getElement(id){
    const element=document.getElementById(id)
return element;
    
}


// main function ZZAZ1W
 
getElement('card').addEventListener('click',function(event){
    if(event.target.className.includes('btn')){
       const cardButton=
       event.target;
       

       cardButton.setAttribute('disabled',true);
      const productImg=
      cardButton.parentNode.parentNode.children[0].children[0].src;
       const cardTitle=
       cardButton.parentNode.parentNode.children[1].children[1].innerText;
       
       const cardPrize=
       cardButton.parentNode.parentNode.children[1].children[2].children[0].innerText;
       
       const addprice=getElement("total-price").innerText;
      const totalAmount=Number(cardPrize)+Number(addprice);
     getElement('total-price').innerText=totalAmount;
     const totalQuantity=getElement("total-quantity").innerText;
     const updatequantity=Number(totalQuantity)+1;

         getElement("total-quantity").innerText=updatequantity;


    //  new item 
    const newItem=getElement("item-add")
   const newDiv=document.createElement('div')
   newDiv.innerHTML=`
    <div class="flex justify-between p-3 items-center bg-gray-400 rounded">
                    <img src="${productImg}" class="w-11" alt="furniture-1.png">
                    <div>
                        <h2 class="text-black text-xl font-semibold font-work"> ${cardTitle} </h2>
                        <p class="">${cardPrize}</p>
                    </div>

                </div>
   `;

newItem.appendChild(newDiv);
    }
})
document.getElementById("clearbtn").addEventListener('click',function(){
     const newItem=getElement("item-add")
     newItem.innerText='';
     
      getElement('total-price').innerText='';
    
     
      getElement("total-quantity").innerText='';
      
      
      
})