export function truncateString(str: string, num: number) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

export function shuffle(array: any[]) {
  return array.sort(() => Math.random() - 0.5);
}
