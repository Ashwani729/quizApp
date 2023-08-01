import { Button } from "@tremor/react"
import Link from "next/link"

const CTASection = () => {
    return (
        <div className="w-full px-8 py-5 bg-blue-600 md:py-10">
            <div className="py-10 md:py-20 max-w-[1200px] mx-auto w-full flex items-center flex-col">
                <p className="mb-4 text-center text-[24px] md:text-[40px] text-white">Unlock Financial Freedom with Expensasaurus</p>
                <p className="mb-6 text-center text-[18px] md:text-[24px] max-w-[90%] md:max-w-[80%] text-white">Start managing your budget effectively with expensasaurus.<br /> Sign up today and gain control over your financial future.</p>
                <Link href="/save">
          <button className="flex py-4 mx-auto font-semibold text-blue-600 bg-white rounded-md px-14 hover:bg-slate-50">Start the quiz</button>
        </Link>
            </div>

        </div>
    )
}

export default CTASection