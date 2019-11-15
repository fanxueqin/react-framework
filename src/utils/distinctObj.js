//数组去重--obj
function distinctObj(arr,key){
    var i,j,result=[],len=arr.length;
    for( i = 0; i< len; i++){
        for(j=i+1; j< len; j++){
            if(arr[i][key] === arr[j][key]){
                j= ++ i;
            }
        }
        result.push(arr[i]);
    }
    return result;
  }
  export default distinctObj;