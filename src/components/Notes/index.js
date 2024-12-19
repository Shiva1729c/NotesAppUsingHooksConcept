// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  Heading,
  Form,
  TitleInput,
  DescriptionInput,
  AddButton,
  NoteItemContainer,
  EmptyImage,
  EmptyTitle,
  EmptyDescription,
  EmptyNoteContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeDesc = event => {
    setDescription(event.target.value)
  }

  const onAddNotes = event => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      title,
      description,
    }

    if (title.trim() !== '' && description.trim() !== '') {
      setNotesList(prevNotesList => [...prevNotesList, newNote])
    }

    setTitle('')
    setDescription('')
  }

  const renderNotesForm = () => (
    <Form onSubmit={onAddNotes}>
      <TitleInput
        type="text"
        placeholder="Title"
        value={title}
        onChange={onChangeTitle}
      />
      <DescriptionInput
        rows="4"
        cols="40"
        placeholder="Take a Note..."
        value={description}
        onChange={onChangeDesc}
      />
      <AddButton type="submit">Add</AddButton>
    </Form>
  )

  const renderEmptyNote = () => (
    <EmptyNoteContainer>
      <EmptyImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyTitle>No Notes Yet</EmptyTitle>
      <EmptyDescription>Notes you add will appear here</EmptyDescription>
    </EmptyNoteContainer>
  )

  const renderNotesContainer = () => (
    <NoteItemContainer>
      {notesList.map(eachNote => (
        <NoteItem key={eachNote.id} notesDetails={eachNote} />
      ))}
    </NoteItemContainer>
  )
  return (
    <MainContainer>
      <Heading>Notes</Heading>
      {renderNotesForm()}
      {notesList.length > 0 ? renderNotesContainer() : renderEmptyNote()}
    </MainContainer>
  )
}

export default Notes
