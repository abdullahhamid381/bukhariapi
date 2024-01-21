const {username,password}=process.env
export const connectionsrt=`mongodb+srv://${username}:${password}@cluster0.siyjtub.mongodb.net/ProductDb?retryWrites=true&w=majority`
export const connectionBukhari=`mongodb+srv://${username}:${password}@cluster0.siyjtub.mongodb.net/BukhariDB?retryWrites=true&w=majority`