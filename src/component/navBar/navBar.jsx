import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import CartWitget from '../cartWidget/cartWidget';

const items = [
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Tipos de lotes disponibles
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Contacto
            </a>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item（disabled）',
        key: '3',
        disabled: true,
    },
];




const NavBar = () => {
    return (
        <div>
            <p>Prohas - Lotes con servicios
                para familias trabajadoras</p>

            <Dropdown
                menu={{
                    items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Menu
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
            <CartWitget />





        </div>
    )
}
export default NavBar