import React from "react";
import exampleData from "./examplesData";
import SingleExample from "./SingleExample";

const AiToolExample = () => {
  return (
    <div className="grid gap-7.5 pt-7.5 md:grid-cols-2 lg:grid-cols-3">
      {exampleData.map((example, id) => (
        <SingleExample key={id} example={example} />
      ))}
    </div>
  );
};

export default AiToolExample;
