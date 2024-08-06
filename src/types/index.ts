export type StringSetter = (newLabel: string | ((prevLabel: string) => string)) => void;
export type BooleanSetter = (newValue: boolean | ((prevValue: boolean) => boolean)) => void;

export type Paging = {
  currentPage: number;
  pageSize: number;
  hasNext: boolean;
};

export type NavInfo = {
  page: string;
  history: string[];
};

export enum Page {
  home = "home",
  register = "register",
  retreatInfo = "retreat-info",
  retreatLocation = "retreat-location",
  retreatPayment = "retreat-payment",
  retreatApplication = "retreat-application",
  backoffice = "backoffice",
  editProfile = "edit-profile",
  retreatAppInfo = "retreat-application-info",
  notLogin = "not-login",
  AuthUser = "AuthUser",
  myPage = "my-page",
  youtube = "youtube",
  youtubeOld = "youtube-old",
  timeTable = "time-table",
}

export type RadioItem = {
  value: number;
  text: string;
}
