import Image from 'next/image';
import Logo from '@/public/assets/avax.png';

const Navbar = () => {
  return (
    <div className="w-100 flex justify-between items-center px-3 py-6">
      <div className="w-2/3 flex items-center space-x-2">
        <Image src={Logo} className="w-10 h-10 object-cover" alt="logo" />
        <h1 className="text-2xl font-semibold">TradeAvaxBot</h1>
      </div>
      <div className="w-1/3 flex flex-col xl:flex-row xl:justify-end xl:space-x-5 items-end space-y-3">
        <button className="bg-gradient-to-b from-rose-600 via-rose-800 to-rose-900 font-semibold text-sm md:text-lg xl:text-xl px-3 py-1 xl:px-6 xl:py-2 text-white rounded-lg">
          Twitter
        </button>
        <button className="bg-black text-white font-semibold text-sm md:text-lg xl:text-xl px-3 py-1 xl:px-6 xl:py-2  rounded-lg">
          Telegram
        </button>
      </div>
    </div>
  );
};

export default Navbar;

