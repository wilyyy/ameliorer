import { motion } from 'framer-motion';

import TranslateCard from './TranslateCard';

export default function Translate(): JSX.Element {
   return (
      <div className="w-full h-full flex flex-col justify-evenly items-center">
         <motion.h2
            initial={{ x: '-20vw' }}
            animate={{ x: '0' }}
            transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
            className="text-4xl"
         >
            Choose the correct word for:
         </motion.h2>
         <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'tween', duration: 1, delay: 0.5 }}
            className="font-playfair text-5xl"
         >
            Bonjour
         </motion.h1>
         <motion.div
            className="flex w-2/4 h-auto justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'tween', duration: 1, delay: 1 }}
         >
            <TranslateCard text="hello" />
            <TranslateCard text="goodbye" />
            <TranslateCard text="how are you?" />
         </motion.div>
      </div>
   );
}
