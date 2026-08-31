const DEFAULT_INK = { r: 33, g: 29, b: 23 };
const DEFAULT_CREAM = { r: 248, g: 241, b: 222 };

export type Rgb = { r: number; g: number; b: number };

function parseHex(hex: string): Rgb | null {
  const value = hex.trim().replace("#", "");
  if (value.length !== 6) return null;
  const n = Number.parseInt(value, 16);
  if (Number.isNaN(n)) return null;
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function readThemeColors(): { ink: Rgb; cream: Rgb } {
  if (typeof window === "undefined") {
    return { ink: DEFAULT_INK, cream: DEFAULT_CREAM };
  }
  const styles = getComputedStyle(document.documentElement);
  return {
    ink: parseHex(styles.getPropertyValue("--rd-ink")) ?? DEFAULT_INK,
    cream: parseHex(styles.getPropertyValue("--rd-cream")) ?? DEFAULT_CREAM,
  };
}

function luminance(r: number, g: number, b: number) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function ditherImageData(
  imageData: ImageData,
  ink: Rgb,
  cream: Rgb
): ImageData {
  const { data, width, height } = imageData;
  const gray = new Float32Array(width * height);

  for (let i = 0; i < gray.length; i += 1) {
    const o = i * 4;
    gray[i] = luminance(data[o], data[o + 1], data[o + 2]);
  }

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = y * width + x;
      const old = gray[i];
      const next = old < 128 ? 0 : 255;
      const error = old - next;
      gray[i] = next;

      if (x + 1 < width) gray[i + 1] += (error * 7) / 16;
      if (y + 1 < height) {
        if (x > 0) gray[i + width - 1] += (error * 3) / 16;
        gray[i + width] += (error * 5) / 16;
        if (x + 1 < width) gray[i + width + 1] += (error * 1) / 16;
      }
    }
  }

  for (let i = 0; i < gray.length; i += 1) {
    const color = gray[i] < 128 ? ink : cream;
    const o = i * 4;
    data[o] = color.r;
    data[o + 1] = color.g;
    data[o + 2] = color.b;
    data[o + 3] = 255;
  }

  return imageData;
}

export function ditherSourceToCanvas(
  source: CanvasImageSource,
  sourceWidth: number,
  sourceHeight: number,
  pixelSize = 2,
  maxWidth = 640
): HTMLCanvasElement {
  const { ink, cream } = readThemeColors();
  const scale = Math.min(1, maxWidth / sourceWidth);
  const drawW = Math.max(1, Math.round((sourceWidth * scale) / pixelSize));
  const drawH = Math.max(1, Math.round((sourceHeight * scale) / pixelSize));

  const work = document.createElement("canvas");
  work.width = drawW;
  work.height = drawH;
  const workCtx = work.getContext("2d", { willReadFrequently: true });
  if (!workCtx) return work;
  workCtx.imageSmoothingEnabled = true;
  workCtx.drawImage(source, 0, 0, drawW, drawH);
  const imageData = workCtx.getImageData(0, 0, drawW, drawH);
  workCtx.putImageData(ditherImageData(imageData, ink, cream), 0, 0);

  const out = document.createElement("canvas");
  out.width = drawW * pixelSize;
  out.height = drawH * pixelSize;
  const outCtx = out.getContext("2d");
  if (!outCtx) return out;
  outCtx.imageSmoothingEnabled = false;
  outCtx.drawImage(work, 0, 0, out.width, out.height);
  return out;
}

export function coverSquareCanvas(
  source: CanvasImageSource,
  sourceWidth: number,
  sourceHeight: number,
  size: number
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;
  const scale = Math.max(size / sourceWidth, size / sourceHeight);
  const w = sourceWidth * scale;
  const h = sourceHeight * scale;
  ctx.drawImage(source, (size - w) / 2, (size - h) / 2, w, h);
  return canvas;
}
