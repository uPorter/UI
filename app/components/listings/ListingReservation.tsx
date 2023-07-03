'use client';

import { Range } from "react-date-range";

import Button from "../Button";
import Calendar from "../inputs/Calendar";

interface ListingReservationProps {
  price: number;
  dateRange: Range,
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<
  ListingReservationProps
> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates
}) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const handleClick = () => {
    const regex = /\/listings\/(.*)/;
    const match = currentUrl.match(regex);
    if (match && match[1]) {
      const listingId = match[1];
      console.log(listingId);
      window.location.href = 'https://react-os-three.vercel.app/space/' + listingId;
    }
  };

  return ( 
    <div 
      className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
      "
    >
      <hr />
      <div className="p-4">
        <Button 
          disabled={disabled} 
          label="Visit Space" 
          onClick={handleClick}
        />
      </div>
      <hr />
    </div>
   );
}
 
export default ListingReservation;