import React from 'react';

const USEnergyMap = () => {
  const energyRegions = [
    {
      id: 'caiso',
      name: 'CAISO',
      fullName: 'California Independent System Operator',
      color: 'hsl(var(--primary))',
      path: 'M158 300L158 250L120 250L120 200L100 200L100 170L80 170L80 140L60 140L60 180L40 180L40 220L20 220L20 280L40 280L40 320L80 320L80 340L120 340L120 320L158 320Z'
    },
    {
      id: 'ercot',
      name: 'ERCOT',
      fullName: 'Electric Reliability Council of Texas',
      color: 'hsl(var(--accent))',
      path: 'M300 380L300 340L280 340L280 320L260 320L260 300L240 300L240 280L220 280L220 260L200 260L200 240L180 240L180 220L200 220L200 200L240 200L240 220L280 220L280 240L320 240L320 260L360 260L360 300L380 300L380 340L400 340L400 380L380 380L380 400L360 400L360 420L340 420L340 440L320 440L320 460L300 460Z'
    },
    {
      id: 'pjm',
      name: 'PJM',
      fullName: 'PJM Interconnection',
      color: 'hsl(var(--energy-warning))',
      path: 'M600 200L600 180L580 180L580 160L560 160L560 140L540 140L540 120L520 120L520 100L500 100L500 80L480 80L480 60L460 60L460 80L440 80L440 100L420 100L420 120L400 120L400 140L420 140L420 160L440 160L440 180L460 180L460 200L480 200L480 220L500 220L500 240L520 240L520 260L540 260L540 280L560 280L560 300L580 300L580 320L600 320L600 340L620 340L620 360L640 360L640 340L660 340L660 320L680 320L680 300L700 300L700 280L720 280L720 260L740 260L740 240L720 240L720 220L700 220L700 200L680 200L680 180L660 180L660 160L640 160L640 140L620 140L620 120L600 120Z'
    },
    {
      id: 'miso',
      name: 'MISO',
      fullName: 'Midcontinent Independent System Operator',
      color: 'hsl(var(--energy-success))',
      path: 'M400 200L400 180L380 180L380 160L360 160L360 140L340 140L340 120L320 120L320 100L300 100L300 80L280 80L280 60L260 60L260 40L280 40L280 20L320 20L320 40L360 40L360 60L400 60L400 80L440 80L440 100L480 100L480 120L520 120L520 140L540 140L540 160L560 160L560 180L580 180L580 200L560 200L560 220L540 220L540 240L520 240L520 260L500 260L500 280L480 280L480 300L460 300L460 320L440 320L440 340L420 340L420 320L400 320Z'
    },
    {
      id: 'spp',
      name: 'SPP',
      fullName: 'Southwest Power Pool',
      color: 'hsl(160 50% 50%)',
      path: 'M300 240L300 220L280 220L280 200L260 200L260 180L240 180L240 160L220 160L220 140L200 140L200 120L180 120L180 100L200 100L200 80L240 80L240 100L280 100L280 120L320 120L320 140L360 140L360 160L380 160L380 180L400 180L400 200L380 200L380 220L360 220L360 240L340 240L340 260L320 260L320 280L300 280Z'
    },
    {
      id: 'nyiso',
      name: 'NYISO',
      fullName: 'New York Independent System Operator',
      color: 'hsl(280 60% 50%)',
      path: 'M720 120L720 100L700 100L700 80L680 80L680 60L660 60L660 40L680 40L680 20L720 20L720 40L760 40L760 60L780 60L780 80L800 80L800 100L820 100L820 120L800 120L800 140L780 140L780 160L760 160L760 180L740 180L740 160L720 160Z'
    },
    {
      id: 'isone',
      name: 'ISO-NE',
      fullName: 'ISO New England',
      color: 'hsl(320 60% 50%)',
      path: 'M820 100L820 80L800 80L800 60L820 60L820 40L840 40L840 20L880 20L880 40L900 40L900 60L920 60L920 80L940 80L940 100L920 100L920 120L900 120L900 140L880 140L880 160L860 160L860 140L840 140L840 120L820 120Z'
    }
  ];

  // Pre-calculate label positions
  const getLabelPosition = (regionId) => {
    const positions = {
      caiso: { x: 120, y: 260 },
      ercot: { x: 300, y: 340 },
      pjm: { x: 600, y: 200 },
      miso: { x: 400, y: 180 },
      spp: { x: 280, y: 180 },
      nyiso: { x: 760, y: 100 },
      isone: { x: 880, y: 100 }
    };
    return positions[regionId] || { x: 0, y: 0 };
  };

  return (
    <div className="relative bg-gradient-map rounded-xl p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
          Energy Market Regions
        </h2>
        <p className="text-muted-foreground">
          Major energy markets across the United States
        </p>
      </div>

      {/* Map Container */}
      <div className="relative w-full max-w-5xl mx-auto bg-card rounded-lg shadow-elevated overflow-hidden">
        <svg
          viewBox="0 0 1000 600"
          className="w-full h-auto"
          style={{ background: 'linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted)))' }}
        >
          {/* US Map Outline - Simplified */}
          <path
            d="M100 150C100 100, 150 80, 200 80L800 80C850 80, 900 100, 900 150L900 400C900 450, 850 470, 800 470L200 470C150 470, 100 450, 100 400Z"
            fill="hsl(var(--energy-grid))"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            opacity="0.3"
          />

          {/* Energy Regions */}
          {energyRegions.map((region) => {
            const labelPos = getLabelPosition(region.id);
            
            return (
              <g key={region.id}>
                <path
                  d={region.path}
                  fill={`${region.color}80`}
                  stroke="hsl(var(--border))"
                  strokeWidth="1.5"
                />
                
                {/* Region Label */}
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  className="font-semibold text-sm fill-muted-foreground"
                >
                  {region.name}
                </text>
              </g>
            );
          })}

          {/* Grid Lines */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {energyRegions.map((region) => (
          <div
            key={region.id}
            className="flex items-center gap-2 px-3 py-2 bg-card rounded-md border"
          >
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: region.color }}
            />
            <span className="text-sm font-medium">{region.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default USEnergyMap;