import RoomList from '@/components/admin/rooms/room-list'
import CMSLayout from '@/layouts/cms-layout'
import React from 'react'

const Room: React.FC = () => {
  return (
    <CMSLayout >
        <RoomList ></RoomList>
    </CMSLayout>
  )
}

export default Room