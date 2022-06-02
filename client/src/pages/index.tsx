import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { HoverZoom } from '../utils/Animations';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '../components/Button';

const Home: NextPage = () => {
   const router = useRouter();

   return (
      <div className="font-raleway w-screen h-screen flex flex-col justify-evenly items-center bg-msuGreen text-white">
         <div className="font-playfair flex flex-col justify-between items-center w-1/3 h-[150px]">
            <p className="text-6xl text-apricot font-extrabold">Ameliorer</p>
            <p className="text-2xl text-apricot">verb &middot; to improve</p>
         </div>
         <p className="w-2/3 text-center">
            Learn English to French translations with flashcards using SM-2
            spaced repetition algorithm. This is a small project created by
            William Laurel to practice Full Stack Development technologies
         </p>
         <motion.a
            whileHover={HoverZoom.hover}
            transition={HoverZoom.spring}
            href="https://github.com/wilyyy/ameliorer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apricot font-extrabold underline hover:text-red-600"
         >
            Click here to view source code.
         </motion.a>
         <Button text="Begin" onButtonClick={() => router.push('/dashboard')} />
      </div>
   );
};

export default Home;
