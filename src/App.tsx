import { createContext, useState } from "react";
import Navbarlayout from "./components/Navbar/Navbarlayout";
export const UserContexts = createContext<{
  user: { isLoggedIn: boolean } | null;
  setUser: React.Dispatch<React.SetStateAction<{ isLoggedIn: boolean }>>;
}>({
  user: null,
  setUser: () => {},
});
function App() {
  const [user, setUser] = useState({ isLoggedIn: false });
  return (
    <UserContexts.Provider value={{ user, setUser }}>
      <div>
        <Navbarlayout />
      </div>
    </UserContexts.Provider>
  );
}

export default App;
