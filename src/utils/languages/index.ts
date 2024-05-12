import { Lang, LangEnum } from '@type/index';

export const getSystemLang = (): Lang => {
  const env = process.env;
  const language = env.LANG || env.LANGUAGE || env.LC_ALL || env.LC_MESSAGES;

  if (!language) return { langType: LangEnum.KO }; // 시스템 언어 설정을 찾을 수 없으면 default 한국어로 설정
  const code = language.split(/\.|-|_/)[0].toLowerCase();

  switch (code) {
    case 'en':
      return { langType: LangEnum.EN };
    case 'zh':
      return { langType: LangEnum.ZH };
    default:
      return { langType: LangEnum.KO };
  }
};
