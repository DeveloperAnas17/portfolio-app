import React from "react";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { GetStaticProps } from "next";
import PortableText from "react-portable-text";
import { useHref } from "react-router-dom";

const Slug = ({ post }) => {
  console.log(post);
  return (
    <main className="max-w-5xl mx-auto">
      <Header />

      <div className="">
        <h1 className="w-full text-center text-6xl font-bold">{post.title}</h1>
        <img
          src={urlFor(post.mainImage).url()}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <article>
        <p className="">{post.description}</p>

        <div>
          {/* <PortableText
          className=""
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          content={post.body}
          serializers={{
            h1: (props: any) => (
              <h1 className="text-2xl font-bold my-5"{...props} />
            ),
            h2: (props: any) => (
              <h1 className="text-xl font-bold my-5" {...props} />
            ),
            li: ({children: any} => (
              <li className="ml-4 list-disc">{children}</li>
            )
            link: ({useHref, children}: any => (
              <a href={href} className="text-blue-500 hover:underline">{children}</a>
            ))
            ),
            
          }}
          /> */}
        </div>
      </article>
    </main>
  );
};

export default Slug;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug {
            current
        }
    }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author-> {
            name,
            image,
        },
        'comments': *[
            _type == "comment" && 
            post._ref == ^._id &&
            approved == true],
            description,
            mainImage,
            slug,
            body
    }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // after 60 seconds, it will update cached version
  };
};
