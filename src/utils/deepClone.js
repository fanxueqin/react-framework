function checkType(target){
    return Object.prototype.toString.call(target).slice(8,-1);
}
function deepClone(target){
    let _result;
    let _type = checkType(target);
    if(_type === 'Object' ){   //要先给返回值赋类型！
        _result = {};
    }else if(_type === 'Array'){
        _result = [];
    }else{
        _result = target;
        return;
    }
    for(let i in target){                        
        let _valueType =  checkType(target[i]) ;
        if( _valueType === 'Object' || _valueType ===  'Array' ){
            _result[i]  = deepClone(target[i])   //要给返回值赋值！
        }else{
            _result[i] = target[i]
        }
    }
    return _result;
}

export default deepClone;