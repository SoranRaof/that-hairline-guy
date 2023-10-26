import {
  clientBeforePhotoArr,
  clientAfterPhotoArr,
} from "@/utils/ClientPhotoArr";
import Slider from "./Slider";

const Gallery = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl">RESULTS</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {clientAfterPhotoArr.map((client, index) => {
          return (
            <Slider
              key={`client${index}`}
              clientAfter={client}
              clientBefore={clientBeforePhotoArr[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
