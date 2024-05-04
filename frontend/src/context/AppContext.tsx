import { createContext, useContext, useEffect, useState } from "react";
import { config } from "../config/config";
import { Menus } from '../type/type';

interface AppContextType {
      menus: Menus[]
};
export const defatultContext: AppContextType = {
      menus: []
}

export const AppContext = createContext<AppContextType>(defatultContext);

const AppContextApi = (props: any) => {
      const [menu, setMenu] = useState(defatultContext);
      useEffect(() => {
            getMenus();
      }, []);

      const getMenus = async () => {
            try {
                  const response = await fetch(`${config.apiBaseUrl}/menus`, {
                        method: "GET",
                        headers: { "content-type": "application/json" }
                  });
                  if (response.ok) {
                        const responseJson = await response.json();
                        setMenu(responseJson);
                        console.log("response: ", responseJson);
                  }
            } catch (error) {
                  console.log("Error: ", error);
            }
      }

      return (
            <AppContext.Provider value={menu}>
                  {props.children}
            </AppContext.Provider>
      )
};
export default AppContextApi;