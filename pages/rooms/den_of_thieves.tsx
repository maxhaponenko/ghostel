import RoomComponent from 'components/room-page'
import { rooms } from 'content/rooms'

function ThiefesRoom() {

    return <RoomComponent 
        id={rooms.room4.id}
        roomName={rooms.room4.name}
        description={rooms.room4.description}
        guestsAmount={rooms.room4.guestsAmount}
        price={rooms.room4.price}
        images={rooms.room4.images}
    />
}

export default ThiefesRoom
