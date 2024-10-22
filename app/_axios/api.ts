import { CurdOperations } from "./axiosInstace";

export const getAccessTokenCrud = new CurdOperations('/api/getAccessToken')
export const profileCrud = new CurdOperations('/api/user/profile')