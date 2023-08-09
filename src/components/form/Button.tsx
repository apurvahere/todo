import { createElement, forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import classNames from "classnames";

type SVGComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

export type ButtonBaseProps = {
  variant?: "solid" | "outlined" | "ghost" | "soft" | "link" | "white";
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "dark"
    | "danger"
    | "warning"
    | "light";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  StartIcon?: SVGComponent;
  startIconClassName?: string;
  EndIcon?: SVGComponent;
  endIconClassName?: string;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export type ButtonProps = ButtonBaseProps &
  (
    | (Omit<JSX.IntrinsicElements["a"], "href" | "onClick"> & LinkProps)
    | (Omit<JSX.IntrinsicElements["button"], "onClick"> & { href?: never })
  );

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  function Button(props: ButtonProps, forwardedRef) {
    const {
      variant = "solid",
      color = "primary",
      size = "md",
      loading = false,
      StartIcon,
      startIconClassName,
      EndIcon,
      endIconClassName,
      rounded = true,
      fullWidth,
      ...otherProps
    } = props;
    const disabled = props.disabled || loading;
    const isLink = typeof props.href !== "undefined";
    const elementType = isLink ? "a" : "button";
    const element: any = createElement(
      elementType,
      {
        ...otherProps,
        disabled,
        ref: forwardedRef,
        className: classNames(
          "inline-flex items-center",
          //solid
          variant === "solid"
            ? color === "primary"
              ? "bg-blue-500 hover:bg-blue-600 text-white focus:bg-blue-500 focus:shadow-light-gray disabled:bg-blue-300"
              : color === "secondary"
              ? "bg-gray-500 hover:bg-gray-600 text-white focus:bg-gray-500 focus:shadow-light-gray disabled:bg-gray-300"
              : color === "info"
              ? "bg-teal-500 hover:bg-teal-600 text-white focus:bg-teal-500 focus:shadow-light-gray disabled:bg-teal-300"
              : color === "dark"
              ? "bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-800 focus:shadow-light-gray disabled:bg-gray-300"
              : color === "danger"
              ? "bg-red-500 hover:bg-red-600 text-white focus:bg-red-500 focus:shadow-light-gray disabled:bg-red-300"
              : color === "warning"
              ? "bg-yellow-500 hover:bg-yellow-600 text-white focus:bg-yellow-500 focus:shadow-light-gray disabled:bg-yellow-300"
              : color === "light"
              ? "bg-white hover:bg-white text-black focus:bg-white disabled:bg-white disabled:text-gray-300"
              : ""
            : "",
          //outlined
          variant === "outlined"
            ? color === "primary"
              ? "border-2 border-solid border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white focus:text-blue-500  focus:bg-white focus:shadow-light-primary disabled:text-blue-300 disabled:bg-white disabled:border-blue-300"
              : color === "secondary"
              ? "border-2 border-solid border-gray-500 text-gray-500 hover:bg-gray-600 hover:text-white focus:text-gray-500 focus:bg-white focus:shadow-light-gray disabled:bg-white disabled:border-gray-200 disabled:text-gray-200"
              : color === "info"
              ? "border-2 border-solid border-teal-500 text-teal-500 hover:bg-teal-600 hover:text-white focus:text-teal-500 focus:bg-white focus:shadow-light-teal disabled:text-teal-300 disabled:bg-white disabled:border-teal-300"
              : color === "dark"
              ? "border-2 border-solid border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white focus:text-gray-800 focus:bg-white focus:ring-gray-800 focus:shadow-light-gray disabled:bg-white disabled:border-gray-300  disabled:text-gray-300"
              : color === "danger"
              ? "border-2 border-solid border-red-500 text-red-500 hover:bg-red-600 hover:text-white focus:text-red-500 focus:bg-white focus:shadow-light-danger disabled:text-red-300 disabled:bg-white disabled:border-red-300"
              : color === "warning"
              ? "border-2 border-solid border-yellow-500 text-yellow-500 hover:bg-yellow-600 hover:text-white focus:text-yellow-500 focus:bg-white focus:shadow-light-warning disabled:text-yellow-300 disabled:bg-white disabled:border-yellow-300"
              : color === "light"
              ? "border-2 border-solid border-white hover:bg-white text-black focus:bg-white disabled:bg-white disabled:text-gray-300"
              : ""
            : "",
          //ghost
          variant === "ghost"
            ? color === "primary"
              ? "text-blue-500 bg-white hover:bg-blue-100 hover:text-blue-500 focus:text-blue-500 focus:bg-white focus:shadow-light-primary disabled:text-blue-200"
              : color === "secondary"
              ? "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-500 focus:text-gray-500 focus:bg-white focus:shadow-light-gray disabled:text-gray-300"
              : color === "info"
              ? "text-teal-500 bg-white hover:bg-teal-100 hover:text-teal-500 focus:text-teal-500 focus:bg-white focus:shadow-light-teal disabled:text-teal-200"
              : color === "dark"
              ? "text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-800 focus:text-gray-800 focus:bg-white focus:ring-gray-800 focus:shadow-light-gray disabled:text-gray-200"
              : color === "danger"
              ? "text-red-500 bg-white hover:bg-red-100 hover:text-red-500 focus:text-red-500 focus:bg-white focus:shadow-light-danger disabled:text-red-200"
              : color === "warning"
              ? "text-yellow-500 bg-white hover:bg-yellow-100 hover:text-yellow-500 focus:text-yellow-500 focus:bg-white focus:shadow-light-warning disabled:text-yellow-200"
              : color === "light"
              ? "hover:bg-white text-black focus:bg-white focus:text-gray-500 disabled:bg-white disabled:text-gray-300"
              : ""
            : "",
          //soft
          variant === "soft"
            ? color === "primary"
              ? "text-blue-500 bg-blue-100 hover:bg-blue-600 hover:text-white focus:text-blue-500 focus:bg-blue-100 focus:shadow-light-primary disabled:bg-blue-50 disabled:text-blue-200"
              : color === "secondary"
              ? "text-gray-500 bg-gray-50 hover:bg-gray-600 hover:text-white focus:text-gray-500 focus:bg-gray-50 focus:shadow-light-gray disabled:bg-slate-50 disabled:text-gray-300"
              : color === "info"
              ? "text-teal-500 bg-teal-100 hover:bg-teal-600 hover:text-white focus:text-teal-500 focus:bg-teal-100 focus:shadow-light-teal disabled:bg-teal-50 disabled:text-teal-200"
              : color === "dark"
              ? "text-gray-800 bg-gray-100 hover:bg-gray-900 hover:text-white focus:text-gray-800 focus:bg-gray-100 focus:ring-gray-800 focus:shadow-light-gray disabled:bg-gray-50 disabled:text-gray-200"
              : color === "danger"
              ? "text-red-500 bg-red-100 hover:bg-red-600 hover:text-white focus:text-red-500 focus:bg-red-100 focus:shadow-light-danger disabled:bg-red-50 disabled:text-red-200"
              : color === "warning"
              ? "text-yellow-500 bg-yellow-100 hover:bg-yellow-600 hover:text-white focus:text-yellow-500 focus:bg-yellow-100 focus:shadow-light-warning disabled:bg-yellow-50 disabled:text-yellow-200"
              : color === "light"
              ? "text-gray-100 hover:bg-white hover:text-gray-500 focus:bg-white focus:text-gray-100 disabled:bg-white disabled:text-gray-300"
              : ""
            : "",
          //link
          variant === "link"
            ? color === "primary"
              ? "text-blue-500 bg-white hover:bg-white hover:text-blue-700 focus:text-blue-500 focus:bg-white focus:shadow-light-primary disabled:text-blue-200"
              : color === "secondary"
              ? "text-gray-500 bg-white hover:bg-white hover:text-gray-500 focus:text-gray-700 focus:bg-white focus:shadow-light-gray disabled:text-gray-300"
              : color === "info"
              ? "text-teal-500 bg-white hover:bg-white hover:text-teal-700 focus:text-teal-500 focus:bg-white focus:shadow-light-teal disabled:text-teal-200"
              : color === "dark"
              ? "text-gray-800 bg-white hover:bg-white hover:text-gray-900 focus:text-gray-800 focus:bg-white focus:ring-gray-800 focus:shadow-light-gray disabled:text-gray-200"
              : color === "danger"
              ? "text-red-500 bg-white hover:bg-white hover:text-red-700 focus:text-red-500 focus:bg-white focus:shadow-light-danger disabled:text-red-200"
              : color === "warning"
              ? "text-yellow-500 bg-white hover:bg-white hover:text-yellow-700 focus:text-yellow-500 focus:bg-white focus:shadow-light-warning disabled:text-yellow-200"
              : color === "light"
              ? "hover:bg-white text-black focus:bg-white disabled:bg-white disabled:text-gray-300"
              : ""
            : "",
          //white
          variant === "white"
            ? color === "primary"
              ? "border border-solid border-gray-200 text-blue-500 bg-white hover:bg-white hover:text-blue-500 focus:text-blue-500 focus:bg-white focus:shadow-light-gray disabled:text-blue-300"
              : color === "secondary"
              ? "border border-solid border-gray-200 text-gray-500 bg-white hover:bg-white hover:text-gray-500 focus:text-gray-700 focus:bg-white focus:shadow-light-gray disabled:text-gray-300"
              : color === "info"
              ? "border border-solid border-gray-200 text-teal-500 bg-white hover:bg-white hover:text-teal-500 focus:text-teal-500 focus:bg-white focus:shadow-light-gray disabled:text-teal-300"
              : color === "dark"
              ? "border border-solid border-gray-200 text-gray-800 bg-white hover:bg-white hover:text-gray-800 focus:text-gray-800 focus:bg-white focus:ring-gray-800 focus:shadow-light-gray disabled:text-gray-300"
              : color === "danger"
              ? "border border-solid border-gray-200 text-red-500 bg-white hover:bg-white hover:text-red-500 focus:text-red-500 focus:bg-white focus:shadow-light-gray disabled:text-red-300"
              : color === "warning"
              ? "border border-solid border-gray-200 text-yellow-500 bg-white hover:bg-white hover:text-yellow-500 focus:text-yellow-500 focus:bg-white focus:shadow-light-gray disabled:text-yellow-200"
              : color === "light"
              ? "hover:bg-white text-black focus:bg-white disabled:bg-white disabled:text-gray-300"
              : ""
            : "",
          size === "lg" && "text-15/4.5 px-5 py-[22px]",
          size === "md" && "text-15/4.5 px-4 py-3.5",
          size === "sm" && "text-15/4.5 px-3 py-2.5",
          disabled && "pointer-events-none select-none",
          rounded && "rounded-md",
          fullWidth && "w-full justify-center",
          "font-semibold"
        ),
        onClick: disabled
          ? (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
              e.preventDefault();
            }
          : props.onClick,
      },
      <>
        {StartIcon && (
          <StartIcon
            className={classNames(
              "mr-1",
              size === "sm" ? "h-3 w-3 " : "h-5 w-5",
              startIconClassName || ""
            )}
          />
        )}
        {props.children}
        {EndIcon && (
          <EndIcon
            className={classNames(
              "ml-1",
              size === "sm" ? "h-3 w-3 " : "h-5 w-5",
              endIconClassName || ""
            )}
          />
        )}
      </>
    );
    return props.href ? (
      <Link passHref href={props.href}>
        {element}
      </Link>
    ) : (
      element
    );
  }
);

export default Button;
