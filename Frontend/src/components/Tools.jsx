import React from "react";
import { Link } from "react-router-dom";

function Tools() {
  const tools = [
    {
      id: 1,
      name: "Online Screen Recorder",
      url: "https://www.apowersoft.com/free-online-screen-recorder",
    },
    {
      id: 2,
      name: "Document Format Converter",
      url: "https://www.ilovepdf.com/pdf_to_word",
    },
    {
      id: 3,
      name: "React Documentation",
      url: "https://reactjs.org/docs/getting-started.html",
    },
    {
      id: 4,
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
    },
    {
      id: 5,
      name: "Stack Overflow",
      url: "https://stackoverflow.com/",
    },
    
  ];

  return (
    <div className="mt-[63px] mx-6 md:mx-20 flex flex-col min-h-[400px]  dark:bg-slate-900 dark:text-white px-4">
      
      <hr />
      
      <h1 className="mt-6 text-3xl font-bold mb-6 text-teal-400">Productivity Tools</h1>
      <ul className="space-y-4 text-lg">
        {tools.map((tool) => (
          <li key={tool.id}>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {tool.name}
            </a>
          </li>
        ))}
      </ul>

      <Link to="/">
        <button className="mt-6 mb-6 mr-3 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
          Back
        </button>
      </Link>
    </div>
  );
}

export default Tools;
