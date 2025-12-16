import { useParams } from 'react-router-dom';
import { fetchPlaceDetails } from '../../firebase/api';


import type { LoaderFunctionArgs } from 'react-router-dom';
// або (залежно від setup)
// import type { LoaderFunctionArgs } from 'react-router';


export async function loaderPlace({ params }: LoaderFunctionArgs) {
    let placeDetails = await fetchPlaceDetails(params.placeId)
        .catch((error) => {
      console.error('Error fetching Plase details:', error);
    });
  return placeDetails;
}


const Place = () => { 
    const { placeId } = useParams<{ placeId: string | undefined }>();

    return (
        <div>
            <h1>Place Page</h1>
            <p>Place ID: {placeId}</p>
            <p>Place Details</p>
        </div>
    );
}
 
export default Place;   