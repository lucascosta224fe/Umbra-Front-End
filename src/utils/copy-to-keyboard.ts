export const copyToClipboard = async (textToCopy: string) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
  } catch (err) {
    console.error("Falha ao copiar: ", err);
  }
};
