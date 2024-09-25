/*
 * @Author: 刘利军
 * @Date: 2024-09-25 10:59:34
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-09-25 15:45:57
 * @Description:
 * @PageName:
 */
import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    {
      path: "/",
      redirect: "/prochat",
    },
    { path: "/prochat", component: "@/pages/antProChat" },
  ],
});
