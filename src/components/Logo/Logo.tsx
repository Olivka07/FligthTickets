import React from 'react';
import {Layout, Row, Avatar} from 'antd'

const Logo = () => {
    return (
        <Layout.Header className='header'>
            <Row justify={'center'}>
                <Avatar size={64} src="./assets/plane.jpg" />
            </Row>
        </Layout.Header>
    )
}

export default Logo