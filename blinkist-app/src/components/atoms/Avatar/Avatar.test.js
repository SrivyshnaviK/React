import React from 'react';

import { render } from '@testing-library/react';
import Avatars from './Avatar';


describe('Avatar', () => {
    test('Checking the avatar', () => {
      const {getByTestId}=render(<Avatars src="srivyshnavikoduri@gmail.com" alt="SK"/>)
      //console.log(render(<Avatar src="srivyshnavikoduri@gmail.com" alt="SK"/>));
      const avatar = getByTestId("Avatar")
      console.log("Print Name:"+avatar.alt);
      console.log("2nd"+avatar.textContent+"  "+avatar.alt);
      console.log(avatar)
      console.log(avatar.__reactProps$zzar832q4fr.className.children.props);
      expect(avatar).toBeInTheDocument();
    })
  })