import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Courses = ({ data }) => {
    const urlDomain = url => {
        if (typeof document !== "undefined") {
            let a = document.createElement("a")
            a.href = url

            return a.hostname
        }
    }

    return (
        <Layout>
            <SEO title="Courses" />
            <div className="mx-auto px-6 max-w-3xl">
                <div className="pt-8 mb-10">
                    <h1 className="page-title font-heading text-6xl text-white">
                        <span>Courses</span>
                    </h1>
                </div>
                <div className="page-content pb-20 text-lg text-purple-200 leading-loose">
                    <p className="mb-10">
                        A list of hand-picked JAMstack learning materials.
                    </p>

                    {data.allAirtableCourse.group.map(cat => (
                        <div className="mb-8">
                            <h2 className="mb-2 font-bold text-white capitalize italic">
                                {cat.fieldValue}
                            </h2>
                            <ul className="border border-indigo-700">
                                {cat.nodes.map(course => (
                                    <li
                                        className="text-base border-b last:border-b-0 border-indigo-700"
                                        key={course.id}
                                    >
                                        <a
                                            className="block p-4"
                                            href={course.data.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={course.data.name}
                                        >
                                            <h2 className="mb-2 text-white leading-none">
                                                {course.data.name}
                                            </h2>
                                            <span className="block text-purple-400 leading-none">
                                                {urlDomain(course.data.url)}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Courses

export const query = graphql`
    query CoursesPageQuery {
        allAirtableCourse(sort: { fields: data___created_at, order: DESC }) {
            group(field: data___category) {
                fieldValue
                nodes {
                    data {
                        name
                        url
                    }
                }
            }
        }
    }
`
