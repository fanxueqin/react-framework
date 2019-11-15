import React, { Component }from 'react';
import './index.less';

class NoDataTip extends Component {
    
    render(){
        const { tipInfo } = this.props;
        return(
            <div className="noDataTip">{tipInfo?tipInfo:'暂无数据/(ㄒoㄒ)/~~'}</div>
        )
    }
}

export default NoDataTip;