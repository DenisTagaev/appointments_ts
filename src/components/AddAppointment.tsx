import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";
import IformData from "../interfaces/IformData";

import { useAppDispatch } from "../redux/hooks";
import { addAppointment } from "../redux/appointmentsSlice";

interface Props {
  lastId: number;
}

const AddAppointment = ({ lastId }: Props): JSX.Element => {
  
  const clearData: IformData = {
    ownerName: '',
    petName: '',
    aptDate: '',
    aptTime: '',
    aptNotes: ''
  };

  const dispatch = useAppDispatch();

  const [visibleForm, toggleVisibleForm] = useState(false);
  const [formData, setFormData] = useState(clearData);

  const addAppointmentData = ():void => {
    dispatch(addAppointment({id: `${lastId+1}`, ...formData}) );
    setFormData(clearData);
    toggleVisibleForm(!visibleForm);
  };

  return (
    <div>
      <button onClick={():void => toggleVisibleForm(!visibleForm)}
       className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md
        ${visibleForm ? 'rounded-t-md' : 'rounded-md'}`}>
        <div><BiCalendarPlus className="inline-block align-text-top"/>Add Appointment</div>
      </button>
      {
        visibleForm && 
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Owner Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="ownerName" id="ownerName"
                onChange={(event:React.ChangeEvent<HTMLInputElement>):void => { setFormData({ ...formData, ownerName: event.target.value }) }}
                value={formData.ownerName}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="petName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Pet Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="petName" id="petName"
                onChange={(event:React.ChangeEvent<HTMLInputElement>):void => { setFormData({ ...formData, petName: event.target.value }) }}
                value={formData.petName}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Apt Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="date" name="aptDate" id="aptDate"
                onChange={(event:React.ChangeEvent<HTMLInputElement>):void  => { setFormData({ ...formData, aptDate: event.target.value }) }}
                value={formData.aptDate}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Apt Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="time" name="aptTime" id="aptTime"
                onChange={(event:React.ChangeEvent<HTMLInputElement>):void => { setFormData({ ...formData, aptTime: event.target.value }) }}
                value={formData.aptTime}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea id="aptNotes" name="aptNotes" rows={3}
                onChange={(event:React.ChangeEvent<HTMLTextAreaElement>):void => { setFormData({ ...formData, aptNotes: event.target.value }) }}
                value={formData.aptNotes}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Detailed comments about the condition"></textarea>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button type="submit" onClick={addAppointmentData}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                Submit
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default AddAppointment;