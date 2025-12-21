import Link from "next/link";
import { Product, cards as products } from '@/constants/products';
import WishlistProducts from "@/components/wishlists/wishlistproducts";
import JustForYou from "@/components/cartComponents/justForYou";


function Wishlists () {
    return (
        <main className="w-full px-5 md:px-8 max-w-7xl md:flex md:flex-col mx-auto mt-12 dark:bg-gray-900 md:gap-8">
            <div className="flex justify-between items-center w-full">
                <h3 className="border-l-15 md:border-l-25 border-bgLemon p-2 px-2 md:text-2xl mb-2 font-medium">
                    Wishlist
                </h3>
                <Link
                    href='/cart'
                    className="bg-[#A1C249] hover:bg-[#8FAF3A] text-black font-semibold max-w-[190px] w-full px-10 py-4 rounded-[30px] transition duration-200 shadow-md hover:shadow-lg"   
                >
                    Move to Cart
                </Link>
            </div>
            <div className="flex justify-between items-center">
                {products && products.length > 0 ? (
                products.filter(product => product.id <= 4).map((product: Product) => (
                    <WishlistProducts
                        key={product.id}
                        image={product.image}
                        productName={product.name} 
                        price={product.price}
                        discount={product.discount}
                        rating={product.rating}
                        reviews={product.reviews}
                    />
                )) ) : (
                    <p className="col-span-full text-center text-gray-500">No products available</p>
                )}
            </div>
            <div>
                <JustForYou />
            </div>
        </main>
    )
}

export default Wishlists;