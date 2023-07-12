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
        'border-[#FFDD4A] border-2 bg-[#2F2F2F] text-[#DAD2D8] h-10 rounded-full hover:bg-[#FFDD4A] hover:text-[#2F2F2F]': primary,
        'border-[#FFDD4A] bg-[#2F2F2F] text-[#DAD2D8] h-8 mt-1 rounded-full hover:bg-[#FFDD4A] hover:text-[#2F2F2F]': secondary,
        'border-[#FFDD4A] bg-[#2F2F2F] text-[#FFDD4A] h-6 w-6 md:w-8 md:h-8 lg:w-14 lg:h-14 rounded-full justify-center m-1': bingo,
        'border-[#FFDD4A] bg-[#FFDD4A] text-[#2F2F2F] h-6 w-6 md:w-8 md:h-8 lg:w-14 lg:h-14 rounded-full': bingo && selected,
        'border-white border-2 bg-[#2F2F2F] text-[#DAD2D8] opacity-25 cursor-default disabled hover:bg-[#2f2f2f] hover:text-[#DAD2D8]': primary && disabled,
    })

    classes = twMerge(classes);

    return <button {...rest} className={classes} disabled={disabled}>
        {children}
    </button>
}

export default Button;