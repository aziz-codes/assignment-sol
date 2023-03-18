import { data } from "autoprefixer";
import React from "react";

const Testimonials = () => {
  const peoples = [
    {
      name: "Alex",
      designation: "Web Developer",
      avatar:
        "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Arrora",
      designation: "Database Administrator",
      avatar:
        "https://plus.unsplash.com/premium_photo-1666264200737-f1638c623270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Yankovich",
      designation: "Machine Developer",
      avatar:
        "https://images.unsplash.com/photo-1558499932-9609acb6f443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
  ];
  return (
    <section className="flex flex-col items-center mt-20 gap-16 ">
      <h4 className="text-4xl font-bold">Meet Our Team</h4>
      <div className="w-full px-4 flex gap-10 justify-center">
        {peoples.map((person, index) => (
          <div
            className="w-80 h-60 flex flex-col justify-start items-center pt-4 border"
            key={index}
          >
            <img
              src={person.avatar}
              className="h-32 w-32 rounded-full object-cover"
              alt="user"
            />
            <h2 className="font-bold text-lg p-2">{person.name}</h2>
            <div className="h-0.5 w-full px-4 bg-gray-300"></div>
            <h4 className="text-sm mt-3">{person.designation}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
