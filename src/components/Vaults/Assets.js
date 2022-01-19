import {Row, Col} from 'antd';
import {iconsByAddress} from './mapAssets';

const imageWrapper = {
    width: 30,
}
  
const imageStyle = {
    width: 30,
    borderRadius: '50%',
}

export function Assets({assets}) {
    if (!assets || !assets.length) {
        return null;
    }

    return (
        <Row>
            {assets.map(asset => (
                <Col key={asset}>
                    <div style={imageWrapper}>
                        <img src={iconsByAddress[asset]} style={imageStyle} />
                    </div>
                </Col>
            ))}
        </Row>
    );
}
