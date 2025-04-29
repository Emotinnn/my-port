import React from 'react';

function AboutPage() {
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center">
        <div className="container mx-auto relative mt-5">
            <div data-aos="fade-down">
                <p className="text-2xl font-black text-center">About Me</p>
                <p className="text-center mt-2 text-lg text-shadow-lg/40">
                Graduated with a degree in software engineering at CAMT, Chiang Mai University.<br />
                who has a strong interest in software testing and business analysis eager to put knowledge to <br />
                maximum use ready to listen to other people's opinions and ready to develop yourself regularly.
            </p>
            </div>

            {/* Text boox */}
            <div className="my-10 flex justify-start" data-aos="fade-right">
            <a className="backdrop-blur-xl bg-white/60 mb-5 flex flex-col md:flex-row items-center bg-white border border-blue-200 rounded-lg shadow md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                    <img
                        className="object-cover w-64 h-64 rounded-t-lg md:h-auto md:w-64 md:rounded-none md:rounded-l-lg"
                        src="/assets/Cetification.jpg"
                        alt=""
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-left">
                        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                         Internship I&I Group PCL 
                        </h5>
                        <p className="mb-2 font-normal text-justify text-gray-900 dark:text-gray-500">
                        I am an intern as a Quality Assurance. Experience doing test case, test step, UAT and execute test in Salesforce, I have experience to prepare test case matrix AI about car detection for car claim, report defect to developer and review test case
                        </p>
                    </div>
                </a>
            </div>
        </div>
        </div>
    );
}

export default AboutPage;
