import React, { useState, useEffect } from 'react';
import { Text, View, Image, Button, TextInput } from 'react-native';
import styled, {css} from 'styled-components';

import picture from "./assets/photo.jpeg";

export default function App() {
  const [isShow, setShow] = useState(false);
  const [text, setText] = useState('');
  const [listText, setListText] = useState([]);

  const onPressAction = (isShow, setShow) => {
    setShow(!isShow);
  }

  const onSubmit = () => {
    // debugger
    setListText([...listText, text]);
    setText('');
  };


  useEffect(()=> {
    // alert('aaa');
  }, [listText]);
  
  const displayList = () => {
    console.log(listText);
    if (listText) {
      console.log("OK")
      return listText.map(textChild => (
        <Text>{textChild}</Text>
      ))
    } 
    return null;
  }

  return (
      <MyView>
        <Button
          onPress={() => onPressAction(isShow, setShow)}
          title="DDDl!"
        />
        <Text>Hello World</Text>
        <TextInput style={{height: 40, alignItems: 'center'}} value={text} placeholder="Type here" onChangeText={(input) => setText(input)} onSubmitEditing={() => onSubmit()} />
        {displayList()}
        <MyImage source={picture} isShow={isShow}/>
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
  opacity: 0;
  ${props => props.isShow && css`
    opacity: 1;
  `}
`;
