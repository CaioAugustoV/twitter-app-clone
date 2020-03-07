import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import * as Style from './styled';
import * as Colors from '../common/colors';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <>
      <Style.Container>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Style.ContainerIcon
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Icon name={label} solid size={30} color={Colors.primary} />
            </Style.ContainerIcon>
          )
        })}
      </Style.Container>
    </>
  );
};

export default TabBar;
