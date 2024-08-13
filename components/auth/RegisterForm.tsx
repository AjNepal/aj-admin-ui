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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';

import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required.',
  }),
  email: z
    .string()
    .min(1, {
      message: 'Email is required.',
    })
    .email({
      message: 'Please enter a valid email',
    }),
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
  confirmPassword: z.string().min(1, {
    message: 'Confirm password is required.',
  }),
});

const RegisterForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push('/');
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Register your account</CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className='space-y-6'
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase font-bold text-zinc-500 dark:text-white'>
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='bg-slate-100 dark:bg-slate-500 border-o focus-visible:ring-0 text-black  dark:text-white focus-visible:ring-offset-0'
                        placeholder='Enter Name'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase font-bold text-zinc-500 dark:text-white'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='bg-slate-100 dark:bg-slate-500 border-o focus-visible:ring-0 text-black  dark:text-white focus-visible:ring-offset-0'
                        placeholder='Enter Email'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase font-bold text-zinc-500 dark:text-white'>
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        className='bg-slate-100 dark:bg-slate-500 border-o focus-visible:ring-0 text-black  dark:text-white focus-visible:ring-offset-0'
                        placeholder='Enter Password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase font-bold text-zinc-500 dark:text-white'>
                      Confirm password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        className='bg-slate-100 dark:bg-slate-500 border-o focus-visible:ring-0 text-black  dark:text-white focus-visible:ring-offset-0'
                        placeholder='Enter confirm Password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className='w-full dark:bg-slate-800 dark:text-white'>
                Register
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default RegisterForm;
