interface Props {
   text?: string;
}

export default function TranslateCard({ text = 'word' }: Props): JSX.Element {
   return (
      <div className="w-1/4 h-[100px] bg-apricot text-black rounded-xl flex justify-center items-center text-2xl">
         {text}
      </div>
   );
}
