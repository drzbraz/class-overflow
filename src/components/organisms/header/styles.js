import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  min-width: auto;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5050;
  background-color: hsl(180deg 7% 97%);
  height: 50px;
  box-shadow: 0px 1px 24px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Text = styled.h3`
  font-size: 20px;
  padding: 0px 32px;
  cursor: pointer;
`
export const Icone = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 24px;
  position: absolute;
  right: 30px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`
