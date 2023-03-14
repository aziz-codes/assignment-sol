import a1 from "../assets/assignment1.jpg";
import a2 from "../assets/assignment2.jpg";
import a3 from "../assets/assignment3.jpg";

const Card = () => {
  const cards = [
    {
      title: "Complete Assignment",
      image: a1,
      desc: "Assignment sol provides complete homework in just one click",
    },
    {
      title: "Multiple Courses",
      image: a2,
      desc: "AssignmentSol provides multiple computer science courses",
    },
    {
      title: "Templated Assignment",
      image: a3,
      desc: "AssignmentSol provides multiple template which you can choose according to your need of detailed answer.",
    },
  ];
  return (
    <section className="mt-10 flex flex-col items-center gap-x-16 text-white gap-4">
      <h2 className="text-black text-3xl font-semibold pb-4">
        AssignmentSol Provides You
      </h2>
      <div className="flex flex-wrap flex-row justify-evenly w-full">
        {cards.map((item, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <div className="container">
              <div className="card">
                <div className="front">
                  <img
                    src={item.image}
                    className="h-full w-full object-cover bg-cover"
                  />
                </div>
                <div className="back">
                  <h1 className="text-2xl font-semibold text-center">
                    {item.title}
                  </h1>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
            <h3 className="text-black text-lg font-bold">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
