function skiJump(mountain) {
  const height = mountain.length;
  const speed = height * 1.5;
  const length = ((height * speed * 9) / 10).toFixed(2);
  if (length < 10) return `${length} metres: He's crap!`;
  else if (length > 10 && length < 25) return `${length} metres: He's ok!`;
  else if (length > 25 && length < 50) return `${length} metres: He's flying!`;
  else return `${length} metres: Gold!!`;
}
