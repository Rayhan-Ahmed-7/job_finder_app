// import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

// import styles from './nearbyjobs.style';
// import { COLORS } from '../../../constants';
// import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

// import { useRouter, useSearchParams } from 'expo-router';
// import React, { useState } from 'react';

// const JobSearch = () => {
//     const params = useSearchParams();
//     const router = useRouter();

//     const [searchResult, setSearchResult] = useState([]);
//     const [searchLoader, setSearchLoader] = useState(false);
//     const [searchError, setSearchError] = useState(null);
//     const [page, setPage] = useState(1);

//     const handleSearch = async () => {
//         setSearchLoader(true);
//         setSearchResult([]);

//         try {
//             const options = {
//                 method: 'GET',
//                 url: `https://jsearch.p.rapidapi.com/search`,
//                 headers: {
//                     'X-RapidAPI-Key': '130969c48fmshe815ca1b282dc39p1bcf2cjsn7b90e6068417',
//                     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//                 },
//                 params: {
//                     query: params.id,
//                     page: page.toString(),
//                 },
//             };
//             const response = await axios.request(options);
//             setSearchResult(response.data.data);
//         } catch (error) {
//             setSearchError(error);
//         } finally {
//             setSearchLoader(false);
//         }
//     }
//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.headerTitle}>
//                     Nearby jobs
//                 </Text>
//                 <TouchableOpacity>
//                     <Text style={styles.headerBtn}>Show All</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.cardsContainer}>
//                 {
//                     isLoading ?
//                         (
//                             <ActivityIndicator size='large' colors={COLORS.primary} />
//                         )
//                         : error ? (
//                             <Text>Something went wrong</Text>
//                         )
//                             : (
//                                 data?.map((job) => (
//                                     <NearbyJobCard
//                                         job={job}
//                                         key={`nearby-job-${job?.job_id}`}
//                                         handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
//                                     />
//                                 ))
//                             )
//                 }
//             </View>
//         </View>
//     );
// };

// export default JobSearch;
import React from 'react';
import { Text } from 'react-native';

const JobSearch = () => {
    return (
        <Text>Under implementation</Text>
    );
};

export default JobSearch;