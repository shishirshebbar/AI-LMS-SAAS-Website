import { Button } from '@/components/ui/button';
import React from 'react';

function Progress({ count, setcount, data }) {
  return (
    <div className='flex gap-5 items-center mt-5'>
      {/* Previous Button */}
      {count > 0 && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setcount(count - 1)} // Decrement count
        >
          Previous
        </Button>
      )}

      {/* Progress Bars */}
      {data?.map((item, index) => (
        <div
          key={index}
          className={`w-full h-2 rounded-full ${
            index < count ? 'bg-primary' : 'bg-gray-200'
          }`}
        />
      ))}

      {/* Next Button */}
      {count < data.length && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setcount(count + 1)} // Increment count
        >
          Next
        </Button>
      )}
    </div>
  );
}

export default Progress;
