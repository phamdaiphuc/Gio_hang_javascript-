let modal = document.getElementById('cart-hidden');
let shop_items= document.getElementById('shop_opac');

//phan cai dat an gio hang 
function hidden_cart(){
  if(modal.style.display=="none"){
    modal.style.display="block";
    shop_items.style.opacity="0.25";
  } 
  else{
    modal.style.display="none";
    shop_items.style.opacity="";
  }
  showcart();
}


//phan lay du lieu html dom 
 //phan them vao gio hang 
var mang = new Array();
function addtocart(x){
  var card = x.parentElement.children;
  var img_sp = card[0].children[0].src;
  var name_sp=card[1].innerText;
  var product_price=card[2].children[0].innerText;
  var sp= new Array(img_sp,name_sp,product_price);
 
  mang.push(sp);
  //loc du lieu doi tuong
  var check = [];
  for( let g=1;g<mang.length;g++){
    check.push(mang[g][1]);
    for(let d=1;d<check.length;d++){
      if(check[d] =mang[g][1]){
        mang.splice(mang)
        console.log('fail');
      }
   
    

    }
 
  }
  
  
 

   


}

//ham tai cac item len gio hang qua html 

function showcart(){
  var ttgh= "";

  for(let i=0 ; i<mang.length;i++){
    ttgh+=
    '<tr>'+
    ' <th scope="row">' + ( i+1)+'</th>'+
    ' <td>' + mang[i][1] + '</td>'+
    ' <td></td>'+
    ' <td>'+mang[i][2]+'</td>'+
    
    ' </tr>'
    ;
    document.getElementById("mycart").innerHTML=ttgh;
    console.log(mang[0][1])
 
  }
}

console.log(typeof(mang))



//ham loc du lieu klhong trung trong mang 
