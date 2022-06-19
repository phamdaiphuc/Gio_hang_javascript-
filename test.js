var mang = new Array();
console.log(typeof(mang))


var list = [1,3,2,1,3,2,3,4,5,6];
var check = [];
for(i=0;i<list.length;i++){
    console.log(list[i]);
    var a =list[i];
    if(list[i]in check){
        list.splice(i,1);

    } 
    else{
        check.push(list[i]);
    }

}
var che =new Array();
var checkaa =new Array();
console.log(typeof(checkaa,che))


console.log(check)
//splice xoa phan tu trong mang mang.splice(start,n) 
// trong do start la thu tu bat dau xoa phan tu , so long phan tu bi xoa