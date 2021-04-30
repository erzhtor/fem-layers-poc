import { useContext, createContext, useMemo } from "react";

let DIContext: any;

export function createDIContainer<T>(container: T) {
  DIContext = createContext(container);

  return ({ children }: any) => (
    <DIContext.Provider value={container}>{children}</DIContext.Provider>
  );
}

export function useDI<T>(key: keyof T) {
  // @ts-ignore
  const container = useContext<T>(DIContext);
  return useMemo(() => container[key], [container, key]);
}
