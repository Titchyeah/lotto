import className from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
    children,
    primary,
    secondary,
    bingo,
    selected,
    winning,
    disabled,
    ...rest
}) {
    let classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-white border-2 bg-indigo-500 text-white h-10 rounded-full': primary,
        'border-indigo-900 bg-gray-100 text-indigo-900 h-8 mt-1 rounded-full': secondary,
        'border-black bg-white text-black h-6 w-6 md:w-8 md:h-8 lg:w-14 lg:h-14 rounded-full justify-center m-1': bingo,
        'border-white bg-green-500 text-black h-6 w-6 md:w-8 md:h-8 lg:w-14 lg:h-14 rounded-full': bingo && selected,
        'border-white border-4 bg-indigo-500 text-white opacity-25 cursor-default disabled': primary && disabled,
    })

    classes = twMerge(classes);

    return <button {...rest} className={classes} disabled={disabled}>
        {children}
    </button>
}

export default Button;