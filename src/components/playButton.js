import React from "react"
import useSound from "use-sound"
import retroWave from "../sounds/retrowave.mp3"

const PlayButton = () => {
    const [play, { stop, isPlaying }] = useSound(retroWave)

    const handleClick = () => {
        isPlaying ? stop() : play()
    }

    return (
        <button
            className="fixed top-2 right-2 flex items-center justify-center w-12 h-12 text-white rounded-full opacity-50 hover:opacity-100 appearance-none focus:outline-none"
            onClick={handleClick}
        >
            {!isPlaying && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                >
                    <path fill="none" d="M0 0h256v256H0z" />
                    <path
                        d="M80 168H32a8 8 0 01-8-8V96a8 8 0 018-8h48l72-56v192zM240 104l-48 48M240 152l-48-48"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    />
                </svg>
            )}
            {isPlaying && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                >
                    <path fill="none" d="M0 0h256v256H0z" />
                    <path
                        d="M218.882 77.088a72 72 0 010 101.824M80 168H32a8 8 0 01-8-8V96a8 8 0 018-8h48l72-56v192zM80 88v80M190.598 105.373a32 32 0 010 45.254"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    />
                </svg>
            )}
        </button>
    )
}

export default PlayButton
