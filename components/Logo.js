import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/assets/images/logo_text.png"
      width={300}
      height={70}
      layout="intrinsic"
      alt="logo without text"
    />
  );
};

export default Logo;
