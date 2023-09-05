import Card from './components/Card/Card';
import LeftNavbar from './components/LeftNavbar/LeftNavbar';
import Logo from './components/Logo/Logo';
import { useAppSelector } from './hooks/hooks';
import './index.scss'
import { Layout, Row, Col } from "antd";

export const App = () => {

    const {tickets} = useAppSelector(state => state.tickets)

    return (
        <Layout>
            <Logo/>
            <Layout.Content className='content'>
                <Row gutter={[16,16]} justify={'center'} align={'top'}>
                    <LeftNavbar/>
                    <Col span={12}>
                        {tickets.map((ticket, index) => {
                            return (
                                <Card ticket={ticket} key={index}/>
                            )
                        })}
                    </Col>
                </Row>
                
            </Layout.Content>
        </Layout>
    )
};

