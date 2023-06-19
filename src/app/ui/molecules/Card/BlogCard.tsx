import { BlogCardProps } from "../../../libs/interface/blog";
import imageUrlBuilder from "@sanity/image-url";
import { useState } from "react";
import { sanityClient } from "../../../..";

export default function BlogCard(blog: BlogCardProps) {
  const builder = imageUrlBuilder(sanityClient);
  const [isExpanded, setIsExpanded] = useState(false);

  console.log(builder.image(blog.mainImage).url());

  return (
    <div className="max-w-lg bg-white rounded-lg shadow-lg overflow-hidden my-20">
      <img
        className="w-full h-[300px] object-cover"
        src={builder.image(blog.mainImage).url()}
        alt={blog.title}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-700 text-base mb-4">{blog.excerpt}</p>
        <div className="flex items-center">
          <p className="text-gray-900 font-medium">
            {blog.tags?.map((tag) => (
              <span className="mr-4">{tag}</span>
            ))}
          </p>
          <p className="text-gray-600">
            {new Date(blog.publishedAt).toLocaleDateString()}
          </p>
        </div>
        <button
          className="text-blue-500 hover:text-blue-700 font-medium mt-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
        {isExpanded && (
          <div className="mt-4">
            {blog.body.map((block) => (
              <p key={block._key} className="text-gray-700 text-base mb-2">
                {block.children.map((child) => child.text).join(" ")}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
