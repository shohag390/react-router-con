import React from 'react';

const Blog = () => {
    return (
        <div id='blog' className='container mx-auto px-[80px] h-[100vh] w-[100%] bg-[#400154]'>
            <div class="flex flex-col items-center space-y-10 mt-10">
                {/* Step 1  */}
                <div class="relative flex flex-col items-center">
                    <div class="bg-slate-800 text-white px-6 py-4 rounded-xl shadow-lg text-center w-72">
                        👨‍💻<br />
                        <strong>Client Consultation</strong><br />
                        <span class="text-sm">Meet with client to discuss project requirements and goals.</span>
                    </div>
                    {/* Connector */}
                    <div class="h-10 w-px border-l-2 border-dashed border-gray-500"></div>
                    <div class="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-500"></div>
                </div>

                {/* Step 2 */}
                <div class="relative flex flex-col items-center">
                    <div class="bg-slate-800 text-white px-6 py-4 rounded-xl shadow-lg text-center w-72">
                        📅<br />
                        <strong>Discovery & Planning</strong><br />
                        <span class="text-sm">Create a detailed project plan, timeline, and resource allocation.</span>
                    </div>
                    {/*  Connector */}
                    <div class="h-10 w-px border-l-2 border-dashed border-gray-500"></div>
                    <div class="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-500"></div>
                </div>

                {/* Step 3 */}
                <div class="relative flex flex-col items-center">
                    <div class="bg-slate-800 text-white px-6 py-4 rounded-xl shadow-lg text-center w-72">
                        🎨<br />
                        <strong>Design & Architecture</strong><br />
                        <span class="text-sm">Develop UI/UX designs and get client approval.</span>
                    </div>
                    {/* Connector */}
                    <div class="h-10 w-px border-l-2 border-dashed border-gray-500"></div>
                    <div class="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-500"></div>
                </div>

                {/* Step 4 */}
                <div class="relative flex flex-col items-center">
                    <div class="bg-slate-800 text-white px-6 py-4 rounded-xl shadow-lg text-center w-72">
                        💻<br />
                        <strong>Development & Training</strong><br />
                        <span class="text-sm">Code the software according to approved designs and spec.</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;