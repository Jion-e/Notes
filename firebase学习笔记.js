/*** ����firebase ***/
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDxUppBRTczs5FWVfmQaiqKve6zaw1_-_I",
  authDomain: "newssystem-2b6d6.firebaseapp.com",
  databaseURL: "https://newssystem-2b6d6.firebaseio.com",
  storageBucket: "newssystem-2b6d6.appspot.com",
  messagingSenderId: "830388281949"
};
firebase.initializeApp(config);

/*** ���ݿ���� ***/
//�������ݿ⣺
const db = firebase.database().ref;  //https://newssystem-2b6d6.firebaseio.com/����ȡfirebase���ݿ����ӣ� 
const mainNavRef = db.child('newsMainNav'); //https://newssystem-2b6d6.firebaseio.com/newsMainNav����ȡ���ݿ�newsMainNav�ڵ����ݣ�

//��ȡ���ݣ�
let dataNav;
mainNavRef.on('value', snapshot => {
    dataNav = snapshot.val();
}, err => {
     console.log("The read failed: " + err.code);
})

//��ȡkey��
const newMainNavKey = mainNavRef.push().key;
//�������ݣ�
mainNavRef.push().set({
    "name": "��������",
    "icon": "icon-magic",
    "link": "#!/main/"
})

//��������
mainNavRef.child('0').update({
    'link': '#!/main/newsList'
})

//set��
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

//push��update:
function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}