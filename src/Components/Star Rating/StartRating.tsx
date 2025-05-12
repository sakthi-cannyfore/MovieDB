import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
  popularity: number;
}

const StarRating: React.FC<StarRatingProps> = ({ popularity }) => {
  const ratingOutOfFive = Math.min(Math.max((popularity / 1000) * 5, 0), 5);

  const fullStars = Math.floor(ratingOutOfFive);
  const hasHalfStar = ratingOutOfFive - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
      {Array(fullStars).fill(0).map((_, index) => (
        <FaStar key={`full-${index}`} className="text-yellow-400 text-xs sm:text-sm md:text-base lg:text-lg" />
      ))}
      {hasHalfStar && (
        <FaStarHalfAlt className="text-yellow-400 text-xs sm:text-sm md:text-base lg:text-lg" />
      )}
      {Array(emptyStars).fill(0).map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="text-white text-xs sm:text-sm md:text-base lg:text-lg" />
      ))}
    </div>
  );
};

export default StarRating;
