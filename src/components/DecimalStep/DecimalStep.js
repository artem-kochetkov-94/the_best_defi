import {useCallback, useState} from 'react';
import {Slider, InputNumber} from 'antd';

export function DecimalStep({max}) {
    const [value, setValue] = useState(0);
  
    const onChange = useCallback(value => {
        if (isNaN(value)) {
            return;
        }

        setValue(value);
    }, []);

    return (
        <div>
            <Slider
                min={0}
                max={max}
                onChange={onChange}
                value={typeof value === 'number' ? value : 0}
                step={0.01}
            />
            <InputNumber
                min={0}
                max={max}
                style={{ margin: '0 16px' }}
                step={0.01}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}