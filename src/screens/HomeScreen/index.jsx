import React, { useContext, useState } from "react";
import '../../styles/screen/home.css';
import { HISTORY } from "../../constants/routes";
import HistoryContext from "../../services/historyContext";
import CustomButton from "../../components/customButton";
import { formatDate } from "../../utilities/helper";

const MainScreenContent =  React.lazy(() => import("../../components/screenContent"));
const CustomInputField = React.lazy(() => import("../../components/customInput"));
// const CustomButton = React.lazy(() => import("../../components/customButton"));

const HomeScreen = () => {
    const { saveSearchHistory } = useContext(HistoryContext);

    const [loading, setLoading] = useState(false);

    const [searchQuery, setSearchQuery] = useState('');
    const [currentCityInfo, setCurrentCityInfo] = useState(null);
    const [error, setError] = useState(false);

    const onSearchWeatherForPlace = async (query) => {
        if(!query) {
            setError(true);
            return;
        }

        setLoading(true);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
        const response = await fetch(url);

        setLoading(false);

        if(!response?.ok) {
            setCurrentCityInfo(null);
            return;
        }

        const data = await response.json();

        setCurrentCityInfo(data);
        setSearchQuery('');

        saveSearchHistory((prev) => {
            const id = prev.length < 1 ? 1 : prev[prev.length - 1]?.id + 1;
            const newPlace = {
                id,
                name: query,
                temp: data?.main?.temp,
            };
            return [...prev, newPlace];
        })
    };

    return (
        <>
            <MainScreenContent
                heading={{
                    title: 'Weather',
                    classes: 'text-center',
                }}
                screenClasses={'home-screen'}
                contentClasses={"home-search-container"}
            >
                <div className="d-flex align-start gap-4">
                    <div className="d-flex align-start w-100">
                        <div className="w-100 ">
                            <CustomInputField
                                type={'text'}
                                placeholder={'City'}
                                value={searchQuery}
                                onChange={(event) => {
                                    setSearchQuery(event?.target?.value);
                                }}
                            />

                            {
                                error
                                ? <small className="d-flex text-red">Please enter any city</small>
                                : null
                            }
                            
                        </div>
                        <CustomButton
                            title={'Search'}
                            type={'outline'}
                            onClick={() => {
                                onSearchWeatherForPlace(searchQuery);
                            }}
                            tooltip={'History'}
                        />
                    </div>
                    <CustomButton
                        title={'History'}
                        type={'primary'}
                        url={HISTORY}
                        tooltip={'History'}
                    />
                </div>
                
                
                <div className="d-flex justify-center weather-info">
                    {
                        loading
                        ? <>Loading...</>
                        : currentCityInfo
                            ? (
                                <>
                                    <div className="place-name">{currentCityInfo?.name}, {currentCityInfo?.sys.country}</div>
                                    <div className="place-time">{currentCityInfo?.dt ? formatDate(currentCityInfo?.dt, 'day time') : null }</div>
                                    <div className="place-weather">
                                        {
                                            currentCityInfo?.weather?.map((data) => {
                                                return <span key={data?.id}>{data?.main}, </span>
                                            })
                                        }
                                    </div>
                
                                    <div className="place-temp">{currentCityInfo?.main?.temp}<sup>0</sup>C</div>
                                </>
                            )
                            : <>No Data</>
                    }
                </div>
            </MainScreenContent>
        </>
    );
};

export default HomeScreen;


// api.openweathermap.org/data/2.5/forecast/daily?q=Lucknow&cnt=7&appid=181507697f671d8a8f521eaf1c5fa346