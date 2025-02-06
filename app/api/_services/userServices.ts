import Users from "@/models/Users";

export async function getUserByEmail(email: String) {
  try {
    let user = await Users.find({ email });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function getUsersWithoutChat(email: String) {
  try {
    // const users = await Users.aggregate([
    //   { $match: { email: { $ne: email } } },
    //   {$lookup:{
    //     from:'Chat',
    //     // localField:'_id',
    //     // foreignField:'users',
    //     as:'chat',
    //     pipeline:[{
    //         $match:{users:{ $ne: mongoose.Types.ObjectId(userId) }}
    //     }]
    //   }}
    // ]);
    let users = await Users.find({ email: { $ne: email } });
    return users;
  } catch (error) {
    throw error;
  }
}
