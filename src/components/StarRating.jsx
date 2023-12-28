import { Rating } from "react-simple-star-rating";

export default function StarRating({ value }) {
  return (
    <Rating
      fillColor={"#FFDF00"}
      readonly={true}
      initialValue={value}
      size="23"
    />
  );
}
