export function useMask(mask: string, value: string): string {
  const maskCount = mask.replace(/[^#]/g, '').length;
  const inputValue = value.replace(/\D/g, '').slice(0, maskCount);

  let newValue = '';
  for (let i = 0, j = 0; i < mask.length && j < inputValue.length; i++) {
    if (mask[i] === '#') {
      newValue += inputValue[j];
      j++;
    } else {
      newValue += mask[i];
    }
  }
  return newValue.trim();
}
