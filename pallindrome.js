let str="mom";
let bag="";
for(i=str.length-1;i>=0;i--){
    bag=bag+str[i]
}
if (bag==str){
  console.log("pallindrome")
}
else
{
  console.log("Not pallindrome")
}