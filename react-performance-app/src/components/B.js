import React from 'react'

const Message = ({message}) =>{
  return <p>{message}</p>;
}

const ListItem = React.memo(({ post }) => {
  return(
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  )
})

const List = React.memo(({ posts, testFunc }) => {
  console.log('list component is rerendering');
  return(
    <ul>
        {posts.map(post => (
      <ListItem key={post.id} post={post} />
    ))}
    </ul>
  )
})

const B = ({message, posts}) => {
  const testFunc = React.useCallback(() => { }, []); // 함수가 정의될때마다 참조 변경 >> memo 적용 x
  return (
    <div>
      <h1>B components</h1>
      <Message message={message} />
      <List posts={posts} testFunc={testFunc} />
    </div>
  )
}

export default B
