const apis = [
    {
        id: 1,
        name: "Weather API",
        description: "Get current weather information",
        color: "bg-blue-500"
    },
    {
        id: 2,
        name: "GitHub API",
        description: "Fetch GitHub user and repository data",
        color: "bg-black"
    },
    {
        id: 3,
        name: "News API",
        description: "Latest news headlines",
        color: "bg-red-500"
    },
    {
        id: 4,
        name: "Currency API",
        description: "Live currency exchange rates",
        color: "bg-green-600"
    },
    {
        id: 5,
        name: "OpenAI API",
        description: "AI Chat and Text Generation",
        color: "bg-purple-600"
    }
];

function APIMarketplace() {

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold mb-8">

                API Marketplace

            </h1>

            <div className="grid grid-cols-3 gap-6">

                {apis.map((api) => (

                    <div
                        key={api.id}
                        className="bg-white rounded-lg shadow-lg p-6"
                    >

                        <div
                            className={`w-12 h-12 rounded-full ${api.color} mb-4`}
                        ></div>

                        <h2 className="text-xl font-semibold">

                            {api.name}

                        </h2>

                        <p className="text-gray-500 mt-2">

                            {api.description}

                        </p>

                        <button
                            className="mt-6 w-full bg-blue-600 text-white py-2 rounded"
                        >

                            Connect

                        </button>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default APIMarketplace;