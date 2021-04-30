import { useContext, createContext, useMemo } from "react";

let DIContext: any;
let globalContainer: any;

export function createDIContainer<T>(container: T) {
  globalContainer = container;
  DIContext = createContext(container);

  return ({ children }: any) => (
    <DIContext.Provider value={container}>{children}</DIContext.Provider>
  );
}

export function useInject<T>(key: keyof T) {
  // @ts-ignore
  const container = useContext<T>(DIContext);
  return useMemo(() => container[key], [container, key]);
}

export function inject<T>(key: keyof T) {
  // @ts-ignore
  return globalContainer[key];
}
