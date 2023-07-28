export function cutCharacter(teks) {
  return teks?.length > 20 ? teks.slice(0, 20) + "..." : teks;
}
