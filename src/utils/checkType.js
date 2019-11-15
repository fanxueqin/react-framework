function checkType(target){
    return Object.prototype.toString.call(target).slice(8,-1);
}
export default checkType;