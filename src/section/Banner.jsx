import Container from "../components/Container"
import banner from "../images/banner.jpg"


function Banner() {
  return (
    <div>
        <Container className="flex mt-12">
            <div className="w-1/2">
                <h1 className="text-[40px] text-[#CF0000] font-bold my-3 p-[20px] dark:text-[#f1f2f6]">Task  Management</h1>
                <p className="text-[20px] text-[#57606f] p-[20px] dark:text-[#ced6e0]">There are many variations of passages of Lorem Ipsum available, butfg the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
            </div>
            <div className="w-1/2">
                <img className="rounded-md" src={banner} alt="Banner Image" />
            </div>
        </Container>
    </div>
  )
}

export default Banner