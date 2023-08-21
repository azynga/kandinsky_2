import axios from 'axios';

export const loadData = (setContentState, setErrorState) => {
    const localContentData = sessionStorage.getItem('contentData');
    if (localContentData) {
        setContentState(JSON.parse(localContentData));
        return;
    }

    axios('https://api.npoint.io/6b31b68cd216c3593c44')
        .then((response) => {
            setErrorState('');
            const { data } = response;
            setContentState(data);
            sessionStorage.setItem('contentData', JSON.stringify(data));
        })
        .catch((error) => {
            console.error(error);
            setErrorState('Error: ' + error.message);
        });
};
