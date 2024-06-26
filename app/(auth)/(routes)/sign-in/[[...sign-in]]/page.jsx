import { SignIn } from "@clerk/nextjs";
import Image from 'next/image'
export default function Page() {
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center justify-center p-6 space-y-4 md:space-y-6 sm:p-8">
                <Image src="/logo.svg" width={80} height={50}/>
                 FileShare
                <SignIn />
            </div>
        </div>
    </div>
  </section>
  );
}