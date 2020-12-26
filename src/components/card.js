import React from "react"
import { Link } from "gatsby"

const Card = ({ data }) => (
    <Link to={`/u/${data.slug}`} title={data.name}>
        <article className="card relative w-full h-full border border-indigo-700 bg-indigo-900">
            <div
                className="card__border absolute right-0 bottom-0 w-full h-full border border-indigo-700 transform translate-x-2 translate-y-2 transition duration-150 ease-in-out"
                style={{ zIndex: "-1" }}
            ></div>
            <header className="flex items-center py-3 px-4">
                <span className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-b from-purple-800 to-purple-600"></span>

                <div className="ml-4">
                    <h2 className="font-heading text-xl text-indigo-200 leading-none">
                        {data.name}
                    </h2>
                    <span className="text-sm font-mono text-indigo-500">
                        {data.location}
                    </span>
                </div>
            </header>
            <div className="font-mono">
                <span className="block py-1 px-4 w-full text-xs font-bold text-indigo-200 italic tracking-wide uppercase bg-gradient-to-r from-indigo-700 to-pink-600">
                    {data.type}
                </span>

                <p className="py-3 px-4 text-sm text-indigo-400 leading-relaxed">
                    {data.intro}
                </p>
            </div>
        </article>
    </Link>
)

export default Card
