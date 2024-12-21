import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentById(id) {
  return commentsFromServer.filter(comment => comment.postId === id) || [];
}

export const posts = postsFromServer.map(post => ({
  ...post,
  comments: getCommentById(post.id),
  user: getUserById(post.userId),
}));

// console.log(posts);

// const CommentInfo = ({ comment }) => {
//   return (
//     <div className="CommentInfo">
//       <div className="CommentInfo__title">
//         <strong className="CommentInfo__name">{comment.name}</strong>

//         {' by '}

//         <a href={`mailto: ${comment.email}`} className="CommentInfo__email">
//           {comment.email}
//         </a>
//       </div>

//       <div className="CommentInfo__body">{comment.body}</div>
//     </div>
//   );
// };

// const CommentList = ({ comments }) => {
//   return (
//     <div className="CommentList">
//       {comments.map(comment => (
//         <CommentInfo comment={comment} />
//       ))}
//     </div>
//   );
// };

// const UserInfo = ({ email, name }) => {
//   return (
//     <a className="UserInfo" href={`mailto:${email}`}>
//       {name}
//     </a>
//   );
// };

// const PostInfo = ({ title, email, name, body, comments }) => {
//   return (
//     <div className="PostInfo">
//       <div className="PostInfo__header">
//         <h3 className="PostInfo__title">{title}</h3>

//         <p>
//           {' Posted by  '}
//           <UserInfo email={email} name={name} />
//         </p>
//       </div>

//       <p className="PostInfo__body">{body}</p>

//       {comments.length === 0 ? (
//         <>
//           <hr />
//           <b data-cy="NoCommentsMessage">No comments yet</b>
//         </>
//       ) : (
//         <CommentList comments={comments} />
//       )}
//     </div>
//   );
// };

// const PostList = () => {
//   return (
//     <div className="PostList">
//       {posts.map(post => (
//         <PostInfo
//           title={post.title}
//           email={post.user.email}
//           name={post.user.name}
//           body={post.body}
//           comments={post.comments}
//           key={post.id}
//         />
//       ))}
//     </div>
//   );
// };

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
