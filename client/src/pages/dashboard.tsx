import type { NextPage } from 'next';
import { useState } from 'react';
import Translate from '../components/Translate/Translate';

const Dashboard: NextPage = () => {
   const [page, setPage] = useState<string>('glossary');

   return (
      <div className="flex bg-msuGreen w-screen h-screen font-raleway">
         <Translate />
      </div>
   );
};

export default Dashboard;
