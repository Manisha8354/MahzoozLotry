import React from "react";
import Card from "./Card";

// Importing images
import image1 from "../../assets/withdraw image.webp";
import withdrawImage from "../../assets/how_to_withdraw_step_1_b964034907.png";
import withdrawImage2 from "../../assets/how_to_withdraw_step_4_5c6cb2907a.png";
import withdrawImage3 from "../../assets/how_to_withdraw_step_5_220146c49c.png";
import withdrawImage4 from "../../assets/how_to_withdraw_step_6_d78059ebb9.png";
import withdrawImage5 from "../../assets/how_to_withdraw_step_7_c821ae3605.png";
import withdrawImage6 from "../../assets/how_to_withdraw_step_8_d744bdb15e.png";

export default function CardDetail() {
  // Set up images dynamically if needed
  const images = [
    withdrawImage,
    withdrawImage2,
    withdrawImage3,
    withdrawImage4,
    withdrawImage5,
    withdrawImage6,
  ];

  // Set up other content dynamically
  const balanceSummery = (
    <button className="uppercase bg-[#bee9d2] text-white py-2 px-4 rounded-lg font-bold">
      Balance Summary
    </button>
  );
  const transfer = (
    <button className="uppercase  bg-[#bee9d2] text-white py-2 px-4 rounded-lg font-bold">
      Transfer
    </button>
  );
  const withdraw = (
    <button className="uppercase  bg-[#bee9d2] text-white py-2 px-4 rounded-lg font-bold">
      Withdraw
    </button>
  );

  return (
    <>
      {/* Display header image */}
      <img src={image1} alt="Withdraw Banner" className="m-auto mt-5" />

      {/* Grid of Card components */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 px-14 mt-5 gap-5">
        {/* Card for Step 1 */}
        <Card
          image={images[0]}
          paragraph="Log in to your account at [Company Name]"
          index="1"
        />

        {/* Card for Step 2 */}
        <Card
          button={balanceSummery}
          paragraph="Hover over the Total Balance tab."
          paragraph2="*If no withdrawal/transfer request is placed within 60 days from the date of winning, the winning amount would be forfeited."
          index="2"
        />

        {/* Card for Step 3 */}
        <Card
          button={withdraw}
          button2={transfer}
          paragraph="Click on Transfer/Withdraw To withdraw your Winnings, enter the withdrawal amount."
          paragraph2="*If the withdrawal request is placed for a partial amount within 60 days, any remaining winnings will be automatically moved to Credit Balance"
          index="3"
        />

        {/* Card for Step 4 */}
        <Card
          image={images[1]}
          paragraph="Choose your withdrawal method."
          index="4"
        />

        {/* Card for Step 5 */}
        <Card
          image={images[2]}
          paragraph="Fill out the relevant details to complete the withdrawal process."
          index="5"
        />

        {/* Card for Step 6 */}
        <Card
          image={images[3]}
          paragraph="You will receive a confirmation of your withdrawal via email or SMS."
          index="6"
        />

        {/* Card for Step 7 */}
        <Card
          image={images[4]}
          paragraph="Congratulations on your Saturday win, time to play again!"
          index="7"
        />

        {/* Card for Step 8 */}
        <Card
          image={images[5]}
          paragraph="Millionaires are made on Saturday."
          index="8"
        />
      </div>
    </>
  );
}