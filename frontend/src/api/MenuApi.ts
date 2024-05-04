import { fetcher } from "../lib/axios";

export const getAllMenus = async () => {
      return await fetcher.get(`/menus`).then((res) => {
            return res.data;
      }).catch(err => console.log(err));
};

