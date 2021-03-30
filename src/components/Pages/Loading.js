const Loading = () => {
    return (
        <div className='loading-container'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                style={{
                    margin: 'auto',
                    background: 'rgb(255, 255, 255) none repeat scroll 0% 0%',
                    display: 'block',
                    shapeRendering: 'auto',
                }}
                className='loading-animation'
                viewBox='0 0 100 100'
                preserveAspectRatio='xMidYMid'
            >
                <circle
                    cx='50'
                    cy='50'
                    r='0'
                    fill='none'
                    stroke='#000'
                    strokeWidth='2'
                >
                    <animate
                        attributeName='r'
                        repeatCount='indefinite'
                        dur='1.408450704225352s'
                        values='0;40'
                        keyTimes='0;1'
                        keySplines='0 0.2 0.8 1'
                        calcMode='spline'
                        begin='0s'
                    ></animate>
                    <animate
                        attributeName='opacity'
                        repeatCount='indefinite'
                        dur='1.408450704225352s'
                        values='1;0'
                        keyTimes='0;1'
                        keySplines='0.2 0 0.8 1'
                        calcMode='spline'
                        begin='0s'
                    ></animate>
                </circle>
                <circle
                    cx='50'
                    cy='50'
                    r='0'
                    fill='none'
                    stroke='#ba4120'
                    strokeWidth='2'
                >
                    <animate
                        attributeName='r'
                        repeatCount='indefinite'
                        dur='1.408450704225352s'
                        values='0;40'
                        keyTimes='0;1'
                        keySplines='0 0.2 0.8 1'
                        calcMode='spline'
                        begin='-0.704225352112676s'
                    ></animate>
                    <animate
                        attributeName='opacity'
                        repeatCount='indefinite'
                        dur='1.408450704225352s'
                        values='1;0'
                        keyTimes='0;1'
                        keySplines='0.2 0 0.8 1'
                        calcMode='spline'
                        begin='-0.704225352112676s'
                    ></animate>
                </circle>
            </svg>
        </div>
    );
};

export default Loading;
