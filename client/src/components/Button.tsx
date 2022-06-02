// https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/
import { motion } from 'framer-motion';
import { HoverZoom } from '../utils/Animations';

interface Props {
   text: string;
   onButtonClick?: React.MouseEventHandler;
}

export default function Button({
   text = 'Click Me',
   onButtonClick,
}: Props): JSX.Element {
   return (
      <motion.button
         whileHover={HoverZoom.hover}
         whileTap={HoverZoom.tap}
         transition={HoverZoom.spring}
         className="bg-apricot hover:bg-blue-700 text-msuGreen font-bold py-2 px-4 rounded w-1/6"
         onClick={onButtonClick}
      >
         {text}
      </motion.button>
   );
}
