const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   name: String,
   email: String,
   blogs: [{ //blog 참고
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog"
   }]
});

const BlogSchema = new Schema({
   title: String,
   user: {  //user 참고
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },
   body: String,
   comments: [{ // comment 참고
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
   }]
})

const CommentSchema = new Schema({
   user: {  //user
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },
   blog: {  //blog
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog"
   },
   body: String
})


const User = mongoose.model("Author", UserSchema);
const Blog = mongoose.model("Blog", BlogSchema);
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = {User, Blog, Comment}

///////////////////////////////////////////////
//populate 구현                              //
//////////////////////////////////////////////
const User = require("path/to/userSchema");

User
   .findOne({_id: userId })
   .populate("blogs") // key to populate
   .then(user => {
      res.json(user); 
   });

/*
OUTPUT:
 {
    _id: userid, 
    name: "john doe",
    email: "john@email.com",
    blogs: [
        {
            _id: blogid, 
            title: "how to do nothing",
            body: "Interesting matter in 11111the blog...",
            comments: [commentId_1, commentId_2]
        }
    ]
 }
*/