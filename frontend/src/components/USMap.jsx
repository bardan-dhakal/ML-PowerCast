import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { useState } from 'react'

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

const pjmStates = [
    "Delaware", "Illinois", "Indiana", "Kentucky", "Maryland", 
    "Michigan", "New Jersey", "North Carolina", "Ohio", 
    "Pennsylvania", "Tennessee", "Virginia", "West Virginia", 
    "District of Columbia"
]

const USMap = () => {
    const [isRegionSelected, setIsRegionSelected] = useState(false)
    
    const [showTooltip, setShowTooltip] = useState(false)

    const [CursorPosition, setCursorPosition] = useState({ x:0, y:0 })

    const track_cursor = (event) => {
        setCursorPosition({x: event.clientX, y: event.clientY})
    }



    const handleMouseEnter = (isPJMState) => {
        if (isPJMState) {
            setShowTooltip(true)
        }
    }
    
    const handleMouseLeave = () => {
        setShowTooltip(false)
    }

    const handleRegionClick = () => {
        setIsRegionSelected(!isRegionSelected)
        console.log("PJM Region clicked")
    }

    return (
        <div 
            style={{ width: "100%", height: "500px" }}
            onMouseMove={track_cursor} 
        >
            <ComposableMap projection="geoAlbersUsa">
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            const isPJMState = pjmStates.includes(geo.properties.name)
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={isPJMState ? 
                                        (isRegionSelected ? "#41ae76" : "#66c2a4") 
                                        : "#DDD"}
                                    stroke="#FFF"
                                    style={{
                                        default: { outline: "none" },
                                        hover: { 
                                            fill: isPJMState ? 
                                                (isRegionSelected ? "#41ae76" : "#66c2a4") 
                                                : "#999",
                                            outline: "none",
                                            cursor: isPJMState ? "pointer" : "default"
                                        },
                                        pressed: { outline: "none" }
                                    }}
                                    onClick={() => isPJMState && handleRegionClick()}
                                    onMouseEnter = {() => handleMouseEnter(isPJMState)}
                                    onMouseLeave = {handleMouseLeave}
                                />
                            )
                        })
                    }
                </Geographies>
            </ComposableMap>
            <div style={{ 
                position: "absolute", 
                bottom: "20px", 
                left: "20px", 
                padding: "10px", 
                background: "#fff", 
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
                <div>
                    <span style={{ 
                        display: "inline-block", 
                        width: "20px", 
                        height: "20px", 
                        backgroundColor: "#66c2a4", 
                        marginRight: "8px" 
                    }}></span>
                    PJM Interconnection Region
                </div>
            </div>
            {showTooltip && (
                <div style={{
                    position: "absolute",
                    left: `${CursorPosition.x + 10}px`,
                    top: `${CursorPosition.y - 10}px`,
                    //top: "20px",
                    // right: "20px",
                    padding: "10px",
                    background: "rgba(0, 0, 0, 0.8)",
                    color: "white",
                    borderRadius: "4px",
                }}>
                    PJM Interconnection Region Forecasts
                </div>
            )}
        </div>
    )
}

export default USMap