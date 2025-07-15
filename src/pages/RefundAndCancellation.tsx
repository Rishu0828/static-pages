import React from 'react';

const RefundAndCancellation: React.FC = () => {
  return (
    <div className="w-full px-4 py-12 sm:px-6 lg:px-8 max-w-3xl mx-auto text-black dark:text-white">
      <h1 className="text-3xl font-bold italic mb-4">Refund & Cancellation Policy</h1>
      <p className="text-lg text-gray-300">
        There is a <span className="font-semibold">strict no refund & no cancellation policy</span>.
        You are entitled to a refund only if you have <span className="font-semibold ">not been allotted the course</span> after payment.
      </p>
    </div>
  );
};

export default RefundAndCancellation;
