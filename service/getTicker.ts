import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const getTicket = axios.create({
  baseURL: `${publicRuntimeConfig.SATANG_API}/v3`,
});
