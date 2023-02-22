/* eslint-disable import/no-anonymous-default-export */
import './styles.css'

export default () => {
    return (
        <div className='loading-body'>
            <div className="wrapper">
            <div className="bubbleWrap">
                <div className="bubble"></div>
            </div>
            <div className="bubbleWrap">
                <div className="bubble"></div>
            </div>
            <div className="bubbleWrap">
                <div className="bubble"></div>
            </div>
            <div className="bubbleWrap">
                <div className="bubble"></div>
            </div>
            <div className="bubbleWrap">
                <div className="bubble"></div>
            </div>
            <div className="bubbleWrap">
                <div className="bubble"></div>
            </div>
            <div className="bubbleWrap">
                <div className="bubble"></div>
            </div>
            <div className="bubbleWrap">
                <div className="bubble"></div>
            </div>
            <div className="satWrap">
                <div className="sat"></div>
            </div>
            </div>
            <svg>
            <defs>
                <filter id="goo">
                <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                ></feGaussianBlur>
                <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                ></feColorMatrix>
                <feBlend in="SourceGraphic" in2="goo"></feBlend>
                </filter>
            </defs>
            </svg>
        </div>
    )
};
