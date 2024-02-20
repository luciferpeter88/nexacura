import React from "react";
import Button from "../../Components/Button/Button";

function HomePage() {
  return (
    <div class="">
      {/* <!-- First Section --> */}
      <div
        style={{
          backgroundImage: `url(/img/bg.jpeg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        class="grid grid-cols-1 xl:grid-cols-2 px-10 pt-24 pb-32 text-white"
      >
        <div class="flex flex-col gap-y-3">
          <h1 class="text-5xl font-bold font-sans ">
            Chat with History's Legends Through AI
          </h1>
          <p class="text-lg">
            {" "}
            Connect with the greatest minds in history from the comfort of your
            home. Engage in conversations with iconic historical figures like
            Isaac Newton and Albert Einstein through our AI-powered platform.
            Our cutting-edge AI technology brings these historical figures to
            life in interactive and educational chats.
          </p>
          <div>
            <Button />
          </div>
        </div>
        <div class="bg-red-300">Div 2</div>
      </div>

      {/* <!-- Second Section --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div class="bg-blue-200">Div 1</div>
        <div class="bg-blue-300">Div 2</div>
        <div class="bg-blue-400">Div 3</div>
        <div class="bg-blue-500">Div 4</div>
      </div>

      {/* <!-- Third Section --> */}
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div class="bg-green-200">Div 1</div>
        <div class="bg-green-300">Div 2</div>
      </div>

      {/* <!-- Fourth Section --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div class="bg-yellow-200">Div 1</div>
        <div class="bg-yellow-300">Div 2</div>
        <div class="bg-yellow-400">Div 3</div>
        <div class="bg-yellow-500">Div 4</div>
      </div>

      {/* <!-- Fifth Section --> */}
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div class="bg-purple-200">Div 1</div>
        <div class="bg-purple-300">Div 2</div>
      </div>

      {/* <!-- Sixth Section --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div class="bg-pink-200">Div 1</div>
        <div class="bg-pink-300">Div 2</div>
        <div class="bg-pink-400">Div 3</div>
        <div class="bg-pink-500">Div 4</div>
      </div>

      {/* <!-- Footer --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div class="bg-gray-200">Div 1</div>
        <div class="bg-gray-300">Div 2</div>
        <div class="bg-gray-400">Div 3</div>
        <div class="bg-gray-500">Div 4</div>
      </div>
    </div>
  );
}

export default HomePage;
