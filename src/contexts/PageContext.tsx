import { createContext, useState, ReactNode, useContext } from "react";

interface PageContextType {
  page: string;
  setPage: (newPage: string) => void;
  username: string;
  setUsername: (newUsername: string) => void;
  email: string;
  setUserEmail: (newEmail: string) => void;
}

const PageContext = createContext<PageContextType | null>(null);

export function PageProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<string>("Login");
  const [username, setUsername] = useState<string>("");
  const [email, setUserEmail] = useState<string>("");

  return (
    <PageContext.Provider
      value={{ page, setPage, username, setUsername, email, setUserEmail }}
    >
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("Error!");
  }
  return context;
}
