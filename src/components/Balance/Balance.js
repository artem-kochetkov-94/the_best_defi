import {Spin} from 'antd';

export function Balance({data, loading}) {
    if (loading) {
        return <Spin />;
    }

    if (!data || data <= 0) {
        return <span>-</span>;
    }

    return <span>{data}</span>;
}
