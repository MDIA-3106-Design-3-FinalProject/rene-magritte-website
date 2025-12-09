import styles from "./Button.module.css";

export default function Button({ type, onClick, children }) {
    return (
        <>
            {type === "regular" && (
                <button
                    className={styles.button}
                    onClick={onClick}>
                    {children}
                </button>
            )}
            {type === "back" && (
                <button
                    className={styles.buttonNav}
                    onClick={onClick}>
                    <svg
                        className={styles.arrow}
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z'
                            fill='currentColor'
                        />
                    </svg>

                    {children}
                </button>
            )}

            {type === "next" && (
                <button
                    className={styles.buttonNav}
                    onClick={onClick}>
                    {children}
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <mask
                            id='mask0_118_3368'
                            mask-type='alpha'
                            maskUnits='userSpaceOnUse'
                            x='0'
                            y='0'
                            width='24'
                            height='24'>
                            <rect
                                width='24'
                                height='24'
                                fill='#4A6FA5'
                            />
                        </mask>
                        <g mask='url(#mask0_118_3368)'>
                            <path
                                d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z'
                                fill='CurrentColor'
                            />
                        </g>
                    </svg>
                </button>
            )}
        </>
    );
}

