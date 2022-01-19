import {useWallet} from '@src/data-layer';
import {useGetBalance} from './useGetBalance';
import {Row, Col, Button} from 'antd';

const wrapperStyle = {
    border: '1px solid rgba(0, 0, 0, 0.25)',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
};

const buttonStyle = {
    borderBottom: 'none',
    borderTop: 'none',
    borderRight: 'none',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
};

export function Account() {
    const {wallet} = useWallet();
    const {balance} = useGetBalance();

    if (!wallet.currentAccount) {
        return null;
    }

    return (
        <Row justify="end" align="middle" gutter={15} style={wrapperStyle}>
            <Col al>
                {balance}
            </Col>
            <Col>
                <Button type="secondary" style={buttonStyle}>
                    User {`${wallet.currentAccount.slice(0,5)}...${wallet.currentAccount.slice(-5)}`}
                </Button>
            </Col>
        </Row>
    )
}