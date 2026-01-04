'use client'

import { useState } from "react"
import { CheckIcon } from "lucide-react"

import banks from '@/public/assets/bank/Frame 834.png'
import Image from "next/image"
import CardDetails from "./card-details"



function BankDetails() {
    const [isChecked, setIsChecked] = useState(false)
    const [isCash, setIsCash] = useState(false)


    return (
        <section className="">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <input
                            type='checkbox'
                            checked={isChecked}
                            onChange={() => setIsChecked(prev => !prev)}
                            className={`appearance-none border p-2 rounded text-sm text-checkoutGray ${isChecked ? 'bg-checkbox' : ''}`}
                            // {...register('checkbox')}
                        />
                        {isChecked && (
                            <CheckIcon className="absolute top-0.5 right-0.5  m-auto size-4 text-white pointer-events-none" />
                        )}
                    </div>
                    <label htmlFor='checkbox' className="">
                        <span className="text-sm text-black">Bank</span>
                    </label>
                </div>
                <div>
                    <Image src={banks} alt="banksIcon" width={120} height={80} />
                </div>
            </div>
            { isChecked && 
                <CardDetails />
            }
            <div className="flex items-center gap-2 mt-2">
                <div className="relative">
                    <input
                        type='checkbox'
                        checked={isCash}
                        onChange={() => setIsCash(prev => !prev)}
                        className={`appearance-none border p-2 rounded text-sm text-checkoutGray ${isCash ? 'bg-checkbox' : ''}`}
                        // {...register('checkbox')}
                    />
                    {isCash && (
                        <CheckIcon className="absolute top-0.5 right-0.5  m-auto size-4 text-white pointer-events-none" />
                    )}
                </div>
                <label htmlFor='cash' className="">
                    <span className="text-sm text-black">Cash on Delivery</span>
                </label>
            </div>
            <div className="flex items-center mt-4 gap-4 md:gap-6 md:justify-between">
                <div className="flex-1">
                    <input
                        type='text'
                        placeholder="XHTYS"
                        className={`max-w-[279px] md:w-full border py-2 md:py-4 px-2 rounded text-sm text-checkoutGray`}
                        // {...register('checkbox')}
                    />
                </div>
                <div className="flex-1">
                    <button className="bg-bgLemon text-sm max-w-[231px] w-full py-2 md:py-4 rounded-[30px] font-bold md:text-lg cursor-pointer">
                        Apply Coupon
                    </button>
                </div>
            </div>
            <div className="flex-1 mt-6 max-w-[321px] mx-auto">
                <button className="bg-bgLemon w-full py-4 rounded-[30px] font-bold text-lg cursor-pointer">
                    Proceed to payment
                </button>
            </div>
        </section>
    )
}

export default BankDetails