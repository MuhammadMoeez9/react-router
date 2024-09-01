import React from "react";

function Aboutus() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_an_AI_Engineer.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Us
            </h1>
            <p className="mb-8 leading-relaxed">
              In the future, AI will revolutionize the furniture industry by
              seamlessly blending functionality, aesthetics, and sustainability.
              AI-driven design algorithms will create custom furniture tailored
              to individual needs, optimizing for comfort, space, and personal
              style. By analyzing trends and materials, AI will ensure that
              furniture is not only beautiful but also eco-friendly, using
              innovative techniques to reduce waste and enhance durability.
              Additionally, AI will automate the manufacturing process, enabling
              rapid production of high-quality, customizable pieces, making
              unique and affordable furniture accessible to everyone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
