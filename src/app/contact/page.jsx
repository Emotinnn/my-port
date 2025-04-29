export default function ContactPage() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Me</h1>
                <div className="space-y-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">Message</h2>
                        <p className="text-gray-600">Feel free to reach out to me for any inquiries or collaborations!</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">Phone Number</h2>
                        <p className="text-gray-600">+66 93 134 5179</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">Email</h2>
                        <p className="text-gray-600">example@email.com</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">GitHub</h2>
                        <a
                            href="https://github.com/Emotinnn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            github.com/Emotinnn
                        </a>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">Instagram</h2>
                        <a
                            href="https://instagram.com/phanuwat_emotin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            instagram.com/phanuwat_emotin
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}