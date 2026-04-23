export function PolygonBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "#d6e8ea",
        overflow: "hidden",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <polygon fill="#cce1e4" points="0,0 400,0 200,300" />
        <polygon fill="#d8ecee" points="400,0 800,0 600,200" />
        <polygon fill="#c8dde0" points="0,0 200,300 0,500" />
        <polygon fill="#daeef0" points="200,300 400,0 500,400" />
        <polygon fill="#cce3e5" points="800,0 1200,0 1000,250" />
        <polygon fill="#d4e9eb" points="1200,0 1600,0 1400,300" />
        <polygon fill="#c6dce0" points="1600,0 1600,400 1400,300" />
        <polygon fill="#daeef2" points="0,500 200,300 100,700" />
        <polygon fill="#c4dbe0" points="100,700 0,500 0,900" />
        <polygon fill="#d0e6ea" points="100,700 0,900 300,900" />
        <polygon fill="#cce1e6" points="1400,300 1600,400 1600,600" />
        <polygon fill="#d6ecef" points="1600,600 1600,900 1400,700" />
        <polygon fill="#c8dde2" points="1400,700 1600,900 1200,900" />
        <polygon fill="#daeef2" points="300,900 0,900 200,700" />
        <polygon fill="#d2e8ec" points="500,400 400,0 700,100" />
        <polygon fill="#cce0e5" points="700,100 800,0 1000,250" />
      </svg>
    </div>
  );
}
