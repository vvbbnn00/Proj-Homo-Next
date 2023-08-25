import 'server-only'


const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    zh: () => import('./dictionaries/zh.json').then((module) => module.default),
    zh_tw: () => import('./dictionaries/zh_tw.json').then((module) => module.default),
    ja: () => import('./dictionaries/ja.json').then((module) => module.default),
}

export const getDictionary = async (locale) =>
    dictionaries[locale]?.() ?? await dictionaries.en()

