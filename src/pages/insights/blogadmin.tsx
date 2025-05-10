// // src/pages/AdminDashboard.tsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// interface Blog {
//   _id: string;
//   title: string;
//   content: string;
//   author: string;
//   image?: {
//     url: string;
//   };
// }

// const Blogadmin: React.FC = () => {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           navigate('/blog');
//           return;
//         }

//         const res = await axios.get('http://localhost:5000/api/admin/blogs', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setBlogs(res.data.data);
//       } catch (error) {
//         console.error('Error fetching blogs:', error);
//         localStorage.removeItem('token');
//         navigate('/blog');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, [navigate]);

//   const handleDelete = async (id: string) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`http://localhost:5000/api/admin/blogs/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setBlogs(blogs.filter(blog => blog._id !== id));
//     } catch (error) {
//       console.error('Error deleting blog:', error);
//       setError('Failed to delete blog');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/blog');
//   };

//   return (
//     <div className="min-h-screen bg-white text-[#21204c] px-6 py-4">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <div>
//           <button
//             onClick={() => navigate('/admin/create')}
//             className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition mr-2"
//           >
//             Create New Blog
//           </button>
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {error && <p className="text-red-500 mb-4">{error}</p>}
      
//       {loading ? (
//         <p>Loading blogs...</p>
//       ) : blogs.length === 0 ? (
//         <p>No blogs available.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {blogs.map((blog) => (
//             <div key={blog._id} className="bg-white text-[#21204c] rounded-lg p-4 shadow-md relative">
//               <div className="absolute top-2 right-2 flex space-x-2">
//                 <button
//                   onClick={() => navigate(`/admin/edit/${blog._id}`)}
//                   className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(blog._id)}
//                   className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//               {blog.image?.url && (
//                 <img
//                   src={blog.image.url}
//                   alt={blog.title}
//                   className="w-full h-48 object-cover rounded-md mb-3"
//                 />
//               )}
//               <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
//               <p className="text-sm">{blog.content.slice(0, 120)}...</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Blogadmin;
import React from 'react';

const Blogadmin: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-[#21204c]">
      <h1 className="text-3xl font-bold">Hello Blog Admin</h1>
    </div>
  );
};

export default Blogadmin;
