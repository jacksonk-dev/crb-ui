import { Outlet } from 'react-router-dom';

export default function Root(){
  return (
    <>
      App Root
      <Outlet />
    </>
  );
}