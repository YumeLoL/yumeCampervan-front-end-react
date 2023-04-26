import { useState } from 'react';

interface BlogCardProps {
  post: {
    _createdAt: string;
    _id: string;
    _updatedAt: string;
    body: {
      _key: string;
      _type: string;
      children: {
        _key: string;
        _type: string;
        marks: any[];
        text: string;
      }[];
      markDefs: any[];
      style: string;
    }[];
    excerpt: string;
    mainImage: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    publishedAt: string;
    slug: {
      _type: string;
      current: string;
    };
    tags: string[];
    title: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* <img
        className="w-full h-48 object-cover"
        src={`https://cdn.sanity.io/images/${process.env.REACT_APP_SANITY_PROJECT_ID}/${process.env.REACT_APP_SANITY_DATASET}/${post.mainImage.asset._ref}`}
        alt={post.title}
      /> */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 text-base mb-4">{post.excerpt}</p>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://picsum.photos/seed/picsum/200"
            alt="Author"
          />
          <div>
            {/* <p className="text-gray-900 font-medium">{post.tags.join(' ')}</p> */}
            <p className="text-gray-600">{new Date(post.publishedAt).toLocaleDateString()}</p>
          </div>
        </div>
        <button
          className="text-blue-500 hover:text-blue-700 font-medium mt-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
        {isExpanded && (
          <div className="mt-4">
            {post.body.map((block) => (
              <p key={block._key} className="text-gray-700 text-base mb-2">
                {block.children.map((child) => child.text).join(' ')}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
