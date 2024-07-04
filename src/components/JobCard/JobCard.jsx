import React from "react";
import dayjs from 'dayjs'
function JobCard(props){

  const date1 = dayjs(Date.now());
  const dateDiff = date1.diff(props.postedOn, 'day');
//   const skills = ["react", "node"]
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-gray-400 text-gray-800 rounded-md border border-black shadow-lg hover:border-blue-500">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">{props.title} - {props.company}</h1>
          <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
          <div className="flex items-center gap-2 ">
            {props.skills.map((skill) => (
              <p className="text-white py-1 px-2 border rounded-md border-gray-300">{skill}</p>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
            <p className="text-gray-300">posted { (dateDiff > 1)? `on ${dateDiff} days ago`: `on ${dateDiff} day ago`} </p>
            <a href={props.joblink}>
            <button className="text-blue-600 border border-blue-600 rounded-md px-2 py-1">Apply</button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
