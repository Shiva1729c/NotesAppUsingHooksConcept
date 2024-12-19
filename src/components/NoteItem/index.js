// Write your code here
import {NoteCard, ItemTitle, ItemDescription} from './styledComponents'

const NoteItem = props => {
  const {notesDetails} = props
  const {title, description} = notesDetails
  return (
    <NoteCard>
      <ItemTitle>{title}</ItemTitle>
      <ItemDescription>{description}</ItemDescription>
    </NoteCard>
  )
}
export default NoteItem
