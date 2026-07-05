import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Format a rupee amount in compact Indian notation.
 *  e.g. 500 → ₹500 | 12500 → ₹12.5K | 350000 → ₹3.5L | 12000000 → ₹1.2Cr
 */
export function fmtINR(value: number): string {
  if (value >= 1_00_00_000) return `₹${(value / 1_00_00_000).toFixed(1).replace(/\.0$/, "")}Cr`;
  if (value >= 1_00_000)    return `₹${(value / 1_00_000).toFixed(1).replace(/\.0$/, "")}L`;
  if (value >= 1_000)       return `₹${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return `₹${value}`;
}
