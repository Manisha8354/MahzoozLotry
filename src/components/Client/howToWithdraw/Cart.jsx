import React from "react";

export default function Cart(props) {
  return (
    <div>
      <div className="border-2 p-3 bc relative mt-16 h-[320px] mb-7">
        {/* Circle containing the index */}
        <div className="absolute w-[100px] h-[100px] bg -top-14 left-1/2 -translate-x-1/2 rounded-full flex justify-center items-center">
          <h1 className="text-2xl text-white font-bold">{props.index}</h1>
        </div>

        <div className="pt-14">
          {/* Display the main image */}
          {props.image && <img src={props.image} alt="Step Image" />}

          {/* Display balance summary if provided */}
          <div className='flex gap-3 justify-center items-center'>
          {props.button}
          {props.button2}
          </div>

          {/* Paragraphs, only render if they exist */}
          {props.paragraph && <p className="text-xl">{props.paragraph}</p>}
          {props.paragraph2 && <p>{props.paragraph2}</p>}
        </div>
      </div>
    </div>
  );
}