import React from "react";

const Example = () => {
    return (
        <div className="grid min-h-[200px] place-content-center bg-slate-900 p-4">
            <DrawOutlineButton>Hover me</DrawOutlineButton>
        </div>
    );
};

 export const DrawOutlineButton = ({ children, ...rest }) => {
    return (
        <div
            {...rest}
            className="group relative rounded-[50%] px-2 py-2 font-medium text-slate-100 transition-colors duration-[400ms]  hover:text-indigo-300"
        >
            <span>{children}</span>

            {/* TOP */}
            <span className="absolute  left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

            {/* RIGHT */}
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

            {/* BOTTOM */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

            {/* LEFT */}
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
        </div>
    );
};

export default Example;