'use client';

import { Range } from "react-date-range";

import Button from "../Button";
import Calendar from "../inputs/Calendar";
import { SafeUser } from "@/app/types";

interface ListingReservationProps {
  user?: SafeUser | null
  currentUser?: SafeUser | null
  price: number;
  dateRange: Range,
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
  title: string;
  description: string;
}

const ListingReservation: React.FC<
  ListingReservationProps
> = ({
  user,
  currentUser,
  title,
  description,
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
      
      if (currentUser?.id === undefined) {
        window.location.href = `https://react-os-three.vercel.app/space/${listingId}/${title}/${description}/${user?.name}`;
      } else if (currentUser?.id === user?.id) {
        window.location.href = `https://react-os-three.vercel.app/space/${listingId}/${currentUser?.name}/${currentUser?.id}/true/${title}/${description}/${user?.name}`;
      } else {
        window.location.href = `https://react-os-three.vercel.app/space/${listingId}/${currentUser?.name}/${currentUser?.id}/false/${title}/${description}/${user?.name}`;
      }
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