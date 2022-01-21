import {Slider, InputNumber} from 'antd';
import {Form} from 'antd';

const overrideValue = {
    position: 'absolute',
    top: 6,
    left: 12,
    backgroundColor: '#fff',
}

export function DecimalStep({max, maxFormatted, value, onChange}) {
    console.log('value', value);
    return (
        <Form.Item tooltip="This is a required field">
            <Slider
                min={0}
                max={max}
                onChange={onChange}
                value={typeof value === 'number' ? value : 0}
                step={max / 100}
            />
            <div style={{position: 'relative'}}>
                <InputNumber
                    min={0}
                    max={max}
                    step={max / 100}
                    value={value === max ? max : value.toFixed(18)}
                    onChange={onChange}
                    style={{width: '100%'}}
                />
                {/* TODO: Костыль? разобраться в BigNumber */}
                {value === max && <p style={overrideValue}>{maxFormatted}</p>}
            </div>
        </Form.Item>
    );
}