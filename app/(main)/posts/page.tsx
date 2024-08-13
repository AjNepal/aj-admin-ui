import BackButton from '@/components/BackButton';
import PostPagination from '@/components/posts/PostPagination';
import PostsTable from '@/components/posts/PostsTable';

const PostsPage = () => {
  return (
    <>
      <BackButton text='Go Home' link='/' />
      <PostsTable />
      <PostPagination />
    </>
  );
};

export default PostsPage;
