import React from 'react'
import PropTypes from 'prop-types'

import { Spin } from 'antd'

import './index.less'

const PageLoading = ({ isLoading, error }) => {
	if (isLoading) {
		return <Spin
			className="pageLoading"
			size="large"
			spinning={true}
		/>
	} else if (error) {
		return <div className="pageLoadingError">资源加载失败！</div>
	} else {
		return null
	}
}

PageLoading.propTypes = {
	isLoading: PropTypes.bool
}
PageLoading.defaultProps = {
	isLoading: true
}

export default PageLoading;