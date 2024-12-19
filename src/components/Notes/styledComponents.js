// Style your elements here
// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  font-weight: 400;
  font-size: 36px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`

export const EmptyImage = styled.img`
  width: 80px;
  height: 80px;
`

export const EmptyTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #1e293b;
  margin-bottom: 0px;
  font-weight: 500;
`

export const EmptyDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #334155;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  box-shadow: 2px 4px 10px 0px #bfbfbf;
  padding: 8px 16px 8px 16px;
  border-radius: 5px;
`

export const TitleInput = styled.input`
  margin-bottom: 20px;
  margin-top: 10px;
  font-family: 'Roboto';
  font-size: 12px;
  border: none;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const DescriptionInput = styled.textarea`
  margin-bottom: 10px;
  font-family: 'Roboto';
  font-size: 12px;
  padding: 8px 16px 8px 16px;
  border: none;
  outline: none;
`

export const AddButton = styled.button`
  margin-bottom: 20px;
  display: flex;
  align-self: flex-end;
  background-color: #4c63b6;
  border: none;
  color: #d8d8d8;
  padding: 6px 12px 6px 12px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 2px;
  margin-right: 20px;
  cursor: pointer;
`
export const NoteItemContainer = styled.ul`
  display: flex;
  padding-left: 0px;
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const EmptyNoteContainer = styled.div`
  text-align: center;
  margin-top: 60px;
`
