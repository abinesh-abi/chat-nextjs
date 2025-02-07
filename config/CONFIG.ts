export default {
  MONGODB_URI: process.env.MONGODB_URI,
  BASE_URL: process.env.BASE_URL,
  SOCKET_PORT:Number( process.env.SOCKET_PORT || 8080),


  //for client
  NEXT_PUBLIC_SOCKET_URL:process.env.NEXT_PUBLIC_SOCKET_URL || 'ws://localhost:8080'
};

/**
 * set these on env to authentication 
// AUTH0_SECRET=''
// AUTH0_BASE_URL=''
// AUTH0_ISSUER_BASE_URL=''
// AUTH0_CLIENT_ID=''
// AUTH0_CLIENT_SECRET=''
 */
