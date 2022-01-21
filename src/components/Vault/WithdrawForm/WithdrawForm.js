import {useState, useCallback} from 'react';
import {useBalanceOf} from '@src/common/hooks/useBalanceOf';
import {useWithdraw} from '@src/common/hooks/useWithdraw';
import {DecimalStep} from '@src/components/DecimalStep';
import {Form, Button, Spin} from 'antd';

export function WithdrawForm({addr, contractAddress}) {
    const {loading, balance, balanceFormatted} = useBalanceOf(addr)
    const {withdraw} = useWithdraw();

    const [value, setValue] = useState(0);

    const onChange = useCallback(value => {
        if (isNaN(value)) {
            return;
        }

        setValue(+value);
    }, [value, setValue]);

    const onSubmit = useCallback(() => {
        if (value === +balanceFormatted) {
            withdraw(contractAddress, balanceFormatted);
        } else {
            withdraw(contractAddress, value.toFixed(18));
        }
    }, [withdraw, value, contractAddress]);

    if (loading) {
        return <Spin />;
    }

    if (!balance || balance <= 0) {
        return <span>-</span>;
    }

    return (
        <Form onFinish={onSubmit}>
            <DecimalStep
                max={+balanceFormatted}
                maxFormatted={balanceFormatted}
                value={value}
                onChange={onChange}
            />
            <Button type="primary" block htmlType="submit">withdraw</Button>
        </Form>
    );
}
