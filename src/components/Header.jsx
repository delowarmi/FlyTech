import React from 'react';
import { Button } from '@mui/material';

export default function Header() {
  return (
    <div className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <img src="../src/assets/companylogo (1).png" alt="Fly Far Tech" className="h-16 w-36" />
      <div className="space-x-4 ">
        <a href='#' variant="outlined" size="small"className='border px-10 py-2 rounded-full bg-green-500'>Track Journey</a>
        <a href='#' variant="outlined" size="small"className='border px-10 py-2 rounded-full bg-gray-500'>Sign up/Login</a>
      </div>
    </div>
  );
}
