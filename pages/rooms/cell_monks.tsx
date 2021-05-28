import RoomComponent from 'components/room-page'
import { rooms } from 'content/rooms'

function CellMonksRoom() {

    return <RoomComponent 
        id={rooms.room2.id}
        roomName={rooms.room2.name}
        description={rooms.room2.description}
        guestsAmount={rooms.room2.guestsAmount}
        price={rooms.room2.price}
        images={rooms.room2.images}
    />
}

export default CellMonksRoom
