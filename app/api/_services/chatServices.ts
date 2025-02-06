import Users from "@/models/Users";

export async function getChatUsersList(email: String) {
  try {
    // let users = await Users.find({ email: { $ne: email } });
    // return users;
  } catch (error) {
    throw error;
  }
}
