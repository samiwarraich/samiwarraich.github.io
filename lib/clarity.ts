import clarity from "@microsoft/clarity";

export const initClarity = () => {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_MS_CLARITY) {
    clarity.init(process.env.NEXT_PUBLIC_MS_CLARITY);
  }
};

export const identifyUser = (
  userId: string,
  sessionId?: string,
  pageId?: string,
  friendlyName?: string
) => {
  if (typeof window !== "undefined") {
    clarity.identify(userId, sessionId, pageId, friendlyName);
  }
};

export const setTag = (key: string, value: string | string[]) => {
  if (typeof window !== "undefined") {
    clarity.setTag(key, value);
  }
};
