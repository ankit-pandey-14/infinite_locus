import React, { useContext } from 'react';
import '../../styles/screen/history.css';
import { HOME } from '../../constants/routes';
import HistoryContext from '../../services/historyContext';
import CustomButton from '../../components/customButton';

const MainScreenContent =  React.lazy(() => import("../../components/screenContent"));

// const historyList = [
//     {
//         id: 1,
//         name: 'Gorakhpur',
//         temp: '24',
//     },
//     {
//         id: 2,
//         name: 'Jaunpur',
//         temp: '23',
//     },
// ];

const HistoryScreen = () => {
    const { searchHistory, saveSearchHistory } = useContext(HistoryContext);

    const onRemoveSearchData = (id) => {
        const remainingHistoryData = searchHistory?.filter((data) => data?.id !== id);

        saveSearchHistory(remainingHistoryData);
    }

    return (
        <MainScreenContent
            heading={{
                title: 'Search History',
                classes: 'text-center',
            }}
            screenClasses={'history-screen'}
            contentClasses={'history-content'}
        >
            <CustomButton
                title={'Back'}
                url={HOME}
                type={'primary'}
                tooltip={'Back'}
                classes={'w-fit'}
            />
            <section className='history-details'>
                {
                    searchHistory?.length > 0
                    ? searchHistory?.map((place, index) => {
                        return (
                            <div className='d-flex justify-between' key={index}>
                                <div>
                                    <span>{parseInt(index) + 1}.</span>
                                    {" "}
                                    <span>{place?.name} --</span>
                                    {" "}
                                    <span>{place?.temp}<sup>0</sup>C</span>
                                </div>
                                <div className='d-flex gap-2 actions'>
                                    <CustomButton
                                        title={'Edit'}
                                        type={'link'}
                                        tooltip={'Edit'}
                                        classes={'text-underline'}
                                    />
                                    <CustomButton
                                        title={'Delete'}
                                        type={'link'}
                                        tooltip={'Delete'}
                                        onClick={() => {
                                            onRemoveSearchData(place?.id);
                                        }}
                                        classes={'text-underline'}
                                    />
                                </div>
                            </div>
                        );
                    })
                    : <div>No Data Found</div>
                }
            </section>
        </MainScreenContent>
    );
};

export default HistoryScreen;