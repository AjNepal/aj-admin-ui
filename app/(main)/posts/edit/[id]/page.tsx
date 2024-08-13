'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required.',
  }),
  body: z.string().min(1, {
    message: 'Body is required.',
  }),
  author: z.string().min(1, {
    message: 'Author is required.',
  }),
  date: z.string().min(1, {
    message: 'Date is required.',
  }),
});

import BackButton from '@/components/BackButton';
import posts from '@/data/posts';

interface PostEditPage {
  params: {
    id: string;
  };
}

const PostEditPage = ({ params }: PostEditPage) => {
  const { toast } = useToast();

  const post = posts.find((post) => post.id === params.id);
  //console.log(post);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || '',
      body: post?.body || '',
      author: post?.author || '',
      date: post?.date || '',
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    // console.log(data);
    toast({
      title: 'Post has been updated successfully.',
      description: `Updated by ${post?.author} on ${post?.date}`,
    });
  };

  return (
    <>
      <BackButton link='/posts' text='All Posts' />
      <h3 className='mb-5 font-semibold'>Edit Post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase font-bold text-zinc-500 dark:text-white'>
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-100 dark:bg-slate-500 border-o focus-visible:ring-0 text-black  dark:text-white focus-visible:ring-offset-0'
                    placeholder='Enter Title'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='body'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase font-bold text-zinc-500 dark:text-white'>
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    className='bg-slate-100 dark:bg-slate-500 border-o focus-visible:ring-0 text-black  dark:text-white focus-visible:ring-offset-0'
                    placeholder='Enter Body'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='author'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase font-bold text-zinc-500 dark:text-white'>
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-100 dark:bg-slate-500 border-o focus-visible:ring-0 text-black  dark:text-white focus-visible:ring-offset-0'
                    placeholder='Enter Author'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='date'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase font-bold text-zinc-500 dark:text-white'>
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-100 dark:bg-slate-500 border-o focus-visible:ring-0 text-black  dark:text-white focus-visible:ring-offset-0'
                    placeholder='Enter Date'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-full dark:bg-slate-800 dark:text-white'>
            Update Post
          </Button>
        </form>
      </Form>
    </>
  );
};

export default PostEditPage;
