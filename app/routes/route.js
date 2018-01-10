'use strict';
const path = require('path');

module.exports = function(app) {
  var users = require('../controller/user_controller');
  var videos = require('../controller/video_controller');
 
  // User Routes
  app.route('/users')
    .get(users.list_all_users)
    .post(users.create_user);

  app.route('/user/:userId')
    .get(users.view_user)
    .put(users.update_user)
    .delete(users.delete_user);

  // Video Routes
  app.route('/videos')
    .get(videos.list_all_videos)
    .post(videos.create_video);

  app.route('/video/:videoId')
    .get(videos.view_video)
    .put(videos.update_video)
    .delete(videos.delete_video);
  
  // front end routes
  app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../../trotseeclient/build', 'index.html'));
  });

  app.get('/create',function(req,res){
    res.sendFile(path.join(__dirname, '../../trotseeclient', 'create.html'));
  });
  
  app.get('/list',function(req,res){
    res.sendFile(path.join(__dirname, '../../trotseeclient', 'product_list.html'));
  });

  app.get('/edit',function(req,res){
    res.sendFile(path.join(__dirname, '../../trotseeclient', 'edit.html'));
  });
};

