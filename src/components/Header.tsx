import { Sparkle } from "phosphor-react";

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  return (
  <div className='p-6 px-5 flex items-center justify-between text-sm font-bold border border-color'>
    {props.title}
    <Sparkle className='w-6 h-6 text-twitter' />
  </div>
  )
}