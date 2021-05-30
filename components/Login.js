import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
    return (
        <div className="grid place-items-center">
            <Image 
                src="/images/chatbooks_full.png"
                width={400}
                height={400}
                objectFit="contain"
            
            />
            <h1 
            onClick={signIn}
            className="cursor-pointer p-4 bg-green-400 rounded-full text-white text-center">Login with your credentials</h1>
        </div>
    )
}

export default Login
