import {useState, useCallback} from 'react';
import {Spin, Button} from 'antd';
import {DecimalStep} from '@src/components/DecimalStep';
import {useBalanceOf} from '@src/common/hooks/useBalanceOf';
import {useDeposit} from '@src/common/hooks/useDeposit';
import {Form} from 'antd';

export function DepositForm({addr, contractAddress}) {
    const {loading, balanceFormatted} = useBalanceOf(addr);
    const {deposit} = useDeposit();

    const [value, setValue] = useState(0);

    const onChange = useCallback(value => {
        if (isNaN(value)) {
            return;
        }

        setValue(+value);
    }, [value, setValue]);

    const onSubmit = useCallback(() => {
        if (value === +balanceFormatted) {
            deposit(contractAddress, balanceFormatted);
        } else {
            deposit(contractAddress, value.toFixed(18));
        }
    }, [deposit, value, contractAddress]);

    if (loading) {
        return <Spin />;
    }

    return (
        <Form onFinish={onSubmit}>
            <DecimalStep
                max={+balanceFormatted}
                maxFormatted={balanceFormatted}
                value={value}
                onChange={onChange}
            />
            <Button type="primary" block htmlType="submit">deposit</Button>
        </Form>
    );
}
