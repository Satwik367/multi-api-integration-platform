import { Link } from "react-router-dom";

import apiList from "../utils/apiList";

function APIMarketplace() {

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold mb-8">

                API Marketplace

            </h1>

            <div className="grid grid-cols-2 gap-6">

                {

                    apiList.map((api) => (

                        <div

                            key={api.id}

                            className="bg-white shadow rounded-lg p-6"

                        >

                            <h2 className="text-2xl font-semibold">

                                {api.title}

                            </h2>

                            <p className="text-gray-500 mt-2">

                                {api.description}

                            </p>

                            <Link

                                to={api.route}

                            >

                                <button

                                    className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"

                                >

                                    Open

                                </button>

                            </Link>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default APIMarketplace;