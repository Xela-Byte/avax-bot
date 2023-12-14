import Navbar from '@/components/Navbar';
import AvalancheLogo from '@/public/assets/avalanche.svg';
import Logo from '@/public/assets/avax.png';
import BuyFeature from '@/public/assets/buyFeature.png';
import PurchaseFeature from '@/public/assets/purchaseFeature.png';
import SettingsFeature from '@/public/assets/settingsFeature.png';
import TrackFeature from '@/public/assets/trackFeature.png';
import WithdrawFeature from '@/public/assets/withdrawFeature.png';
import { Russo_One } from 'next/font/google';
import Image from 'next/image';
import { IoShieldHalf } from 'react-icons/io5';
import { AiFillTool } from 'react-icons/ai';
import { MdOutlineSpeed } from 'react-icons/md';

const russ = Russo_One({ weight: ['400'], subsets: ['latin'] });

const Home = () => {
  return (
    <div className="w-100 bg-white">
      <Navbar />

      <div className="content mt-10 px-2">
        <div className="w-100 bg-gradient-to-b from-gray-100 via-rose-100 to-rose-300 rounded-md p-2 2xl:w-2/3 2xl:mx-auto 2xl:p-5">
          <div
            className={`text-2xl md:text-3xl xl:text-5xl font-semibold ${russ.className} flex flex-col md:flex-row xl:flex-col md:space-x-2 xl:space-x-3 md:justify-center items-center`}
          >
            <p className="md:mt-2 text-center">
              First ever telegram sniping bot on
            </p>
            <div className="flex">
              <Image
                src={AvalancheLogo}
                className="w-7 h-7 mt-1 xl:w-10 xl:h-10 md:mt-2"
                alt="AvalancheLogo"
              />
              <p className="text-red-600 mt-2">valanche</p>
            </div>
          </div>
          <div className="py-5 xl:px-[20%]">
            <p className="text-center text-gray-800 md:text-lg xl:text-xl md:font-medium xl:font-bold">
              Avabot offers the smoothest and most seamless trading experience
              on Avalanche, setting a new benchmark for efficiency and ease of
              use in the DeFi trading world.
            </p>
          </div>

          <div className="w-1/2 mx-auto pt-2 pb-5 flex justify-between md:w-1/3 xl:w-1/4">
            <button className="bg-gradient-to-b from-rose-600 via-rose-800 to-rose-900 font-semibold text-sm md:text-lg xl:text-xl px-3 py-1 xl:px-6 xl:py-2 text-white rounded-lg">
              Avabot
            </button>
            <button className="border border-black font-semibold text-sm md:text-lg xl:text-xl px-3 py-1 xl:px-6 xl:py-2 text-black rounded-lg">
              Buy $AVB
            </button>
          </div>
        </div>

        {/* <div className="w-100 my-5 py-5 rounded-md bg-gradient-to-b from-white via-rose-100 to-white">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between xl:w-2/3 xl:mx-auto">
            <div className="text-center py-7 md:py-14">
              <p className="text-gray-700 text-4xl md:text-5xl font-semibold">
                +4200
              </p>
              <p className="text-2xl md:text-3xl md:mt-2 font-bold">
                Avabot users
              </p>
            </div>
            <div className="text-center py-7 md:py-14">
              <p className="text-gray-700 text-4xl md:text-5xl font-semibold">
                380 000$
              </p>
              <p className="text-2xl md:text-3xl md:mt-2 font-bold">
                Avabot volume
              </p>
            </div>
            <div className="text-center py-7 md:py-14">
              <p className="text-gray-700 text-4xl md:text-5xl font-semibold">
                +1300
              </p>
              <p className="text-2xl md:text-3xl md:mt-2 font-bold">
                $AVB holders
              </p>
            </div>
          </div>
          <Image
            src={Logo}
            className="mx-auto my-10 w-20 h-20 object-cover xl:w-40 xl:h-40"
            alt="logo"
          />

          <div className="px-10 pt-5 pb-20 mx-auto">
            <p className="text-3xl text-center font-bold xl:text-5xl">
              <span className="text-red-600 ">Avabot</span> premium experiences
            </p>
          </div>
        </div> */}

        <div className="w-100 my-5 py-5">
          <div className="space-y-10 xl:space-y-0 md:w-2/3 xl:p-10 xl:w-[100%] md:mx-auto xl:flex xl:flex-row xl:items-center xl:justify-between">
            <div className="space-y-2 md:space-y-4 px-10 text-center">
              <IoShieldHalf className={'text-red-400 mx-auto text-4xl'} />
              <p className="text-gray-800 text-xl md:text-2xl font-semibold">
                High-Speed Trading Terminal
              </p>
              <p className="md:text-xl">
                Instantaneous trading with a user-friendly interface.
              </p>
            </div>
            <div className="space-y-2 md:space-y-4 px-10 text-center">
              <AiFillTool className={'text-red-400 mx-auto text-4xl'} />
              <p className="text-gray-800 text-xl md:text-2xl font-semibold">
                Post-Purchase Toolkit
              </p>
              <p className="md:text-xl">
                A tool suite for strategic trading and profit protection.
              </p>
            </div>
            <div className="space-y-2 md:space-y-4 px-10 text-center">
              <MdOutlineSpeed className={'text-red-400 mx-auto text-4xl'} />
              <p className="text-gray-800 text-xl md:text-2xl font-semibold">
                Robust Safety Protocols
              </p>
              <p className="md:text-xl">
                Measures to shield against threats like liquidity rugs
              </p>
            </div>
          </div>
          <div className="w-100 py-10 flex items-center justify-center">
            <button className="bg-black font-semibold text-sm md:text-lg xl:text-xl px-3 py-1 text-white rounded-lg">
              Avabot Manual
            </button>
          </div>

          <div className="space-y-10 px-5 md:w-3/5 md:mx-auto md:space-y-20 xl:w-[100%] xl:flex xl:flex-wrap xl:gap-x-8 xl:justify-center">
            <div className="shadow-md p-5 rounded-lg text-center flex flex-col items-center xl:w-1/3">
              <Image
                src={BuyFeature}
                className="w-100 h-2/3 xl:w-1/2"
                alt="buyFeature"
              />
              <p className="text-gray-800 text-xl md:text-2xl font-semibold">
                Sniping Tool
              </p>
              <p className="md:text-xl md:mt-2">
                Snipe like a pro with Avabot's lightning-fast execution.
              </p>
            </div>
            <div className="shadow-md p-5 rounded-lg text-center flex flex-col items-center xl:w-1/3">
              <Image
                src={PurchaseFeature}
                className="w-100 h-2/3 xl:w-1/2"
                alt="buyFeature"
              />
              <p className="text-gray-800  mt-5 text-xl md:text-2xl font-semibold">
                Post-Purchase Toolkit
              </p>
              <p className="md:text-xl md:mt-2">
                Profit at the speed of thought with Avabot's Instant Sell.
              </p>
            </div>
            <div className="shadow-md p-5 rounded-lg text-center flex flex-col items-center xl:w-1/3">
              <Image
                src={TrackFeature}
                className="w-100 h-2/3 xl:w-1/2"
                alt="buyFeature"
              />
              <p className="text-gray-800 text-xl md:text-2xl font-semibold">
                Live Tracking PNL
              </p>
              <p className="md:text-xl md:mt-2">
                Monitor your wins as they happen with Avabot.
              </p>
            </div>
            <div className="shadow-md p-5 rounded-lg text-center flex flex-col items-center xl:w-1/3">
              <Image
                src={WithdrawFeature}
                className="w-100 h-2/3 xl:w-1/2"
                alt="buyFeature"
              />
              <p className="text-gray-800 text-xl md:text-2xl font-semibold">
                Secured withdraw
              </p>
              <p className="md:text-xl md:mt-2">
                A tool suite for strategic trading and profit protection.
              </p>
            </div>
            <div className="shadow-md p-5 rounded-lg text-center flex flex-col items-center xl:w-1/3">
              <Image
                src={SettingsFeature}
                className="w-100 h-2/3 xl:w-1/2"
                alt="buyFeature"
              />
              <p className="text-gray-800 text-xl md:text-2xl mt-5 font-semibold">
                Personal Settings
              </p>
              <p className="md:text-xl md:mt-2">
                A tool suite for strategic trading and profit protection.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="w-100 my-5 bg-gradient-to-b from-gray-100 via-gray-100 to-rose-300 rounded-md p-2 xl:p-5 xl:mx-20 xl:rounded-xl 2xl:w-2/3 2xl:mx-auto 2xl:my-10">
          <Image
            src={Logo}
            className="mx-auto my-10 w-20 h-20 object-cover"
            alt="logo"
          />

          <p className="font-bold md:my-10 text-sm xl:text-lg text-center">
            $AVB CA: 0x9f71B3118d97a448B127bf7677a59AB7454D0a04
          </p>

          <div
            className={`text-2xl mt-5 md:text-3xl xl:text-5xl font-semibold ${russ.className} flex flex-col md:flex-row xl:flex-col md:space-x-2 xl:space-x-3 md:justify-center items-center`}
          >
            <p className="md:mt-2 text-center">
              First ever telegram sniping bot on
            </p>
            <div className="flex">
              <Image
                src={AvalancheLogo}
                className="w-7 h-7 mt-1 xl:w-10 xl:h-10 md:mt-2"
                alt="AvalancheLogo"
              />
              <p className="text-red-600 mt-2">valanche</p>
            </div>
          </div>
          <div className="py-5 space-y-3 md:space-y-6 xl:space-y-10 xl:mt-10 flex flex-col items-center">
            <button className="bg-gradient-to-b from-rose-600 via-rose-800 to-rose-900 font-semibold text-sm md:text-lg xl:text-xl px-3 py-1 text-white rounded-lg">
              Avabot Manual
            </button>
            <button className="bg-gradient-to-b from-rose-600 via-rose-800 to-rose-900 font-semibold text-sm md:text-lg xl:text-xl px-3 py-1 text-white rounded-lg">
              Twitter
            </button>
            <button className="bg-gradient-to-b from-rose-600 via-rose-800 to-rose-900 font-semibold text-sm md:text-lg xl:text-xl px-3 py-1 text-white rounded-lg">
              Open Bot
            </button>
          </div>
        </div> */}

        <p className="font-bold text-sm md:text-lg text-center xl:text-lg mb-5">
          Copyright © 2023 Avabot. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Home;

