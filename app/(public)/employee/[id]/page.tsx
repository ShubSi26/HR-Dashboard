import users from "@/lib/users";
import Ratingbar from "@/components/ratingbar";
import PastPerformance from "@/components/pastperformance";
import TabbedProfile from "@/components/tabbs";

export default function EmployeePage({ params }: { params:any }) {

  const userIndex = Number(params.id); 
  const user = users.results[userIndex]; 
  const rating = Math.floor(Math.random() * 5) + 1; 

  if (!user) {
    return <div>User not found</div>;
  }

  return (<div className="flex flex-col sm:flex-row w-full h-full overflow-auto">
    <div className="sm:w-1/3 w-full mx-auto p-6 gap-4 flex flex-col rounded shadow">
        <div className="flex flex-col w-full justify-center items-center  p-2">
            <h1 className="text-2xl font-bold mb-4">
                {user.name.title} {user.name.first} {user.name.last}
            </h1>
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="rounded-full w-32 h-32 mb-4" />
            <Ratingbar rating={rating} />
        </div>
      
        <div>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Age:</strong> {user.dob.age} (Born on {new Date(user.dob.date).toLocaleDateString()})</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.login.username}</p>
        </div>
        <div>
            <h2 className=" font-semibold">Location</h2>
            <p>{user.location.street.number} {user.location.street.name}</p>
            <p>{user.location.city}, {user.location.state}</p>
            <p>{user.location.country} - {user.location.postcode}</p>
            <p>Coordinates: {user.location.coordinates.latitude}, {user.location.coordinates.longitude}</p>
            <p>Timezone: {user.location.timezone.description} ({user.location.timezone.offset})</p>
        </div>
        <div>
            <h2 className=" font-semibold">Contact</h2>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Cell:</strong> {user.cell}</p>

            <h2 className="mt-4 font-semibold">ID</h2>
            <p>{user.id.name}: {user.id.value}</p>

            <h2 className="mt-4 font-semibold">Nationality</h2>
            <p>{user.nat}</p>
        </div>
    </div>
    <div className="sm:w-2/3 w-full mx-auto p-6 gap-4 flex flex-col rounded shadow">
       <PastPerformance/> 
       <TabbedProfile user={user}/>
    </div>
    
  </div>);
}
