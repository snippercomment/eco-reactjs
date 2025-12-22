import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon } from './constants';
import styles from './style.module.scss';

function MyHeader() {
    const { containerBoxIcon } = styles;
    return (
        <div>
            <div>
                <div className='containerBoxIcon'>
                    {dataBoxIcon.map(item => {
                        return <BoxIcon type={item.type} href={item.href} />;
                    })}
                </div>
                <div></div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}
export default MyHeader;
