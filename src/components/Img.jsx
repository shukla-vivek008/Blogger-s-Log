import { Image } from "@imagekit/react";

const Img = ({src, className, w, h, alt}) => {
  return (
      <Image 
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} 
      src={src} 
      className={className}
      loading="lazy"
      quality="20"
      width={w}
      height={h}
      alt={alt} 
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
      />
  );
};

export default Img;
