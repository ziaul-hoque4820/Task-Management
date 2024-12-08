import Container from "../components/Container";
import banner from "../images/banner.jpg";

function Banner() {
  return (
    <div>
      <Container className="flex flex-col lg:flex-row mt-12">
        <div className="lg:w-1/2 w-full text-center lg:text-left px-4">
          <h1 className="text-[28px] lg:text-[40px] text-[#CF0000] font-bold my-3 dark:text-[#f1f2f6]">
            Task Management
          </h1>
          <p className="text-[16px] lg:text-[20px] text-[#57606f] dark:text-[#ced6e0]">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum
          </p>
        </div>
        <div className="lg:w-1/2 w-full px-4 mt-6 lg:mt-0">
          <img className="rounded-md mx-auto lg:mx-0" src={banner} alt="Banner Image" />
        </div>
      </Container>
    </div>
  );
}

export default Banner;
