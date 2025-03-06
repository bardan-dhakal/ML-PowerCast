import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

const pjmStates = [
    "Delaware",
    "Illinois",
    "Indiana",
    "Kentucky",
    "Maryland",
    "Michigan",
    "New Jersey",
    "North Carolina",
    "Ohio",
    "Pennsylvania",
    "Tennessee",
    "Virginia",
    "West Virginia",
    "District of Columbia"
  ]

const USMap = () => {

    const handleRegionClick = (geo) => {
        if (pjmStates.includes(geo.properties.name)){
            console.log("Clicked PJM state")
        }
    }
    return (
<div style={{ width: "100%", height: "500px" }}>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#DDD"
                stroke="#FFF"
                style={{
                  default: { outline: "none" },
                  hover: { fill: isPJMState ? "#41ae76" : "#999", 
                    outline: "none" },
                  pressed: { outline: "none" }

                }}
                onClick = {() => handleRegionClick(geo)}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
    )
}

export default USMap