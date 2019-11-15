  //生成当前路由参数&id
  function generatorRouterParam(pathname, url) {
    let _pathname = pathname;
    let _url = url;
    let _param = _pathname.substring(_url.length, _pathname.length).split('/');
    let _routerParam = {
        name: _param[1],
        id: _param[2]
    }
    return _routerParam;
}
export default generatorRouterParam;