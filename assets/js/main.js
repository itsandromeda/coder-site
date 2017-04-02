/*global document, createPost, console, alert*/
var user = document.getElementById("user"),
    comment = document.getElementById("comment"),
    postBtn = document.getElementById("post"),
    posts = document.getElementById('comments'),
    parentDiv,
    nameSpan,
    nameText,
    trash,
    trashText,
    postText,
    commentChildDiv;

var data = [];

postBtn.addEventListener('click', function () {
    "use strict";
    var name = user.value,
        post = comment.value;

    if (name && post) {
        data.push({
            nickname: name,
            comment: post
        });
        createPost(name, post, data.length);
    }
});

function createPost(name, post, x) {
    "use strict";
    var allPosts,
        removePost,
        i;

    parentDiv = document.createElement("div");
    nameSpan = document.createElement('span');
    commentChildDiv = document.createElement('div');
    nameText = document.createTextNode(name);
    postText = document.createTextNode(post);
    trash = document.createElement("span");
    trashText = document.createTextNode('delete');

    parentDiv.setAttribute('id', 'comment0' + x);
    parentDiv.setAttribute('class', 'comments');
    trash.setAttribute('class', 'material-icons trash');
    trash.appendChild(trashText);
    trash.addEventListener('click', function (e) {
        var parent = e.target.parentNode;
        posts.removeChild(parent);
    });

    nameSpan.appendChild(nameText);
    parentDiv.appendChild(nameSpan);
    parentDiv.appendChild(commentChildDiv);
    parentDiv.appendChild(trash);
    commentChildDiv.appendChild(postText);
    posts.appendChild(parentDiv);
    user.value = "";
    comment.value = "";
}