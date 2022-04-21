import type { NextPage } from 'next';
import Image from 'next/image';
import ButtonTest from '../components/Button';

const Home: NextPage = () => {
   return (
      <div className="font-raleway w-screen h-screen flex flex-col justify-evenly items-center bg-msuGreen text-white">
         <div className="flex flex-col justify-between items-center w-1/3 h-[150px]">
            <p className="font-playfair text-6xl text-apricot">Ameliorer</p>
            <p className="font-playfair text-2xl text-apricot">
               verb &middot; to improve
            </p>
         </div>
         <ButtonTest text="Click Me" />
      </div>
   );
};

export default Home;
