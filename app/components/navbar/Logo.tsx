'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/Call.png" 
      height="100" 
      width="100" 
      alt="Logo"
      style={{position:"absolute", width:"35px",left:"50px"}} 
    />
   );
}
 
export default Logo;
