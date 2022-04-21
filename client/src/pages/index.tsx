import type { NextPage } from 'next';
import Image from 'next/image';
import ButtonTest from '../components/Button';

const Home: NextPage = () => {
   return (
      <div className="w-screen h-screen flex justify-center items-center bg-msuGreen text-white">
         <ButtonTest text="Click Me" />
      </div>
   );
};

export default Home;
