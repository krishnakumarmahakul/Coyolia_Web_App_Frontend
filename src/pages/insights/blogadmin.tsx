import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  tags: string[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

const BlogAdmin: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: '',
    isPublished: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Axios default to send cookies
  axios.defaults.withCredentials = true;

  // Fetch all blogs on mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      // console.log('Fetching blogs...');
      const res = await axios.get('http://localhost:5000/api/v1/blogs');
      if (res.data.success) {
        setBlogs(res.data.data);
        // console.log('Blogs fetched:', res.data.data);
      }
    } catch (err) {
      // console.error('Error fetching blogs:', err);
      setError('Failed to fetch blogs.');
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes for form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // When selecting a blog from the list to edit
  const handleSelectBlog = (blog: Blog) => {
    setSelectedBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content,
      tags: blog.tags.join(', '),
      isPublished: blog.isPublished,
    });
    setError('');
    setSuccessMsg('');
  };

  // Clear form for creating new blog
  const clearForm = () => {
    setSelectedBlog(null);
    setFormData({ title: '', content: '', tags: '', isPublished: false });
    setError('');
    setSuccessMsg('');
  };

  // Create or update blog
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMsg('');

    // Prepare tags array by splitting by comma and trimming spaces
    const tagsArray = formData.tags.split(',').map((tag) => tag.trim());

    try {
      if (selectedBlog) {
        // Update blog
        // console.log('Updating blog:', selectedBlog._id);
        const res = await axios.put(
          `http://localhost:5000/api/v1/blogs/${selectedBlog._id}`,
          {
            title: formData.title,
            content: formData.content,
            tags: tagsArray,
            isPublished: formData.isPublished,
          }
        );
        if (res.data.success) {
          setSuccessMsg('Blog updated successfully!');
          // Refresh blogs list and select updated blog
          fetchBlogs();
          setSelectedBlog(res.data.data);
        }
      } else {
        // Create blog
        
        const res = await axios.post('http://localhost:5000/api/v1/blogs', {
          title: formData.title,
          content: formData.content,
          tags: tagsArray,
          isPublished: formData.isPublished,
        });
        if (res.data.success) {
          setSuccessMsg('Blog created successfully!');
          fetchBlogs();
          clearForm();
        }
      }
    } catch (err) {
      console.error('Error saving blog:', err);
      setError('Failed to save blog.');
    } finally {
      setLoading(false);
    }
  };

  // Delete a blog
  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    setLoading(true);
    setError('');
    setSuccessMsg('');

    try {
      // console.log('Deleting blog:', id);
      const res = await axios.delete(`http://localhost:5000/api/v1/blogs/${id}`);
      if (res.data.success) {
        setSuccessMsg('Blog deleted successfully!');
        fetchBlogs();
        // Clear form if deleted blog was selected
        if (selectedBlog?._id === id) clearForm();
      }
    } catch (err) {
      console.error('Error deleting blog:', err);
      setError('Failed to delete blog.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white text-[#21204c]">
  {/* Blogs List */}
  <aside className="w-1/3 border-r border-[#21204c] overflow-y-auto">
    <h2 className="text-2xl font-bold p-4 border-b border-[#21204c]">Blogs</h2>
    {loading && <p className="p-4">Loading blogs...</p>}
    {error && <p className="p-4 text-red-500">{error}</p>}
    {!loading && blogs.length === 0 && <p className="p-4">No blogs found.</p>}
    <ul>
      {blogs.map((blog) => (
        <li
          key={blog._id}
          className={`p-4 border-b border-[#7655b7] cursor-pointer hover:bg-[#7655b7] hover:text-white transition-colors ${
            selectedBlog?._id === blog._id ? 'bg-[#7655b7] text-white font-semibold' : ''
          }`}
          onClick={() => handleSelectBlog(blog)}
        >
          <h3 className="font-semibold">{blog.title}</h3>
          <p className="text-sm text-[#4b4a71]">{new Date(blog.createdAt).toLocaleDateString()}</p>
        </li>
      ))}
    </ul>
  </aside>

  {/* Blog Form Panel */}
  <section className="flex-1 p-8 max-w-3xl overflow-y-auto">
    <h2 className="text-3xl font-extrabold mb-6 text-[#21204c]">
      {selectedBlog ? 'Edit Blog' : 'Create New Blog'}
    </h2>

    {error && <p className="mb-4 text-red-500">{error}</p>}
    {successMsg && <p className="mb-4 text-green-600">{successMsg}</p>}

    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2 font-semibold text-[#21204c]" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 rounded border border-[#7655b7] text-[#21204c] focus:outline-none focus:ring-2 focus:ring-[#7655b7]"
          required
          maxLength={100}
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-[#21204c]" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full p-3 rounded border border-[#7655b7] text-[#21204c] h-40 resize-none focus:outline-none focus:ring-2 focus:ring-[#7655b7]"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-[#21204c]" htmlFor="tags">
          Tags (comma separated)
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="w-full p-3 rounded border border-[#7655b7] text-[#21204c] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7655b7]"
          placeholder="e.g. nodejs, javascript, backend"
        />
      </div>

      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="isPublished"
          name="isPublished"
          checked={formData.isPublished}
          onChange={handleChange}
          className="w-5 h-5 text-[#7655b7] focus:ring-[#7655b7]"
        />
        <label htmlFor="isPublished" className="font-semibold text-[#21204c] select-none">
          Published
        </label>
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#21204c] text-white font-bold px-6 py-3 rounded hover:bg-[#7655b7] transition-colors disabled:opacity-50"
        >
          {selectedBlog ? 'Update Blog' : 'Create Blog'}
        </button>
        {selectedBlog && (
          <button
            type="button"
            onClick={() => handleDelete(selectedBlog._id)}
            disabled={loading}
            className="bg-[#7655b7] text-white px-6 py-3 rounded hover:bg-[#5b3f9f] transition-colors disabled:opacity-50"
          >
            Delete Blog
          </button>
        )}
        <button
          type="button"
          onClick={clearForm}
          disabled={loading}
          className="bg-gray-300 text-[#21204c] px-6 py-3 rounded hover:bg-gray-400 transition-colors disabled:opacity-50"
        >
          Clear
        </button>
      </div>
    </form>
  </section>
</div>

  );
};

export default BlogAdmin;
