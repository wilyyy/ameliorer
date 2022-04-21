import type { NextPage } from 'next';
import { useState } from 'react';

const Dashboard: NextPage = () => {
   const [page, setPage] = useState<string>('glossary');

   return (
      <div className="flex bg-msuGreen w-screen h-screen">
         <p>Dashboard</p>
      </div>
   );
};

export default Dashboard;
