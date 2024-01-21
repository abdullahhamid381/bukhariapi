const {username,password}=process.env
export const connectionsrt=`mongodb+srv://${username}:${password}@cluster0.siyjtub.mongodb.net/ProductDb?retryWrites=true&w=majority`