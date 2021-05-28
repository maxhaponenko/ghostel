import RoomComponent from 'components/room-page'
import { rooms } from 'content/rooms'

function KnightsRoom() {

    return <RoomComponent 
        id={rooms.room3.id}
        roomName={rooms.room3.name}
        description={rooms.room3.description}
        guestsAmount={rooms.room3.guestsAmount}
        price={rooms.room3.price}
        images={rooms.room3.images}
    />
}

export default KnightsRoom
