import logo from '../../assets/logo.png';
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center my-10 space-y-2'>
            <img className='mx-auto' src={logo} alt={logo} />
            <p className='text-lg font-normal text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium text-[#181717]'>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;