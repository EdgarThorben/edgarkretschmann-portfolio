interface RadarPoint {
  label: string;
  value: number; // 0–100
}

interface RadarChartProps {
  points: RadarPoint[];
  size?: number;
  fillColor?: string;
  strokeColor?: string;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function polygonPoints(n: number, cx: number, cy: number, r: number): string {
  return Array.from({ length: n }, (_, i) => {
    const { x, y } = polarToCartesian(cx, cy, r, (360 / n) * i);
    return `${x},${y}`;
  }).join(" ");
}

function wrapLabel(text: string, maxLen = 10): string[] {
  if (text.length <= maxLen) return [text];
  const mid = text.lastIndexOf(" ", maxLen);
  if (mid === -1) return [text.slice(0, maxLen), text.slice(maxLen)];
  return [text.slice(0, mid), text.slice(mid + 1)];
}

export function RadarChart({
  points,
  size = 200,
  fillColor = "rgba(191,242,218,0.55)",
  strokeColor = "#7AC4B7",
}: RadarChartProps) {
  const n = points.length;
  if (n < 3) return null;

  // Coordinate space is larger than display size so labels don't clip
  const PAD = 44;
  const vb = size + 2 * PAD;
  const cx = vb / 2;
  const cy = vb / 2;
  const maxR = size * 0.34;
  const labelR = maxR + 22;
  const levels = 4;

  const dataPolygon = points
    .map((p, i) => {
      const { x, y } = polarToCartesian(cx, cy, maxR * (p.value / 100), (360 / n) * i);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${vb} ${vb}`}
      aria-label="Skill set radar chart"
    >
      {/* Grid rings */}
      {Array.from({ length: levels }, (_, lvl) => (
        <polygon
          key={lvl}
          points={polygonPoints(n, cx, cy, maxR * ((lvl + 1) / levels))}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      ))}

      {/* Axis spokes */}
      {points.map((_, i) => {
        const tip = polarToCartesian(cx, cy, maxR, (360 / n) * i);
        return (
          <line key={i} x1={cx} y1={cy} x2={tip.x} y2={tip.y} stroke="#e2e8f0" strokeWidth="1" />
        );
      })}

      {/* Data polygon */}
      <polygon
        points={dataPolygon}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Data dots */}
      {points.map((p, i) => {
        const { x, y } = polarToCartesian(cx, cy, maxR * (p.value / 100), (360 / n) * i);
        return <circle key={i} cx={x} cy={y} r="3" fill={strokeColor} />;
      })}

      {/* Labels */}
      {points.map((p, i) => {
        const angle = (360 / n) * i;
        const { x, y } = polarToCartesian(cx, cy, labelR, angle);
        const lines = wrapLabel(p.label, 10);
        const anchor =
          Math.abs(angle % 360) < 10 || Math.abs(angle % 360 - 180) < 10
            ? "middle"
            : angle > 10 && angle < 170
            ? "start"
            : "end";
        const lineH = 11;
        const startDY = lines.length === 1 ? "0.35em" : `${-(lines.length - 1) * 0.5 * lineH}px`;

        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor={anchor}
            fill="#596269"
            fontSize="9.5"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
          >
            {lines.map((line, li) => (
              <tspan key={li} x={x} dy={li === 0 ? startDY : `${lineH}px`}>
                {line}
              </tspan>
            ))}
          </text>
        );
      })}
    </svg>
  );
}
