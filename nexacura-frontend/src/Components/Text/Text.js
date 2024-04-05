/**
 * The Text component in the provided JavaScript code dynamically applies font styles based on the
 * specified size prop.
 * @returns The `Text` component is being returned. It accepts props such as `children`, `className`,
 * `size`, `htmlTag`, and `restProps`. Inside the component, it determines the HTML tag to use based on
 * the `htmlTag` prop or defaults to `<p>`. It then applies classes based on the `size` prop using the
 * `sizeClasses` object and renders the children
 */
import React from "react";

const sizeClasses = {
  txtPoppinsMedium20Gray800: "font-medium font-poppins",
  txtPoppinsMedium14Gray90001: "font-medium font-poppins",
  txtPoppinsMedium20Gray90001: "font-medium font-poppins",
  txtPoppinsMedium24Indigo900: "font-medium font-poppins",
  txtPoppinsBold31: "font-bold font-poppins",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtOpenSansBold40: "font-bold font-opensans",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsMedium20WhiteA700: "font-medium font-poppins",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtPoppinsMedium18LightblueA700: "font-medium font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsBold40: "font-bold font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsRegular16Gray300: "font-normal font-poppins",
  txtPoppinsMedium16Gray90001: "font-medium font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsRegular14Gray90001: "font-normal font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsRegular16Gray700: "font-normal font-poppins",
  txtOpenSansSemiBold24: "font-opensans font-semibold",
  txtOpenSansBold40Indigo900: "font-bold font-opensans",
  txtPoppinsBold50: "font-bold font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsMedium16Gray800: "font-medium font-poppins",
  txtPoppinsMedium14Gray800: "font-medium font-poppins",
  txtInterRegular14: "font-inter font-normal",
  txtPoppinsSemiBold28: "font-poppins font-semibold",
  txtPoppinsRegular14Gray90002: "font-normal font-poppins",
  txtPoppinsMedium20Bluegray80001: "font-medium font-poppins",
  txtPoppinsMedium16Gray70001: "font-medium font-poppins",
  txtNunitoMedium16: "font-medium font-nunito",
  txtOpenSansBold24: "font-bold font-opensans",
  txtOpenSansSemiBold20: "font-opensans font-semibold",
  txtPoppinsRegular16Gray70001: "font-normal font-poppins",
  txtPoppinsRegular14Gray900cc: "font-normal font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsMedium16Gray60001: "font-medium font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsSemiBold24LightblueA700: "font-poppins font-semibold",
  txtPoppinsSemiBold18Bluegray400: "font-poppins font-semibold",
  txtInterRegular14Gray90033: "font-inter font-normal",
  txtPoppinsMedium14Gray70003: "font-medium font-poppins",
  txtPoppinsMedium20Gray70001: "font-medium font-poppins",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsMedium16WhiteA700: "font-medium font-poppins",
  txtPoppinsSemiBold24Gray90001: "font-poppins font-semibold",
  txtPoppinsRegular16Gray90001: "font-normal font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
  txtOpenSansBold50: "font-bold font-opensans",
  txtPoppinsRegular16Gray800: "font-normal font-poppins",
  txtPoppinsMedium40: "font-medium font-poppins",
  txtPoppinsMedium20Gray80001: "font-medium font-poppins",
  txtPoppinsRegular18Gray800: "font-normal font-poppins",
};

/**
 * The `Text` function in JavaScript is a component that renders text with specified styling and
 * properties.
 * @returns The Text component is being returned. It renders the children within the specified HTML tag
 * (default is "p") with additional classes based on the size prop and any custom className provided.
 */
function Text({ children, className = "", size, htmlTag, ...restProps }) {
  const Component = htmlTag || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
}

export default Text;
