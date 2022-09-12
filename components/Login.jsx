import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = ({providers}) => {
  return (
    <div className='text-white flex h-screen flex-col justify-center items-center space-y-20 pt-30'>
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />
      <div>
        {Object.values(providers).map(provider => (
          <div key={provider.name}>
              <button 
                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium tracking-tighter text-gray-800 hover:text-white bg-white rounded-lg group"
                onClick={() => signIn(provider.id, {callbackUrl : '/'})}
                >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative font-bold text-[1rem]">Sign in with {provider.name}</span>
              </button>


    
          </div>
        ))}
      </div>
    </div>
  )
}

export default Login