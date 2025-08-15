import React from 'react'

const Spinner = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            width="200"
            height="200"
            style={{
                shapeRendering: "auto",
                display: "block",
                background: "transparent"
            }}
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g transform="translate(80,50)">
                <g transform="rotate(0)">
                    <circle fill="#72c6ff" fillOpacity="1" r="6" cx="0" cy="0">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.875s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fill-opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.875s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            </g>

            <g transform="translate(71.21320343559643,71.21320343559643)">
                <g transform="rotate(45)">
                    <circle fill="#72c6ff" fillOpacity="0.875" r="6" cx="0" cy="0">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.75s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fill-opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.75s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            </g>

            <g transform="translate(50,80)">
                <g transform="rotate(90)">
                    <circle fill="#72c6ff" fillOpacity="0.75" r="6" cx="0" cy="0">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.625s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fill-opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.625s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            </g>

            <g transform="translate(28.786796564403577,71.21320343559643)">
                <g transform="rotate(135)">
                    <circle fill="#72c6ff" fillOpacity="0.625" r="6" cx="0" cy="0">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.5s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fill-opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.5s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            </g>

            <g transform="translate(20,50.00000000000001)">
                <g transform="rotate(180)">
                    <circle fill="#72c6ff" fillOpacity="0.5" r="6" cx="0" cy="0">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.375s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fill-opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.375s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            </g>

            <g transform="translate(28.78679656440357,28.786796564403577)">
                <g transform="rotate(225)">
                    <circle fill="#72c6ff" fillOpacity="0.375" r="6" cx="0" cy="0">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.25s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fill-opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.25s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            </g>

            <g transform="translate(49.99999999999999,20)">
                <g transform="rotate(270)">
                    <circle fill="#72c6ff" fillOpacity="0.25" r="6" cx="0" cy="0">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.125s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fill-opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.125s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            </g>

            <g transform="translate(71.21320343559643,28.78679656440357)">
                <g transform="rotate(315)">
                    <circle fill="#72c6ff" fillOpacity="0.125" r="6" cx="0" cy="0">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fill-opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            </g>
        </svg>
    )
}
export default Spinner
