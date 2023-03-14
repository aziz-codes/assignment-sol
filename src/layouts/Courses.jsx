const Courses = () => {
  const courses = [
    "Software Engineering",
    "Software Testing",
    "Software Project Testing",
    "Software Quality Engineering",
    "Database System",
    "Software Requirement Engineering",
    "Introductoin to Computing",
    "Object Oriented Programming",
    "Operating System",
    "Principles of Information Technology",
  ];
  return (
    <section className="flex flex-col justify-center text-center my-6 gap-6">
      <h2 className="text-2xl font-semibold">Courses</h2>
      <div className="w-full flex flex-row flex-wrap gap-12 lg:px-24 px-6 justify-center lg:justify-start">
        {courses.map((c, index) => (
          <div
            key={index}
            className="shadow-md border rounded-sm  px-2 h-14 w-80 flex items-center"
          >
            <h2 className="font-[600] my-auto">{c}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
