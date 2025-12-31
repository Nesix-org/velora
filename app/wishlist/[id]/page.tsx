import JustForYou from "@/components/cartComponents/justForYou";
import { wishlistProduct } from "@/constants/products";
import Image from "next/image";
import storeLogo from '@/public/assets/wishlistproduct/store logo.png'
import heartIcon from "../../../public/assets/icons/heart.svg";

const sizes: string[] = ["xs", "s", "m", "l", "x" ]

function WishlistProduct () {
    return (
        <main className="w-full px-5 md:px-8 max-w-7xl mx-auto mt-12 dark:bg-gray-900">
            <section className="flex">
                <div className="flex">
                    {wishlistProduct.map(product => (
                        <div key={product.id} className="flex flex-col md:flex-row md:justify-between justify-between gap-12">
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
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex flex-row items-center justify-center gap-2 bg-gray-300 py-2 px-2 rounded-sm">
                                            <button
                                                // onClick={() => handleDecrement(item.id, item.quantity)}
                                                // disabled={item.quantity === 1}
                                                aria-label="Decrease quantity"
                                                className="px-3 py-1 bg-white text-xl rounded-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                            >
                                            -
                                            </button>
                                            <input
                                                type="number"
                                                value='1'
                                                min="1"
                                                max="99"
                                                aria-label="Quantity"
                                                className="w-12 text-center py-1 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                // onChange={(e) => {
                                                //     const newQuantity = parseInt(e.target.value);
                                                //     if (newQuantity > 0 && newQuantity <= 99 && !isNaN(newQuantity)) {
                                                //         updateQuantity(item.id, newQuantity);
                                                //     }
                                                // }}
                                            />
                                            <button
                                                // onClick={() => handleIncrement(item.id, item.quantity)}
                                                // disabled={item.quantity >= 99}
                                                aria-label="Increase quantity"
                                                className="px-3 py-1 text-xl bg-white rounded-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between gap-6">
                                            <button className="max-w-[154px] w-full rounded-[30px] bg-bgLemon px-4 py-3 flex items-center gap-2 cursor-pointer hover:bg-bgLemon/70 transition-colors duration-300">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.2048 14.97C19.6678 17.657 19.3988 19 18.5118 19.865C18.3471 20.025 18.1705 20.1697 17.9818 20.299C16.9588 21 15.5888 21 12.8488 21H11.1488C8.40879 21 7.03979 21 6.01779 20.3C5.829 20.1704 5.65168 20.0249 5.48779 19.865C4.59879 19 4.32879 17.657 3.79179 14.97C3.02079 11.114 2.63479 9.186 3.52279 7.82C3.68368 7.57236 3.87149 7.3433 4.08279 7.137C5.24879 6 7.21379 6 11.1468 6H12.8498C16.7818 6 18.7478 6 19.9138 7.138C20.1248 7.34435 20.3122 7.57341 20.4728 7.821C20.9838 8.607 21.0728 9.581 20.9088 11" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                                    <path d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z" fill="black"/>
                                                    <path d="M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z" fill="black"/>
                                                    <path d="M9 6V5C9 4.20435 9.31607 3.44129 9.87868 2.87868C10.4413 2.31607 11.2044 2 12 2C12.7956 2 13.5587 2.31607 14.1213 2.87868C14.6839 3.44129 15 4.20435 15 5V6" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                                </svg>
                                                <span className="font-bold text-[16px]">Add to Cart</span>
                                            </button>
                                            <button className="w-[43px] h-[43px] rounded-[5px] border border-black/50 flex justify-center items-center cursor-pointer">
                                                <Image src={heartIcon} alt="wishlist" className="w-7 h-7"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="border border-black/50 px-4 py-6 rounded-sm flex flex-col gap-4 mt-6">
                                        {/* free delivery */}
                                        <div className="flex items-center gap-2">
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1070_5484)">
                                                <path d="M12.7639 34.644C14.7779 34.644 16.4106 33.0113 16.4106 30.9973C16.4106 28.9833 14.7779 27.3506 12.7639 27.3506C10.7499 27.3506 9.11719 28.9833 9.11719 30.9973C9.11719 33.0113 10.7499 34.644 12.7639 34.644Z" stroke="black" stroke-width="2.18803" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M30.9983 34.644C33.0123 34.644 34.645 33.0113 34.645 30.9973C34.645 28.9833 33.0123 27.3506 30.9983 27.3506C28.9843 27.3506 27.3516 28.9833 27.3516 30.9973C27.3516 33.0113 28.9843 34.644 30.9983 34.644Z" stroke="black" stroke-width="2.18803" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M9.11852 30.9975H7.65984C6.45142 30.9975 5.4718 30.0179 5.4718 28.8095V23.7041M3.64844 9.11719H21.5174C22.7258 9.11719 23.7054 10.0968 23.7054 11.3052V30.9975M16.412 30.9975H27.3521M34.6456 30.9975H36.1043C37.3127 30.9975 38.2923 30.0179 38.2923 28.8095V20.0574M38.2923 20.0574H23.7054M38.2923 20.0574L33.4596 12.0028C33.0642 11.3438 32.352 10.9405 31.5834 10.9405H23.7054" stroke="black" stroke-width="2.18803" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M8.75134 30.6323H7.29265C6.08423 30.6323 5.10461 29.6527 5.10461 28.4443V23.3388M3.28125 8.75195H21.1502C22.3586 8.75195 23.3382 9.73157 23.3382 10.94V30.6323M16.4095 30.6323H26.985M35.0077 30.6323H35.7371C36.9455 30.6323 37.9251 29.6527 37.9251 28.4443V19.6921M37.9251 19.6921H23.3382M37.9251 19.6921L33.0924 11.6376C32.697 10.9786 31.9848 10.5753 31.2162 10.5753H23.3382" stroke="black" stroke-width="2.18803" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M5.46875 12.9292H12.7622" stroke="black" stroke-width="2.18803" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M1.98828 16.9077H9.28173" stroke="black" stroke-width="2.18803" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M5.46875 20.8857H12.7622" stroke="black" stroke-width="2.18803" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1070_5484">
                                                <rect width="43.7607" height="43.7607" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                            <div className="flex flex-col gap-1">
                                                <h3 className="font-semibold text-sm">Free Delivery</h3>
                                                <p className="underline text-sm font-medium">Enter your postal code for Delivery Availability</p>
                                            </div>
                                        </div>
                                        {/* return delivery  */}
                                        <div className="flex items-center gap-2 border-t border-t-black/50 pt-2">
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1070_5489)">
                                                <path d="M36.4668 20.0571C36.0208 16.8484 34.5323 13.8753 32.2304 11.5958C29.9286 9.31627 26.9411 7.85683 23.7282 7.44226C20.5152 7.02769 17.2551 7.68099 14.45 9.30153C11.6449 10.9221 9.45046 13.4199 8.20465 16.4104M7.29297 9.11692V16.4104H14.5864" stroke="black" stroke-width="2.18803" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M7.29297 23.7036C7.73889 26.9123 9.22743 29.8854 11.5293 32.1649C13.8312 34.4444 16.8187 35.9039 20.0316 36.3184C23.2445 36.733 26.5046 36.0797 29.3097 34.4592C32.1148 32.8386 34.3093 30.3408 35.5551 27.3503M36.4668 34.6438V27.3503H29.1733" stroke="black" stroke-width="2.18803" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1070_5489">
                                                <rect width="43.7607" height="43.7607" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                            <div className="flex flex-col gap-1">
                                                <h3 className="font-semibold text-sm">Return Delivery</h3>
                                                <p className="text-sm font-medium">Free 30 Days Delivery Returns. Details</p>
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