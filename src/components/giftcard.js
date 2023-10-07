import React, { useState } from 'react';

function GiftCard() {
  // Defining a state variable and a function to update it
  const [sectionContent, setSectionContent] = useState(
    <div id='heading2'>
      <p id='subheading21'>Free dinner for 4 guests</p>
      <p id='subheading22'>To use your coupon, click the button below.</p>
    </div>
  );

  // function to change the content of the section
  const changeSectionContent = () => {
    // updating the content here based on your requirements
    const newContent = (
      <div id='heading2'>
        <p id='subheading22'>Your Coupon has been used.</p>
        <p>Please visit our restaurant to renew your gift card</p>
      </div>
    );

    // Setting the state variable to the new content
    setSectionContent(newContent);
  };

  return (
    <div>
      <div id='heading1'>
        <p id='subheading1'>Gift Card Page</p>
        <p id='subheading2'>Customer: Jennifer Smith</p>
      </div>
      
      {/* Using the state variable to render content */}
      <section>
        {sectionContent}

        <div className='button'>
          {/* Adding a button to trigger content change */}
          <button onClick={changeSectionContent}>Change Content</button>
        </div>
      </section>
    </div>
  );
}

export default GiftCard;
