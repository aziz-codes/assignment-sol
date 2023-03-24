import React from "react";
import wajahat from "../assets/wajahat.jpg";
import naveed from "../assets/naveed.jpg";

const Testimonials = () => {
  const peoples = [
    {
      name: "Wajahat",
      designation: "Web Developer",
      avatar: wajahat,
    },
    {
      name: "Naveed",
      designation: "Database Administrator",
      avatar: naveed,
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
              className="h-28 w-28 rounded-full object-fill"
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
