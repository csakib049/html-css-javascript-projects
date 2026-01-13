import { userList } from "../model/userModel";

export function handleUser(req,resp){
    const userData=userList();
    console.log(userData);
    resp.render('user',{users:userData});
}