import React from 'react'
import '../App.css'
function Network() {
    return (
        <div className="network">
            <div className="subnet">
                <div className="hosts">
                    <div className="ip">
                        <div className="host1">
                            M1
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="ip">
                        <div className="host1">
                            M2
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="ip">
                        <div className="host1">
                            M3
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="Router">
                    Router 1
                </div>
            </div>
            <div className="lineh"></div>
            <div className="subnet">
                <div className="hosts">
                    <div className="ip">
                        <div className="host2">
                            M4
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="ip">
                        <div className="host2">
                            M5
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="ip">
                        <div className="host2">
                            M6
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="Router">
                    Router 2
                </div>
            </div>
            <div className="lineh"></div>
            <div className="subnet">
                <div className="hosts">
                    <div className="ip">
                        <div className="host3">
                            M7
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="ip">
                        <div className="host3">
                            M8
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="ip">
                        <div className="host3">
                            M9
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="Router">
                    Router 3
                </div>
            </div>
        </div>
    )
}

export default Network
