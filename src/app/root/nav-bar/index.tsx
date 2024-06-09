import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="bg-white shadow-sm p-6 w-full flex justify-between">
    <Link to="" className='text-black hover:text-black text-lg font-extrabold'>CRB Services</Link>
    <div>Links</div>
  </div>
);

export default NavBar;