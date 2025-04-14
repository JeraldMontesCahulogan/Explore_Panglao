import blog1 from "../assets/islandHopping1.jpg";
import resortDay1 from "../assets/resortDay1.jpg";
import hinagdan from "../assets/honagdan.jpg";
import kayak from "../assets/kayak1.jpg";

const BlogSection = () => {
  const blogs = [
    {
      image: blog1,
      title: "Panglao Island Hopping",
      category: "Travel",
      views: "23k+",
      comments: 45,
      alt: "Island hopping tour in Panglao",
    },
    {
      image: resortDay1,
      title: "Resort Day Passes",
      category: "Travel",
      views: "23k+",
      comments: 45,
      alt: "Luxury resort with pools and beach",
    },
    {
      image: hinagdan,
      title: "Panglao Inland Tour",
      category: "Travel",
      views: "23k+",
      comments: 45,
      alt: "Hinagdan Cave with clear water",
    },
    {
      image: kayak,
      title: "Kayak Sunset Tour",
      category: "Travel",
      views: "23k+",
      comments: 45,
      alt: "Sunset kayaking in Panglao",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 scroll-mt-8" id="blogs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-medium md:text-xl">
            Blog Post
          </span>
          <h2 className="text-4xl font-bold mt-2">Our Latest Blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-indigo-600 text-sm font-medium mb-2">
                  {blog.category}
                </div>
                <h3 className="text-xl font-bold mb-4">{blog.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                      <span className="text-xs">{blog.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-500 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                    <span className="text-gray-600 text-sm">
                      {blog.views} view
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
