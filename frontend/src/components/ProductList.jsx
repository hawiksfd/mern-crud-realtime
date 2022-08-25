import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <div className="flex flex-col mt-5">
      <div className="w-full">

        <Link to="/add"  
            className="
            bg-green-400 hover:bg-green-700 border-slate-200
            text-white font-bold py-2 px-4 rounded-lg"
            >Add New</Link>

        <div className="relative shadow rounded-lg mt-3">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th className="py-3 px-1 text-center">No</th>
                        <th className="py-3 px-6">Product Name</th>
                        <th className="py-3 px-6">Price</th>
                        <th className="py-3 px-1 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <td className="py-3 px-1 text-center"></td>
                        <td className="py-3 px-6 font-medium text-gray-900">Product 1</td>
                        <td className="py-3 px-6">2456</td>
                        <td className="py-3 px-1 text-center">
                          <Link to={`/edit/`}
                            className="font-medium bg-blue-400 hover:bg-blue-600 
                            text-white py-1 px-4 rounded mr-1">Edit</Link>
                            <button to="/edit"  
                            className="font-medium bg-red-400 hover:bg-red-600 
                            text-white py-1 px-4 rounded">delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default ProductList
