import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <nav className="flex flex-col justify-between w-20 bg-white border-r">
        <div className="mt-10 mb-10">
          <a href="#">
            <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80" className="object-cover w-10 h-10 mx-auto mb-3 rounded-full" />
          </a>
          <div className="mt-10">
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-500 transition duration-200 ease-in-out transform hover:text-blue-500 focus:shadow-outline hover:scale-95">
                  <p className="mx-auto text-center">
                    <svg className="w-5 h-5 mx-auto md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s-8-4.586-8-11V5l8-3 8 3v6c0 6.414-8 11-8 11z" />
                    </svg>
                    <span className="sr-only">home</span>
                  </p>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 transition duration-200 ease-in-out transform hover:text-blue-500 focus:shadow-outline hover:scale-95">
                  <p className="mx-auto text-center">
                    <svg className="w-5 h-5 mx-auto md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                    <span className="sr-only">notifications</span>
                  </p>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 transition duration-200 ease-in-out transform hover:text-blue-500 focus:shadow-outline hover:scale-95">
                  <p className="mx-auto text-center">
                    <svg className="w-5 h-5 mx-auto md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                      <path d="M22 12A10 10 0 0 0 12 2v10l10 5z" />
                    </svg>
                    <span className="sr-only">analytics</span>
                  </p>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 transition duration-200 ease-in-out transform hover:text-blue-500 focus:shadow-outline hover:scale-95">
                  <p className="mx-auto text-center">
                    <svg className="w-5 h-5 mx-auto md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M7 2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                    </svg>
                    <span className="sr-only">reports</span>
                  </p>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 transition duration-200 ease-in-out transform hover:text-blue-500 focus:shadow-outline hover:scale-95">
                  <p className="mx-auto text-center">
                    <svg className="w-5 h-5 mx-auto md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 3a8 8 0 1 1-8 8 8 8 0 0 1 8-8z" />
                      <path d="M22 14h-4l-3 6m-2-6H6l-3 6M2 18h4l3-6m2 6h8" />
                    </svg>
                    <span className="sr-only">account</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-4">
          <a href="#" className="text-gray-500 transition duration-200 ease-in-out transform hover:text-blue-500 focus:shadow-outline hover:scale-95">
            <p className="mx-auto text-center">
              <svg className="w-5 h-5 mx-auto md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6" />
              </svg>
              <span className="sr-only">logout</span>
            </p>
          </a>
        </div>
      </nav>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto 2xl:max-w-7xl sm:px-6 md:px-8">
              {/* === Remove and replace with your own content... === */}
              <div className="py-4">
                <div className="h-screen bg-white shadow-md border border-gray-200 border-dashed rounded-lg"></div>
              </div>
              {/* === End ===  */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
