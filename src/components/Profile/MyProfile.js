import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import ProfileCard from "./ProfileCard";
import SideProfile from "./SideProfile";
import { signout } from "actions/auth";

export default function MyProfile() {
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const handleSignout = () => dispatch(signout());
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="my-profile">
      <SideProfile show={show} onClose={handleClose} />
      <ProfileCard user={user}>
        <Dropdown>
          <Dropdown.Toggle>
            <span className="material-icons text-white">more_vert</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="text-center">
            <Dropdown.Item onClick={handleShow}>Editar perfil</Dropdown.Item>
            <Dropdown.Item onClick={handleSignout}>Cerrar sesión</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ProfileCard>
    </div>
  );
}
