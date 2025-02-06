import { CurdOperations } from "./axiosInstace";

export const getAccessTokenCrud = new CurdOperations('/api/getAccessToken')
export const profileCrud = new CurdOperations('/api/user/db-user')
export const getUsersWithoutOwnCrud = new CurdOperations('/api/user/user-list-without-chat')
export const chatCrud = new CurdOperations('/api/chat')
export const messageCrud = new CurdOperations('/api/chat/message')