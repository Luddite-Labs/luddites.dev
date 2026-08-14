/** Build a lightweight star-burst Lottie colored from the active theme. */

export type LottieRgb = [number, number, number]

function hexToLottieRgb(hex: string): LottieRgb {
  const raw = hex.replace('#', '').trim()
  const full =
    raw.length === 3
      ? raw
          .split('')
          .map((c) => c + c)
          .join('')
      : raw.slice(0, 6)
  const n = Number.parseInt(full, 16)
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
}

function readCssColor(varName: string, fallback: string): string {
  if (typeof window === 'undefined') return fallback
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim()
  return value || fallback
}

/** Theme-aware palette for celebration bursts. */
export function getCelebratePalette(): LottieRgb[] {
  return [
    hexToLottieRgb(readCssColor('--primary', '#0759e8')),
    hexToLottieRgb(readCssColor('--accent-foreground', '#0759e8')),
    hexToLottieRgb(readCssColor('--chart-4', '#e8c547')),
    hexToLottieRgb(readCssColor('--foreground', '#171717')),
  ]
}

type StarSpec = {
  angle: number
  distance: number
  size: number
  color: LottieRgb
  delay: number
  spin: number
}

function starLayer(spec: StarSpec, index: number) {
  const rad = (spec.angle * Math.PI) / 180
  const x = 200 + Math.cos(rad) * spec.distance
  const y = 200 + Math.sin(rad) * spec.distance
  const start = spec.delay
  const mid = start + 12
  const end = start + 36

  return {
    ddd: 0,
    ind: index + 1,
    ty: 4,
    nm: `Star ${index + 1}`,
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          { t: start, s: [0], e: [100], i: { x: [0.2], y: [1] }, o: { x: [0.4], y: [0] } },
          { t: mid, s: [100], e: [100], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
          { t: end, s: [100], e: [0], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
          { t: end + 1, s: [0] },
        ],
      },
      r: {
        a: 1,
        k: [
          {
            t: start,
            s: [0],
            e: [spec.spin],
            i: { x: [0.2], y: [1] },
            o: { x: [0.5], y: [0] },
          },
          { t: end, s: [spec.spin] },
        ],
      },
      p: {
        a: 1,
        k: [
          {
            t: start,
            s: [200, 200, 0],
            e: [x, y, 0],
            i: { x: [0.15, 0.15, 0.15], y: [1, 1, 1] },
            o: { x: [0.45, 0.45, 0.45], y: [0, 0, 0] },
          },
          { t: end, s: [x, y, 0] },
        ],
      },
      a: { a: 0, k: [0, 0, 0] },
      s: {
        a: 1,
        k: [
          {
            t: start,
            s: [40, 40, 100],
            e: [100, 100, 100],
            i: { x: [0.2, 0.2, 0.2], y: [1, 1, 1] },
            o: { x: [0.4, 0.4, 0.4], y: [0, 0, 0] },
          },
          {
            t: mid,
            s: [100, 100, 100],
            e: [70, 70, 100],
            i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] },
            o: { x: [0.6, 0.6, 0.6], y: [0, 0, 0] },
          },
          { t: end, s: [70, 70, 100] },
        ],
      },
    },
    ao: 0,
    shapes: [
      {
        ty: 'sr',
        sy: 1,
        d: 1,
        pt: { a: 0, k: 5 },
        p: { a: 0, k: [0, 0] },
        r: { a: 0, k: 0 },
        ir: { a: 0, k: spec.size * 0.42 },
        is: { a: 0, k: 0 },
        or: { a: 0, k: spec.size },
        os: { a: 0, k: 0 },
        nm: 'Star',
        mn: 'ADBE Vector Shape - Star',
        hd: false,
      },
      {
        ty: 'fl',
        c: { a: 0, k: [...spec.color, 1] },
        o: { a: 0, k: 100 },
        r: 1,
        bm: 0,
        nm: 'Fill',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false,
      },
    ],
    ip: start,
    op: end + 2,
    st: 0,
    bm: 0,
  }
}

export function createStarBurstAnimation(palette: LottieRgb[]) {
  const specs: StarSpec[] = Array.from({ length: 14 }, (_, i) => {
    const angle = (360 / 14) * i + (i % 2 === 0 ? 8 : -6)
    return {
      angle,
      distance: 90 + (i % 4) * 28,
      size: 10 + (i % 3) * 4,
      color: palette[i % palette.length]!,
      delay: (i % 5) * 2,
      spin: i % 2 === 0 ? 120 : -150,
    }
  })

  return {
    v: '5.7.4',
    fr: 60,
    ip: 0,
    op: 48,
    w: 400,
    h: 400,
    nm: 'Star Burst',
    ddd: 0,
    assets: [],
    layers: specs.map((spec, index) => starLayer(spec, index)),
  }
}
