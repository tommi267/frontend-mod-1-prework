/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp){
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.comments = [];
    this.numberOfLikes = 0;
  }

  newComment(comment){
    this.comments.push(comment);
  }
  increaseLikes(like) {
    this.numberOfLikes = this.numberOfLikes + like
  }

};

var newTweet = new Tweet('Tom','Sixers FTW!!','06/02/2021 22:00');
console.log(newTweet);

newTweet.newComment('Great game!!🔥🔥');
console.log(newTweet);

newTweet.increaseLikes(99);
console.log(newTweet);

newTweet.increaseLikes(1);
console.log(newTweet);

newTweet.newComment('PLAYOFFS!!!');
console.log(newTweet);
