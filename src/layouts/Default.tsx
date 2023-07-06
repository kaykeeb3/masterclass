import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function Default() {
  return (
    <div className='m-auto max-w-4xl grid grid-cols-columns max-md:grid-cols-col'>
      <Sidebar />

      <div className='border border-color border-r'>
         <Outlet />     
      </div>
    </div>
  )
} 