import { Comment } from 'react-loader-spinner';

function Loader() {
  return (
    <Comment
      visible={true}
      height="40"
      width="40"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="rgb(117, 152, 240)"
    />
  );
}

export default Loader;
