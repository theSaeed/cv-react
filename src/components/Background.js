const Background = () => {    
    return (
        <div className="bg">
            <div id="bg-color-1"></div>
            <div id="bg-color-2"></div>
            <svg className="blobCont" style={{opacity: "var(--opc-bg)"}}>
                {/* <image xlink:href="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-0.3.5&s=e20bc3d490c974d9ea190e05c47962f5&auto=format&fit=crop&w=634&q=80"
                mask="url(#mask)" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" /> */}
                <linearGradient id="MyGradient" gradientTransform="rotate(45)">
                    <stop offset="0%"  stop-color="var(--clr-2)"/>
                    <stop offset="100%" stop-color="var(--clr-1)"/>
                </linearGradient>
                <defs>
                    <filter id="gooey" height="130%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    </filter>
                </defs>
                <mask id="mask" x="0" y="0">
                    <g style={{filter: 'url(#gooey)'}}>
                        <circle className="blob" cx="10%" cy="10%" r="80" fill="white" stroke="white"/>
                        <circle className="blob" cx="50%" cy="10%" r="40" fill="white" stroke="white"/>
                        <circle className="blob" cx="17%" cy="15%" r="70" fill="white" stroke="white"/>
                        <circle className="blob" cx="90%" cy="20%" r="120" fill="white" stroke="white"/>
                        <circle className="blob" cx="30%" cy="25%" r="30" fill="white" stroke="white"/>
                        <circle className="blob" cx="50%" cy="60%" r="80" fill="white" stroke="white"/>
                        <circle className="blob" cx="70%" cy="90%" r="10" fill="white" stroke="white"/>
                        <circle className="blob" cx="90%" cy="60%" r="90" fill="white" stroke="white"/>
                        <circle className="blob" cx="30%" cy="90%" r="80" fill="white" stroke="white"/>
                        <circle className="blob" cx="10%" cy="10%" r="80" fill="white" stroke="white"/>
                        <circle className="blob" cx="50%" cy="10%" r="20" fill="white" stroke="white"/>
                        <circle className="blob" cx="17%" cy="15%" r="70" fill="white" stroke="white"/>
                        <circle className="blob" cx="40%" cy="20%" r="120" fill="white" stroke="white"/>
                        <circle className="blob" cx="30%" cy="25%" r="30" fill="white" stroke="white"/>
                        <circle className="blob" cx="80%" cy="60%" r="80" fill="white" stroke="white"/>
                        <circle className="blob" cx="17%" cy="10%" r="100" fill="white" stroke="white"/>
                        <circle className="blob" cx="40%" cy="60%" r="90" fill="white" stroke="white"/>
                        <circle className="blob" cx="10%" cy="50%" r="80" fill="white" stroke="white"/>
                        <circle id="static-blob-bottom" cx="50%" r="300vw" fill="white" stroke="white"/>
                        <circle id="static-blob-up"     cx="50%" r="300vw" fill="white" stroke="white"/>
                    </g>
                </mask>
                <rect x="0" y="0"  mask="url(#mask)" fill="url(#MyGradient)" width="100%" height="100%"/>
            </svg>
        </div>
    )
}

export default Background