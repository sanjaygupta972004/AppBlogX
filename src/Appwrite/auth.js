import conf from "../Config/conf";

import { Client,Account, ID } from "appwrite";

export class AuthServices{
     client= new Client();
     account;

     constructor(){
     this.client
      .setEndpoint(conf.appwriteProjectUrl)
      .setProject( conf.appwriteProjectId)
      this.account=new Account(this.client)
     }
     async creataAccount({email,password,name}){
          try {
               const userAccount= await this.account.create(ID.unique(), email, password,name)
                if (userAccount) {
                  // call another method
                  return this.login({email,password});                 
                } else {
                    return userAccount;
                }
          } catch (error) {
               throw error;
          }
     }

     async login({email,password}){
              try {
                return await this.account.createEmailSession(email, password);
              } catch (error) {
                console.log("Appwrite service:: loginerror",error);
              }  
     }

     async getCurrentUser(){
         try {
          return await this.account.get();
         } catch (error) {
          console.log("Appwrite service::getCurrentUser error::",error);
         }
         return null;
     }

   
     async logout() {

          try {
              await this.account.deleteSessions();
          } catch (error) {
              console.log("Appwrite serive :: logout :: error", error);
          }
      }
  }  


const authservice= new AuthServices()

export default authservice