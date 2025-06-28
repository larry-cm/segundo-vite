export const RATINGS = ['g', 'pg', 'pg-13', 'r']
export const MODO = ['gifs', 'stickers']
export const ACTION = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating',
  UPDATE_MODE: 'update_mode',
  UPDATE_LANG: 'update_lang',
  CLEAN_KEYWORD: 'clean_keyword'
}
export const clasificaciones = {
  g: 'Todo público',
  pg: 'Supervisión parental sugerida',
  'pg-13': 'Mayores de 13 años',
  r: 'Restricción para menores'
}

export const clasificacionesAbreviadas = {
  g: 'TP',
  pg: 'SP',
  'pg-13': '13+',
  r: 'R'
}
export const LANGUAGES = {
  en: 'english',
  es: 'spanish',
  pt: 'portuguese',
  id: 'indonesian',
  fr: 'french',
  ar: 'arabic',
  tr: 'turkish',
  th: 'thai',
  vi: 'vietnamese',
  de: 'german',
  it: 'italian',
  ja: 'japanese',
  ru: 'russian',
  ko: 'korean',
  pl: 'polish',
  nl: 'dutch',
  ro: 'romanian',
  hu: 'hungarian',
  sv: 'swedish',
  cs: 'czech',
  hi: 'hindi',
  bn: 'bengali',
  da: 'danish',
  fa: 'farsi',
  tl: 'filipino',
  fi: 'finnish',
  he: 'hebrew',
  ms: 'malay',
  no: 'norwegian',
  uk: 'ukrainian'
}
export const languagesArray = Object.values(LANGUAGES)
export const languagesArrayInvertido = Object.fromEntries(
  Object.entries(LANGUAGES).map(([clave, valor]) => [valor, clave])
)
