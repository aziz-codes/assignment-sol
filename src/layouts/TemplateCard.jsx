const TemplateCard = () => {
  const template = [
    {
      title: "Easy Template",
      attributes: ["Difinition"],
      isBlank: false,
    },
    {
      title: "Medium Template",
      attributes: ["Difinition", "Example", "Diagram"],
      isBlank: false,
    },
    {
      title: "Complex Template",
      attributes: [
        "Difinition",
        "Example",
        "Advantages",
        "Disadvantages",
        "Diagram",
      ],
      isBlank: false,
    },
    {
      title: "Blank Template",
      attributes: [
        "Any type of reasoning, question answer will be placed here",
      ],
      isBlank: true,
    },
  ];
  return (
    <section className="flex flex-row gap-4 justify-evenly flex-wrap">
      {template.map((temp, index) => (
        <div
          key={index}
          className="h-60 w-48 border py-2 text-center px-2 flex flex-col gap-3 shadow-md rounded-sm"
        >
          <h4 className="text-lg font-semibold">{temp.title}</h4>
          <ul className="text-gray-500 ">
            {temp.attributes.map((attr, i) => (
              <div key={i}>
                {!temp.isBlank ? (
                  <li className="flex gap-2">
                    <span>{`${i})`}</span>
                    <label>{attr}</label>
                  </li>
                ) : (
                  <p>{attr}</p>
                )}
              </div>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default TemplateCard;
