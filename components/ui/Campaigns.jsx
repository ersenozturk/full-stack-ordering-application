import React from 'react'
import CampaignItem from './CampaignItem'

const Campaigns = () => {
  return (
    <div className='container flex flex-wrap justify-between  py-20 gap-7 mx-auto w-5/6'>
        <CampaignItem title='Tasty Thursdays' discount='20'/>
        <CampaignItem title='Pizza Days' discount='15'/>
    </div>
  )
}

export default Campaigns