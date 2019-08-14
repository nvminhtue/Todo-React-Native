import React, { useState, useEffect } from 'react';
import { Text, View, Image, Button } from 'react-native';
import styled from 'styled-components';

import picture from "./assets/photo.jpeg";

export default function App() {
  const [onShow, setShow] = useState(false);
  const onPressAction = (onShow, setShow) => {
    // setShow(!onShow);
    alert("button was pressed!");
  }

  useEffect(()=> {
    alert('alo alo');
  }, [onShow]);
  
  return (
      <MyView>
        <Button
          onPress={onPressAction(onShow, setShow)}
          title="Clickme!"
        />
        <Text>Hello World</Text>
        {
           onShow && <MyImage source={picture} />
        }
      </MyView>
  )
};

const MyView = styled(View)`
  flex: 1;
  background: white;
  align-items: center;
  justify-content: center;
`;

const MyImage = styled(Image)`
  width: 100px;
  height: 100px;
`;
