/* eslint-disable react/prop-types */
import ScreenHeading from "./screenHeading";

const MainScreenContent = ({children, screenClasses, heading, contentClasses}) => {
    return (
        <div className={screenClasses || ''}>
            {
                heading
                ? (
                    <ScreenHeading
                        title={heading?.title}
                        classes={heading?.classes}
                    />
                )
                : null
            }

            <div className={`container ${contentClasses || ''}`}>
                {children}
            </div>
        </div>
    );
};

export default MainScreenContent;