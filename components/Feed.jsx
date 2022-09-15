import { SparklesIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Input from "./Input";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";
import { useSession } from "next-auth/react";

const Feed = () => {
const {data : session} = useSession()
const [posts, setPosts] = useState([]);

  // MESSY
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [db]);

  // CLEAN
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );
console.log(posts)

  return (
    <div className='text-white flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]'>
      <div className='flex justify-between items-center h-[50px] px-5 border-b text-[#9d9d9d] sticky top-0 z-50 border-gray-700'>
        <h4 className='font-bold text-lg sm:text-xl'>Home</h4>
        <div className='hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto'>
          <SparklesIcon className='h-5 text-white'/>
        </div>
      </div>
      <Input/>
      <div className='pb-72'>
        {posts.map(post =>(
          <Post key={post.id} id={posts.id} post={posts.data}/>
        ) )}
      </div>
    </div>
  )
}

export default Feed