import { BiRightArrow } from "react-icons/bi";
import { SiAliexpress } from "react-icons/si";
import { SiWalmart } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { BiMap } from "react-icons/bi";
import Link from "next/link";

const Banner = () => {
    return (
        <section class="shadow-lg">
            <div class="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12">
                <p class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full bg-gray-800 text-white hover:bg-gray-700">
                    <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3 badge badge-info">New</span> <Link href={"/pcbuilder"} class="text-sm font-medium">Checkout our new pc builder tool</Link>
                    <span className="ml-2 "> <BiRightArrow /> </span>
                </p>
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Empower Your Journey with Our PCs!</h1>
                <p class="mb-8 text-lg font-norma lg:text-xl sm:px-16 xl:px-48 text-gray-400">Here we focus on unleashing progress through cutting-edge PCs, where technology and innovation fuel long-term growth and endless possibilities.</p>
                <div class="flex mb-8 lg:mb-16 space-y-4 items-center justify-center gap-4">
                    <a href="https://maps.google.com" target="_blank" class="btn btn-sm font-medium text-center rounded-lg border focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800 text-lg">
                        Physical Shop Location <BiMap className="animate-bounce text-green-500" />
                    </a>
                </div>
                <div class="text-center mx-auto md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    <span class="font-semibold text-gray-400 uppercase sm:text-lg text-md">WE ARE FEATURED IN</span>
                    <div class="flex justify-center items-center mt-4 text-gray-500 sm:justify-between gap-4">
                        <p class=" lg:mb-0 hover:text-gray-400 sm:text-9xl text-7xl text-orange-500">
                            <SiAliexpress />
                        </p>
                        <p class=" lg:mb-0 hover:text-gray-400 sm:text-5xl text-4xl text-yellow-500">
                            <SiAmazonaws />
                        </p>
                        <p class=" lg:mb-0 hover:text-gray-400 sm:text-9xl text-7xl text-green-600">
                            <SiWalmart />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;