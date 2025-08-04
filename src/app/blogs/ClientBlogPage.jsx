"use client";

import Link from "next/link";
import Image from "next/image";

const ClientBlogPage = ({ blogs }) => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gray-100 rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold mb-4">
                SEO & Web Insights
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                SEO & Digital Growth Blog by Lakhan Verma
              </h1>

              <p className="text-xl text-gray-700 mb-8 max-w-3xl">
                Actionable articles on search engine optimization, web development,
                and digital strategy by Jaipur's top SEO specialist.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                  🔍 SEO
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                  💻 Web Development
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm">
                  📈 Marketing
                </span>
              </div>
            </div>
            <div className="md:w-1/3 relative">
              <div className="aspect-square w-full h-full relative">
                <Image
                  src="/images/lakhan-profile.png"
                  alt="Lakhan Verma SEO Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-800 text-white p-6 md:p-8">
            <div className="md:flex justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Lakhan Verma</h3>
                <p className="text-blue-100">
                  SEO Expert & Full Stack Developer | WordPress, Shopify, Wix
                </p>
              </div>
              <div className="space-y-2">
                <p>📍 Jaipur, Rajasthan</p>
                <p>📞 +91 95889 38487</p>
                <p>📧 lakhankumar222000@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={blog.image || "/images/seo-blog-placeholder.jpg"}
                  alt={blog.alt || blog.title}
                  fill
                  className="object-cover"
                />
                {blog.tags && blog.tags[0] && (
                  <span className="absolute top-4 left-4 bg-blue-800 text-white text-xs px-3 py-1 rounded-full">
                    {blog.tags[0]}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3 text-sm text-gray-500">
                  <span>
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-blue-600">{blog.author}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600">
                  <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h2>
                <p className="text-gray-700 mb-5 line-clamp-3">
                  {blog.excerpt || blog.content.substring(0, 150)}...
                </p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="inline-block text-sm font-medium bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Read Full Article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientBlogPage;