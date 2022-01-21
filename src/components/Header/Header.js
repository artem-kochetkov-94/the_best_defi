import {Wallet} from '@src/components/Wallet';
// import {TokenPriceButton} from '@src/components/TokenPriceButton';
import {Row, Col} from 'antd';

const wrapperStyle = {
    marginBottom: 15,
};

export function Header() {
    return (
        <Row justify="end" gutter={15} style={wrapperStyle}>
            <Col>
                {/* <TokenPriceButton /> */}
            </Col>
            <Col>
                <Wallet />
            </Col>
        </Row>
    );
}
