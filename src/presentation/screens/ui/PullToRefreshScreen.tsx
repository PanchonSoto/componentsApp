

import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';

import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { colors } from '../../../config/theme/theme';


export const PullToRefreshScreen = () => {

    const [isRefreshing, setRefreshing] = useState(false);

    const { top } =useSafeAreaInsets();

    const onRefresh = ()=> {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
        }, 4200);
    }

  return (
    <ScrollView
    refreshControl={
        <RefreshControl
         colors={[colors.primary, 'red', 'orange', 'green']}
         refreshing={isRefreshing}
         progressViewOffset={top}
         onRefresh={onRefresh}
        />
    }>
        <CustomView>
            <Title text="Pull to refresh" safe/>
        </CustomView>
    </ScrollView>
  )
}
