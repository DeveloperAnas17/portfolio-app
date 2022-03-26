import React from "react";
import { sanityClient, urlFor } from "../sanity";
import Header from "../components/Header";
import Link from "next/link";

const blog = ({ allPosts }) => {
  console.log(allPosts);
  return (
    <div className="">
      <Header />

      <div className="mt-5 flex items-center justify-center flex-col">
        <h1 className="text-6xl font-bold text-center">Our Blog</h1>
        <p className="text-center font-medium mt-2 max-w-xl">
          {" "}
          This is the place where I can share and reflect on my learnings,
          whether in web design, technology, productivity, or even just life.
        </p>
      </div>
      <div className="mt-5 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-2 md:p-6">
        {allPosts.map((post) => (
          // eslint-disable-next-line @next/next/link-passhref
          <Link key={post._id} href={`/blog/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden ">
              <img
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src={urlFor(post.mainImage).url()}
                alt=""
              />
              <div className="mt-2">
                <p className="font-bold">{post.title}</p>
                <p className="font-medium">{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default blog;

export const getServerSideProps = async (posts) => {
  const query = `*[_type == "post"] {
        _id,
        title,
        author-> {
            name,
            image
        },
        description,
        mainImage,
        slug
    }`;

  const allPosts = await sanityClient.fetch(query);

  return {
    props: {
      allPosts,
    },
  };
};
