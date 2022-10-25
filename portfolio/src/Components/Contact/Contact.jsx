import React from "react";
import { banner1 } from "../../Assets/Index";
import Btn from "../Shares/Btn";
import Input from "../Shares/Input";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bgSubGradient py-10">
      <div className="px-2 md:px-0 md:container grid grid-cols-1 md:grid-cols-2 gap-5 text-white font-Courgette">
        <div data-aos="flip-down" className="hidden md:block">
          <img src={banner1} alt="" className="rounded-md" />
        </div>
        <div data-aos="zoom-in-down" className=" space-y-5">
          <h3 className=" text-[1.875rem] font-Audiowide mb-5 capitalize">
            Contact us
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-5"
          >
            <Input
              label={"Your Name..."}
              cStyle={"capitalize"}
              register={register}
            />
            <Input
              label={" email address..."}
              cStyle={"lowercase"}
              type="email"
              register={register}
            />
            <Input label={" comment..."} register={register} />
            <Btn child={"Submit"} cStyle="bg-gray-700" />
          </form>
        </div>
      </div>
    </div>
  );
}
