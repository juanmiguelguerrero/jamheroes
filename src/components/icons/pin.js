import React from "react"

const Pin = () => (
    <svg
        className="mr-2"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 256 256"
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <circle
            cx="128"
            cy="104"
            r="32"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
        />
        <path
            d="M208 104c0 72-80 128-80 128s-80-56-80-128a80 80 0 01160 0z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
        />
    </svg>
)

export default Pin
