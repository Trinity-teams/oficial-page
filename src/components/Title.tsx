import React from 'react'

const Title = ({ text, className }: any) => {
    return (
        <div className={`font-semibold relative ${className}`}>
            <span className=' relative z-10'>{text}</span>
            <span
                style={{
                    width: `calc(${text.length * 6}px)`,
                }}
                className='w-[50px] h-[7px] flex bg-primary/80 -translate-y-[9px] -z-10'
            />
        </div>
    )
}

export default Title