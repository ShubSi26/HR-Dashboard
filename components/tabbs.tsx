"use client";

import { useState } from "react";

const tabs = ["Overview", "Projects", "Feedback"] as const;
type Tab = typeof tabs[number];

export default function TabbedProfile({user}:{user?:any}) {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  const mockData = {
  Overview: (
    <div>
      <h2 className="text-xl font-semibold mb-2">Employee Overview</h2>
      <p>Name: {user.name.first+" " + user.name.last || "Jon"}</p>
      <p>Department: IT</p>
      <p>Position: Software Engineer</p>
    </div>
  ),
  Projects: (
    <div>
      <h2 className="text-xl font-semibold mb-2">Assigned Projects</h2>
      <ul className="list-disc pl-6">
        <li>Internal Dashboard Revamp</li>
        <li>API Gateway Migration</li>
        <li>Mobile App Support</li>
      </ul>
    </div>
  ),
  Feedback: (
    <div>
      <h2 className="text-xl font-semibold mb-2">Recent Feedback</h2>
      <p>“Great work under pressure.”</p>
      <p>“Needs to improve code documentation.”</p>
    </div>
  ),
};

  return (
    <div className="w-full h-full mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 -mb-px border-b-2 font-medium transition ${
              activeTab === tab ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="text-gray-800">{mockData[activeTab]}</div>
    </div>
  );
}
