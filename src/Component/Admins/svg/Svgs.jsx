import React from 'react';

const getSVG = (name, styles) => {
    switch (name) {
        case 'insta':
            return (
                <g id="Iconly/Light/Calling" stroke="none" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                    <g id="Calling" transform="translate(2.000000, 2.500000)" stroke={styles.stroke} stroke-width="1.5">
                        <path d="M12.353,1.95399252e-14 C16.054,0.411 18.978,3.331 19.393,7.032" id="Stroke-1"></path>
                        <path d="M12.353,3.543 C14.124,3.887 15.508,5.272 15.853,7.043" id="Stroke-3"></path>
                        <path d="M9.03152183,9.97238745 C13.0205087,13.9603606 13.9254376,9.34671782 16.46525,11.8848116 C18.9138181,14.3327574 20.322201,14.8232052 17.2188207,17.9247236 C16.8302273,18.2370218 14.3612634,21.9942591 5.68446558,13.3196663 C-2.9934057,4.64400029 0.761566311,2.17244427 1.07394391,1.78394958 C4.18376493,-1.32615434 4.66682308,0.0893829491 7.11539117,2.53732879 C9.65413011,5.07649576 5.04253498,5.9844143 9.03152183,9.97238745 Z" id="Stroke-5"></path>
                    </g>
                </g>
            );
        default:
            return <path />
    }
}

const Svgs = ({
    name = '',
    style = {},
    fill = '#000000',
    viewBox = ' ',
    width = ' ',
    height = '',
    className = ' ',
    id = ' ',
    stroke = ' '
}) => (
    <svg
        width={width}
        height={height}
        style={style}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        id={id}
    >
        {getSVG(name, { fill, stroke })}
    </svg>
);
export default Svgs;
