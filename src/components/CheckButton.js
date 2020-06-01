import React from 'react'
import styled from 'styled-components'
import { IoMdCheckmarkCircle } from 'react-icons/io'

const CheckBox = styled.input`
  appearance: none;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 1px solid #3a3a3c;
  cursor: pointer;
  position: relative;
  outline: none;
  margin: 0;
`

const CheckButton = ({ value, onLogin, loginState }) => {
  return (
    <CheckBoxWrapper className="checkbox-wrapper">
      <CheckBox type="checkbox" value={value} onChange={onLogin} />
      {loginState === value && <IoMdCheckmarkCircle />}
    </CheckBoxWrapper>
  )
}

const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-left: auto;
  svg {
    position: absolute;
    display: block;
    width: 75%;
    height: 75%;
    color: white;
  }
`

export default CheckButton
