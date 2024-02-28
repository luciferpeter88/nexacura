import React from "react";
import Text from "../../Components/Text/Text";
import OutlineButton from "../../Components/Button/OutlineButton";

function VerifyingEmail() {
  const [otp, setOtp] = React.useState(["", "", "", ""]);

  const handleChange = (index) => (e) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the OTP verification logic here
    console.log(otp.join(""));
  };

  const handleResendOTP = () => {
    // Handle OTP resend logic here
    console.log("OTP Resend");
  };

  return (
    <div>
      <Text
        className="text-2xl text-center text-primary mt-24 mb-5"
        size="txtOpenSansBold50"
        htmlTag="h1"
      >
        Please verify your email
      </Text>
      <Text className="text-gray-500 text-lg text-center mb-10">
        We have sent a verification email to your email address.{" "}
      </Text>
      <div className=" mx-auto border max-w-sm mt-20 rounded">
        <form className="shadow-md px-4 py-6" onSubmit={handleSubmit}>
          <div className="flex justify-center gap-2 mb-6">
            {otp.map((value, index) => (
              <input
                key={index}
                className="w-12 h-12 text-center border focus:outline-primary rounded-md shadow-sm "
                type="text"
                maxLength="1"
                pattern="[0-9]"
                inputMode="numeric"
                autoComplete="one-time-code"
                required
                value={value}
                onChange={handleChange(index)}
              />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <OutlineButton
              borderColor="border-primary"
              hoverBorderColor="hover:border-secondary"
              textColor="text-white"
              hoverTextColor="hover:text-secondary"
              buttonText="Send"
              hoverBackgroundColor="hover:bg-transparent"
              backgroundColor="bg-primary"
              width=" w-[5rem]"
            />
            <button
              className="inline-block align-baseline font-bold text-sm text-secondary hover:text-primary ml-4"
              type="button"
              onClick={handleResendOTP}
            >
              Resend OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VerifyingEmail;
