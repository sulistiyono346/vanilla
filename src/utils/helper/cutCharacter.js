export function cutCharacter(teks) {
  return teks?.length > 15 ? teks.slice(0, 15) + "..." : teks;
}
