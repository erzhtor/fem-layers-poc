export type ILogger = () => void;
export type IFetcher = (url: string) => void;

export interface IDIContainer {
  log: ILogger;
  fetch: IFetcher;
}
