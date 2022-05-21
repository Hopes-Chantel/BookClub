import react, {useState} from 'react'

import ProfileBio from "../../components/ProfileBio/ProfileBio";


export default function ProfilePage(props) {
  const [user, setUser] = useState({});
  return (
<>
<h1> My Books</h1>
<ProfileBio user={user} />
</>

  );
}

