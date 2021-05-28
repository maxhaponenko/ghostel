import RoomComponent from 'components/room-page'
import { rooms } from 'content/rooms'

function LordsChembersRoom() {

    return <RoomComponent 
        id={rooms.room1.id}
        roomName={rooms.room1.name}
        description={rooms.room1.description}
        guestsAmount={rooms.room1.guestsAmount}
        price={rooms.room1.price}
        images={rooms.room1.images}
    />
}

export default LordsChembersRoom
