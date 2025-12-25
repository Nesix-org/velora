import JustForYou from "@/components/cartComponents/justForYou";
import { wishlistProduct } from "@/constants/products";
import Image from "next/image";
import storeLogo from '@/public/assets/wishlistproduct/store logo.png'

const sizes: string[] = ["xs", "s", "m", "l", "x" ]

function WishlistProduct () {
    return (
        <main className="w-full px-5 md:px-8 max-w-7xl mx-auto mt-12 dark:bg-gray-900">
            <section className="flex justify-between">
                <div className="flex">
                    {wishlistProduct.map(product => (
                        <div key={product.id} className="flex justify-between gap-12">
                            <div className="flex justify-between gap-4 flex-1">
                                <div className="flex flex-col gap-2">
                                    {Array.from({length: 4}, (_,i) => (
                                        <Image 
                                            key={i} 
                                            src={product.macroImage}
                                            alt={product.name}
                                            width={140}
                                            height={140}
                                        />
                                    ))}
                                </div>
                                <div className="relative">
                                    <Image 
                                        src={product.miniImage}
                                        alt={product.name}
                                        className="object-cover"
                                        width={400}
                                        // height={140}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-semibold tracking-wider text-xl">{product.name}</h3>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-[0.6]">
                                            {Array.from({length: product.rating}, (_,i) => (
                                                <div key={i} className="">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.2561 7.47424C16.4275 6.58821 15.8009 4.72108 14.3322 4.72108H11.6746C11.003 4.72108 10.4097 4.28351 10.2113 3.64185L9.41909 1.07932C8.97421 -0.359661 6.93738 -0.359661 6.49251 1.07932L5.70028 3.64185C5.5019 4.28351 4.90862 4.72108 4.23699 4.72108H1.53349C0.0694845 4.72108 -0.560122 6.57824 0.602051 7.46856L2.91751 9.24238C3.42531 9.63139 3.63787 10.295 3.45059 10.9066L2.60929 13.6543C2.173 15.0793 3.82224 16.2249 5.00524 15.3186L7.02436 13.7718C7.57395 13.3508 8.33764 13.3508 8.88723 13.7718L10.8885 15.3049C12.0732 16.2125 13.724 15.0625 13.2832 13.6367L12.4303 10.8777C12.2399 10.2618 12.4555 9.59265 12.9696 9.20376L15.2561 7.47424Z" fill="#FFAD33"/>
                                                    </svg>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-[15px] opacity-50 text-black">({product.review} Reviews)</p>
                                        <div className="bg-black w-[0.7] h-4"></div>
                                        <p className="text-[15px] opacity-50 text-[#A1C249]">In Stock</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-2xl font-semibold tracking-tighetest">${product.price.toFixed(2)}</h4>
                                        <p className="text-sm">{product.description}</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-4 border-b pb-6"> 
                                        <div className="flex items-start gap-4">
                                            <div className="flex items-center gap-2">
                                                <Image src={storeLogo} alt="store-logo" />
                                                <div>
                                                    <h2 className="text-[13px] font-semibold">{product.store}</h2>
                                                    <p className="text-[10px] font-semibold text-[#A1A1A1]">Official Store</p>
                                                </div>
                                            </div>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.21231 10.0724L6.86531 8.72995C6.79531 8.65995 6.71006 8.62245 6.60956 8.61745C6.50856 8.61245 6.41681 8.65145 6.33431 8.73445C6.25431 8.81445 6.21431 8.90295 6.21431 8.99995C6.21431 9.09695 6.25431 9.18545 6.33431 9.26545L7.78781 10.7189C7.90931 10.8399 8.05081 10.9004 8.21231 10.9004C8.37381 10.9004 8.51531 10.8399 8.63681 10.7189L11.6653 7.69045C11.7383 7.61745 11.7766 7.53145 11.7801 7.43245C11.7836 7.33295 11.7453 7.24195 11.6653 7.15945C11.5828 7.07695 11.4936 7.03495 11.3976 7.03345C11.3016 7.03195 11.2126 7.07245 11.1306 7.15495L8.21231 10.0724ZM6.50231 15.462L5.51531 13.8119L3.65456 13.419C3.50556 13.3914 3.38681 13.3115 3.29831 13.179C3.20981 13.047 3.17331 12.9065 3.18881 12.7575L3.36656 10.8405L2.10431 9.40045C1.99831 9.29195 1.94531 9.15845 1.94531 8.99995C1.94531 8.84145 1.99831 8.70795 2.10431 8.59945L3.36656 7.15945L3.18881 5.2432C3.17381 5.0937 3.21031 4.95295 3.29831 4.82095C3.38681 4.68895 3.50556 4.60895 3.65456 4.58095L5.51456 4.1887L6.50156 2.5387C6.58256 2.4047 6.69131 2.3122 6.82781 2.2612C6.96431 2.2097 7.10556 2.21645 7.25156 2.28145L8.99981 3.0202L10.7473 2.28145C10.8938 2.21645 11.0353 2.2097 11.1718 2.2612C11.3083 2.3122 11.4171 2.4047 11.4981 2.5387L12.4843 4.1887L14.3451 4.58095C14.4941 4.60895 14.6128 4.68895 14.7013 4.82095C14.7898 4.95295 14.8263 5.0937 14.8108 5.2432L14.6338 7.15945L15.8953 8.59945C16.0013 8.70795 16.0543 8.84145 16.0543 8.99995C16.0543 9.15845 16.0013 9.2922 15.8953 9.4012L14.6338 10.8405L14.8108 12.7567C14.8258 12.9062 14.7893 13.047 14.7013 13.179C14.6128 13.3115 14.4941 13.3914 14.3451 13.419L12.4851 13.8119L11.4981 15.462C11.4171 15.5954 11.3083 15.688 11.1718 15.7395C11.0353 15.791 10.8941 15.784 10.7481 15.7185L8.99981 14.9797L7.25231 15.7185C7.10581 15.7835 6.96431 15.7902 6.82781 15.7387C6.69131 15.6877 6.58256 15.5952 6.50156 15.4612" fill="black"/>
                                            </svg>
                                        </div>
                                        <button className="flex items-center gap-2 max-w-[109px] w-full bg-black text-white rounded-[30px] justify-center py-2">
                                            <span>
                                                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.896 4.30488C9.13065 4.85921 9.25105 5.45518 9.25 6.05713C9.25 8.54238 7.23525 10.5571 4.75 10.5571C2.26475 10.5571 0.25 8.54238 0.25 6.05713C0.25 3.57188 2.26475 1.55713 4.75 1.55713C5.56675 1.55713 6.3325 1.77463 6.99275 2.15513" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M9.51972 0.25L4.75122 7.1405L2.16797 4.6405V5.86975L4.84497 8.49475L9.51972 1.7135V0.25Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </span>
                                            <span>Following</span>
                                        </button>
                                    </div>
                                    <div className="mt-2 flex flex-col gap-5">
                                        <div className="flex gap-6 items-center">
                                            <p>Colors:</p>
                                            <div className="flex gap-2">
                                                <div className="w-4 h-4 bg-blue-700 rounded-full"></div>
                                                <div className="w-4 h-4 bg-bgLemon rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="flex gap-6 items-center">
                                            <p>Size:</p>
                                            <div className="flex gap-4">
                                                {sizes.map(size => (
                                                    <button key={size} className="border cursor-pointer hover:bg-bgLemon px-2 py-1 rounded-sm transition-colors duration-300">
                                                        {size.toUpperCase()}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mt-8">
                <JustForYou />
            </section>
        </main>
    )
}


export default WishlistProduct;