import axios from "axios";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  isPublished: boolean;
  createdAt: string;
}

const BLOG_API_URL = "http://localhost:5000/api/v1/blogs";

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(BLOG_API_URL);
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const toggleExpand = (id: string) => {
    setExpanded(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-xs text-gray-500 mb-4">
                    {new Date(blog.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  
                  <div className="prose prose-sm max-w-none text-gray-600 mb-4">
                    <p className={`whitespace-pre-line ${expanded === blog._id ? "" : "line-clamp-5"}`}>
                      {blog.content}
                    </p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <button
                    onClick={() => toggleExpand(blog._id)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    {expanded === blog._id ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;