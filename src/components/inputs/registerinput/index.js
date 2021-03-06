import { ErrorMessage, useField } from "formik";
import { useMediaQuery } from "react-responsive";
import "./style.css";

export default function RegisterInput({ placeholder, bottom, ...props }) {
  const [field, meta] = useField(props);
  const dekstopView = useMediaQuery({
    query: "(min-width: 850px)",
  });
  return (
    <div className="input_wrap">
      {meta.touched && meta.error && !bottom && (
        <div
          className={
            dekstopView ? "input_error input_error_dekstop" : "input_error"
          }
          style={{ transform: "translateY(3px)" }}
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={dekstopView ? "error_arrow_left" : "error_arrow_top"}
            ></div>
          )}
        </div>
      )}
      <input
        className={meta.touched && meta.error ? "input_error_border" : ""}
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && bottom && (
        <div
          className={
            dekstopView ? "input_error input_error_dekstop" : "input_error"
          }
          style={{ transform: "translateY(2px)" }}
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={
                dekstopView ? "error_arrow_left" : "error_arrow_bottom"
              }
            ></div>
          )}
        </div>
      )}
      {meta.touched && meta.error && (
        <i
          className="error_icon"
          style={{ top: `${!bottom && !dekstopView ? "63%" : "15px"}` }}
        ></i>
      )}
    </div>
  );
}
