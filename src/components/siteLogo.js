import React from "react"
import { Link } from "gatsby"

const Logo = () => (
    <div className="flex justify-center mb-20">
        <Link className="z-10 site-logo relative" to="/" title="Jam Heroes">
            <span className="triangle relative block bg-white transform skew-x-6 skew-y-6"></span>
            <span className="text-1 absolute top-2 left-0 right-0 flex justify-center font-sans text-8xl font-black text-indigo-900 uppercase">
                jam
            </span>
            <span className="text-2 absolute left-0 right-0 bottom-10 flex justify-center font-heading text-8xl text-pink-600 underline transform -rotate-6 -skew-x-6 -skew-y-6">
                Heroes
            </span>
        </Link>
    </div>
)

export default Logo
