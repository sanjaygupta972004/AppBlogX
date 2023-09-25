import conf from "../Config/conf";

import { Client, ID ,Databases,Storage, Query} from "appwrite";

export class StoreData{
 client= new Client();
 database;
 bucket;

constructor(){
     this.client
     .setEndpoint(conf.appwriteProjectUrl)
     .setProject(conf.appwriteProjectId)
     this.database= new Databases(this.client);
     this.bucket= new Storage(this.client);
}

async createPost({title,slug,content,featureImage,status,userId}){
try {
     return await this.database.createDocument(
           conf.appwriteProjectDatsbaseId,
           conf.appwriteProjectCollectionId, slug , {}) 
           {
               title,
               content,
               featureImage,
               status,
               userId
           }

} catch (error) {
     console.log("Appwrite::createPost error",error)
}  

}
async updatePost( slug,{title,content,featureImage,status}){
     try {
          return await this.database.updateDocument(
               conf.appwriteProjectDatsbaseId,
                conf.appwriteProjectCollectionId,
                 slug)
                 {
                    title,
                    content,
                    featureImage,
                    status
                 }
     } catch (error) {
          console.log("Appwrite:: updatePost error",error)
     }
}

async deletePost(slug){
     try {
           await this.database.deleteDocument(conf.appwriteProjectDatsbaseId,
                  conf.appwriteProjectCollectionId, slug)
                  return true;
          
     } catch (error) {
          console.log("Appwrite:: deletePost error",error)
     }
     return false;
}

async getPost(slug){
     try {
          return await this.database.getDocument(conf.appwriteProjectDatsbaseId,
                conf.appwriteProjectCollectionId,
                slug)
     } catch (error) {
          console.log("Appwrite:: getPost error",error)
          
     }
}
  
async getPosts(queries=[Query.equal("status","active")]){
     try {
          return await this.database.listDocuments(conf.appwriteProjectDatsbaseId,
                conf.appwriteProjectCollectionId,
                queries)
     } catch (error) {
          console.log("Appwrite:: getPosts error",error)
             return false;
     }
} 

// file upload service

async uploadedFile(file){
     try {
          return await  this.bucket.createFile(conf.appwriteProjectBucketId,
                ID.unique(),
                 file)
     } catch (error) {
          console.log("Appwrite:: uploadedFile error",error) 
          return false;
     }
}

async deleteFile(fileId){
     try {
          return this.bucket.deleteFile(conf.appwriteProjectBucketId,
                fileId)
          return true;
     } catch (error) {
          console.log("Appwrite:: deleteFile error",error)
          return false
     }

}

getFilePreview(fileId){
     return this.bucket.getFilePreview(
         conf.appwriteBucketId,
         fileId
     )
 }
}

let storedata=new StoreData();
export default storedata;



 
