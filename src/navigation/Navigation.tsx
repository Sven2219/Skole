import React, { useState } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SearchCountries from '../fragments/SearchCountries';
import AllCountries from '../fragments/AllCountries';
import COVIDInfo from '../fragments/COVIDInfo';
import { width } from '../helpers/constants';
import { IFragment } from '../helpers/interfaces';

const initialLayout = { width: width };

const Navigation = (): JSX.Element => {
  const [index, setIndex] = useState(0);
  const [routes] = useState<IFragment[]>([
    { key: 'all', title: 'All' },
    { key: 'search', title: 'Search' },
    { key: 'info', title: 'Info' }
  ]);


  const renderScene = SceneMap({
    all: AllCountries,
    search: SearchCountries,
    info: COVIDInfo
  });
  const renderTabBar = (props: any): JSX.Element => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#fff' }}
      style={{ backgroundColor: "#708090" }}
    />
  );
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={initialLayout}
    />
  );
}

export default Navigation;