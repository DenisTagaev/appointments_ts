import { useState } from "react";
import { BiArchive } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import Appointment from "./components/Appointment";

import Iappointment from "./interfaces/Iappointment";

import { useAppSelector } from "./redux/hooks";

function App(): JSX.Element {
  const appointmentList : Iappointment[] = useAppSelector((state) => state.appointments.value);

  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("petName");
  const [orderBy, setOrderBy] = useState("asc");

  const filteredAppointments : Iappointment[] = appointmentList.filter(
    (item : Iappointment) => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a: Iappointment, b: Iappointment) => {
    const order: number = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
    )
  })

  return (
    <div className="App container mx-auto mt-3">
      <h1 className="text-3xl">
        <BiArchive className="inline-block text-red-500 align-bottom"/>Your Appointments
      </h1>
      <Search query={query}
        onQueryChange={myQuery => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={mySort => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={mySort => setSortBy(mySort)}
      />

      <AddAppointment
        lastId={appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}
      />
      <ul className="divide-y divide-gray-200">
        {filteredAppointments
          .map(appointment => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
