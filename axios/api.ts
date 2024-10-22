import { ApiResponseObject } from "@/types/common";
import { CurdOperations } from "./axiosInstace";

export const getAccessTokenCrud = new CurdOperations('/api/getAccessToken')