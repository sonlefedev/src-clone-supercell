import classNames from 'classnames/bind'
import style from './style.module.scss';
import { Link } from 'react-router-dom';

type Props = {}
const cx = classNames.bind(style)
const SafeguardYourGame = (props: Props) => {
  return (
    <div className={cx('wrapper')}>
        <Link to={'/'}></Link>
    </div>
  )
}

export default SafeguardYourGame