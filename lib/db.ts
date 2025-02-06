// import mongoose from "mongoose";
// declare global {
//   var mongoose: any; // This must be a `var` and not a `let / const`
// }

// const MONGODB_URI = process.env.MONGODB_URI!;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local",
//   );
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };
//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       console.log('DB Connected')
//       return mongoose;
//     });
//   }
//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// }

// export default dbConnect;

// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

// // let cached = global.mongoose;

// // if (!cached) {
// //   cached = global.mongoose = { conn: null, promise: null };
// // }

// async function dbConnect() {
//   console.log('thrs')
//   if (!MONGODB_URI) {
//     throw new Error(
//       "Please define the MONGODB_URI environment variable inside .env.local"
//     );
//   }
//   try {
//     const opts = {
//       bufferCommands: false,
//     };
//     const connection = await mongoose.connect(MONGODB_URI);
//     // .then((mongoose) => {
//     //   console.log("Db connected");
//     //   return mongoose;
//     // });
//     console.log("Db connected");
//     return connection;
//   } catch (error) {
//     throw error;
//   }
//   // if (cached.conn) {
//   //   return cached.conn;
//   // }
//   // try {
//   //   if (!cached.promise) {
//   //     const opts = {
//   //       bufferCommands: false,
//   //     };
//   //     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//   //       console.log("Db connected");
//   //       return mongoose;
//   //     });
//   //   }
//   // } catch (err) {
//   //   console.log(err);
//   // }
//   // try {
//   //   cached.conn = await cached.promise;
//   // } catch (e) {
//   //   cached.promise = null;
//   //   throw e;
//   // }

//   // return cached.conn;
// }

// export default dbConnect;

// /src/app/lib/db.js

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let gbl: typeof globalThis & { mongoose: any } = { mongoose, ...global };

let cached = gbl.mongoose;

if (!cached) {
  cached = gbl.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    if (mongoose?.connect) {
      cached.promise = mongoose
        ?.connect(MONGODB_URI || "", opts)
        ?.then((mongoose) => {
          console.log("Db connected");
          return mongoose;
        });
    }
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
