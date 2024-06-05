import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faComment, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
  const recipeCount = 10; // Hardcoded value
  const commentCount = 20; // Hardcoded value
  const userCount = 5; // Hardcoded value

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="dashboard-box bg-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FontAwesomeIcon icon={faUtensils} className="text-4xl mb-4" />
            <div className="text-center">
              <p className="text-xl">Total food recipes</p>
              <p className="text-2xl font-bold">{recipeCount}</p>
            </div>
          </div>
          <div className="dashboard-box bg-green-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FontAwesomeIcon icon={faComment} className="text-4xl mb-4" />
            <div className="text-center">
              <p className="text-xl">All comments</p>
              <p className="text-2xl font-bold">{commentCount}</p>
            </div>
          </div>
          <div className="dashboard-box bg-red-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FontAwesomeIcon icon={faUser} className="text-4xl mb-4" />
            <div className="text-center">
              <p className="text-xl">All users</p>
              <p className="text-2xl font-bold">{userCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
