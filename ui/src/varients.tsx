// fadeIn function
export const fadeIn = (direction: string, key?: number) => {
    const animation = {
        hidden: {
            y: direction === 'down' ? 80 : direction === 'up' ? -80 : 0,
            opacity: 0,
            x: direction === 'right' ? 80 : direction === 'left' ? -80 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.4,
                ease: [0.25, 0.25, 0.25, 0.75],
            } as any,
        },
    };

    if (key) {
        animation.show.transition = {
            ...animation.show.transition,
            delay: key / 4
        }
    }
    return animation
};
